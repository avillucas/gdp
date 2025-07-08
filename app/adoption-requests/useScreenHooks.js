import { ApiService } from "./api";
import Swal from "sweetalert2";
import { AlertService } from "../../services/alertService";
import { useSpinner } from '../../context/SpinnerContext';
import { useState, useEffect, useCallback } from "react";
export default function useScreenHooks() {
    const [adoptionRequests, setAdoptionRequests] = useState([]);
    const [errors] = useState(null);
    const { show, hide, isLoading } = useSpinner();


    const handleApprove = (e, adoptionRequestId) => {
        e.preventDefault();
        Swal.fire({
            title: "¿Estás seguro de que quieres aprobar la solicitud de adopción?",
            text: "¡Esta acción no se puede deshacer!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, aprobar",
            cancelButtonText: "Cancelar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    if (!isLoading) show();
                    await ApiService.AproveAdoptionRequest(adoptionRequestId);
                    hide();
                    const alertResponse = await AlertService.showSuccess(
                        "La solicitud de adopción ha sido aprobada correctamente"
                    );
                    if (alertResponse.value) window.location.href = "/adoption-requests";
                } catch (error) {
                    console.log("Error fetching data:", error);
                }
            } else {
                console.log("Aprobación cancelada");
            }
        });
    };

    const handleReject = (e, adoptionRequestId) => {
        e.preventDefault();
        Swal.fire({
            title: "¿Estás seguro de que quieres rechazar la solicitud de adopción?",
            text: "¡Esta acción no se puede deshacer!",
            icon: "warning",
            input: "text",
            inputAttributes: {
                autocapitalize: "off", 
                placeholder: "Escribe el motivo del rechazo aquí...",
                required: true,
            },
            showCancelButton: true,
            confirmButtonText: "Sí, rechazar",
            cancelButtonText: "Cancelar",
        }).then(async (result) => {

            console.log("Result:", result);

            if (result.isConfirmed) {
                try {
                    if (!isLoading) show();
                    await ApiService.RejectAdoptionRequest(adoptionRequestId, result.value);
                    hide();
                    const alertResponse = await AlertService.showSuccess(
                        "La solicitud de adopción ha sido rechazada correctamente"
                    );
                    if (alertResponse.value) window.location.href = "/adoption-requests";
                } catch (error) {
                    console.log("Error fetching data:", error);
                }
            } else {
                console.log("Rechazo cancelado");
            }
        });
    };


    const fetchAll = useCallback(async () => {
        try {
            if (!isLoading) show();
            const response = await ApiService.getAll();
            console.log("Fetching all adoption requests...", response.data);
            setAdoptionRequests(response.data);
            hide();
        } catch (error) {
            console.error("Error fetching adoption requests:", error);
            hide();
        }
    }, [isLoading, show, hide]);


    useEffect(() => {
        document.title = "Lista de Solicitudes de Adopción";

        fetchAll();
    }, []);

    return {
        adoptionRequests,
        isLoading,
        errors,
        handleReject,
        handleApprove
    };
}