import { ApiService } from "./api";
import Swal from "sweetalert2";
import { AlertService } from "../../../services/alertService";
import { useSpinner } from '../../../context/SpinnerContext';
import { useState, useEffect, useRef } from "react";
export default function useScreenHooks(petId) {
  
    const [adoptionRequests, setAdoptionRequests] = useState([]);
    const [errors] = useState(null);
    const { show, hide, isLoading } = useSpinner();
    async function handleSubmit(e) {
        e.preventDefault();
        const form = formRef.current;
        if (!form) return;

        if (!form.checkValidity()) {
            form.classList.add("was-validated");
            return;
        }
        try {
            if (!isLoading) show();
            await ApiService.createAdoptionRequestMine({
                phone: telefono,
                address: direccion,
                application: pedido,
                petId: petId,
            });
            hide();
            const alertResponse = await AlertService.showSuccess(
                "La mascota ha sido creada correctamente"
            );
            if (alertResponse.value) window.location.href = "/pets";
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    }


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
        formRef,
        adoptionRequests,
        isLoading,
        errors,
        handleSubmit
    };
}