import { ApiService } from "./api";
import Swal from "sweetalert2";
import { AlertService } from "../../services/alertService";
import { useSpinner } from '../../context/SpinnerContext';
import { useState, useEffect, useCallback } from "react";
export default function useScreenHooks() {
    const [offers, setOffers] = useState([]);
    const [errors] = useState(null);
    const { show, hide, isLoading } = useSpinner();

    const handleEdit = (e, offerId) => {
        e.preventDefault();
        window.location.href = `/adoption-offers/${offerId}`;
    };
    const handleDelete = (e, offerId) => {
        e.preventDefault();
        Swal.fire({
            title: "¿Estás seguro de que quieres eliminar la oferta?",
            text: "¡Esta acción no se puede deshacer!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    if (!isLoading) show();
                    await ApiService.deletePet(petId);
                    hide();
                    const alertResponse = await AlertService.showSuccess(
                        "La oferta ha sido eliminada correctamente"
                    );
                    if (alertResponse.value) window.location.href = "/adoption-offers";
                } catch (error) {
                    console.log("Error fetching data:", error);
                }
            } else {
                console.log("Eliminación cancelada");
            }
        });
    };
    const handdlePublish = (e, offerId) => {
        e.preventDefault();
        Swal.fire({
            title: "¿Estás seguro de que quieres publicar la oferta?",
            text: "¡Esta acción no se puede deshacer!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, publicar",
            cancelButtonText: "Cancelar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    if (!isLoading) show();
                    await ApiService.publishOffer(offerId);
                    hide();
                    const alertResponse = await AlertService.showSuccess(
                        "La oferta ha sido publicada correctamente"
                    );
                    if (alertResponse.value) window.location.href = "/adoption-offer";
                } catch (error) {
                    console.log("Error fetching data:", error);
                }
            } else {
                console.log("Eliminación cancelada");
            }
        });
    };
    const handleDraft = (e, offerId) => {
        e.preventDefault();
        Swal.fire({
            title: "¿Estás seguro de que quieres pasar a borrador la oferta?",
            text: "¡Esta acción no se puede deshacer!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, pasar a borrador",
            cancelButtonText: "Cancelar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    if (!isLoading) show();
                    await ApiService.draftOffer(offerId);
                    hide();
                    const alertResponse = await AlertService.showSuccess(
                        "La oferta ha sido enviada a borrador correctamente"
                    );
                    if (alertResponse.value) window.location.href = "/adoption-offer";
                } catch (error) {
                    console.log("Error fetching data:", error);
                }
            } else {
                console.log("Eliminación cancelada");
            }
        });
    };
    const handleCreate = (e) => {
        e.preventDefault();
        window.location.href = `/adoption-offer-create`;
    };


    const fetchAll = useCallback(async () => {
        try {
            if (!isLoading) show();
            const response = await ApiService.getAll();
            setOffers(response.data);
            hide();
        } catch (error) {
            console.error("Error fetching offers:", error);
            hide();
        }
    }, [isLoading, show, hide]);


    useEffect(() => {
        document.title = "Lista de Ofertas";
        console.log("Fetching all offers...", offers);
        fetchAll();
    }, []);

    return {
        offers,
        isLoading,
        errors,
        handdlePublish,
        handleDraft,
        handleEdit,
        handleDelete,
        handleCreate,
    };
}