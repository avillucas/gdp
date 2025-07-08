import { ApiService } from "./api";
import Swal from "sweetalert2";
import { AlertService } from "../../../services/alertService";
import { useSpinner } from '../../../context/SpinnerContext';
import { useState, useEffect, useRef } from "react";
export default function useScreenHooks(offerId) {
    const formRef = useRef(null);
    const [offer, setOffer] = useState(null);
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [application, setApplication] = useState("");
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
                petId: offer.pet.id,
            });
            hide();
            const alertResponse = await AlertService.showSuccess(
                "La solicitud de adopción ha sido creada correctamente"
            );
            if (alertResponse.value) window.location.href = "/pets";
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    }

 async function fetchData() {
    try {
      if (offerId) {
        if (!isLoading) show();
        const offerData = await ApiService.getAdoptionOffer(offerId);
        setOffer(offerData);
        console.log("Offer data fetched:", offerData);
        hide();
      }
    } catch (error) {
      console.log("Error fetching data:", error);
      hide();
    }
  };



    useEffect(() => {
        document.title = "Solicitud de adopción";
        console.log("Fetching all adoptions...", adoptionRequests);
        fetchData();
    }, []);

    return {
       formRef,
        offer,
        address,  
        setAddress,
        phone,  
        setPhone,
        application,    
        setApplication,
        offerId,
        adoptionRequests,
        isLoading,
        errors,
        handleSubmit
    };
}