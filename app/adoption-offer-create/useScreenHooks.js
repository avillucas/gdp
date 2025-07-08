import { ApiService } from "./api";
import { useSpinner } from '../../context/SpinnerContext';
import { AlertService } from "../../services/alertService";
import { useState, useEffect, useRef } from "react";
export default function useScreenHooks() {
  const formRef = useRef(null);
  const [errors] = useState(null);
  const { show, hide, isLoading } = useSpinner();
  const [bajada, setBajada] = useState("");
  const [titulo, setTitulo] = useState("");
  const [mascotaId, setMascotaId] = useState("");

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
      await ApiService.createAdoptionOffer({
        title: titulo,
        headline: bajada,
        pet_id: mascotaId,
      });
      hide();
      const alertResponse = await AlertService.showSuccess(
        "La oferta de adopción ha sido creada correctamente"
      );
      if (alertResponse.value) window.location.href = "/adoption-offer";
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  useEffect(() => {
    document.title = "Crear Oferta de Adopción";
  }, [show, hide, isLoading, errors,bajada, titulo, mascotaId]);


  return {
    errors,
    formRef,
    titulo,
    setTitulo,
    bajada,
    setBajada,
    mascotaId,
    setMascotaId,
    isLoading,
    show,
    hide,
    handleSubmit,
  };
}