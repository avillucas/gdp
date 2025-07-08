import { ApiService } from "./api";
import Swal from "sweetalert2";
import { AlertService } from "../../services/alertService";
import { useSpinner } from '../../context/SpinnerContext';
import { useState, useEffect, useCallback } from "react";
export default function useScreenHooks() {
    const [adoptionRequests, setAdoptionRequests] = useState([]);
    const [errors] = useState(null);
    const { show, hide, isLoading } = useSpinner();


    const handleCreate = (e, petId) => {
        e.preventDefault();
        Swal.fire({
            title: "¿Estás seguro de que quieres realizar la solicitud de adopción?",
            text: "¡Esta acción no se puede deshacer!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, aprobar",
            cancelButtonText: "Cancelar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    if (!isLoading) show();
                    await ApiService.CreateAdoptionRequest(petId);
                    hide();
                    const alertResponse = await AlertService.showSuccess(
                        "La solicitud de adopción ha sido creada correctamente. Será respondida en breve "
                    );
                    if (alertResponse.value) window.location.href = "/adoption-requests";
                } catch (error) {
                    console.log("Error fetching data:", error);
                }
            } else {
                console.log("Solicitud cancelada");
            }
        });
    };



    const fetchAll = useCallback(async () => {
        try {
            if (!isLoading) show();
            const response = await ApiService.getMineAdoptionRequests();
            setAdoptionRequests(response.data);
            hide();
        } catch (error) {
            console.error("Error fetching adoptions:", error);
            hide();
        }
    }, [isLoading, show, hide]);


    useEffect(() => {
        document.title = "Listar mis peticiones de adopción";
        console.log("Fetching all adoptions...", adoptionRequests);
        fetchAll();
    }, []);

    return {
        adoptionRequests,
        isLoading,
        errors,
        handleCreate
    };
}