import { ApiService } from "./api";
import { useSpinner } from '../../context/SpinnerContext';
import { AlertService } from "../../services/alertService";
import { useState, useEffect, useRef } from "react";
export default function useScreenHooks() {
   const formRef = useRef(null);
    const [errors] = useState(null);
    const { show, hide, isLoading } = useSpinner();
    const [tipo, setTipo] = useState("");
    const [raza, setRaza] = useState("");
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [tamanio, setTamanio] = useState("");
    const [tipos] = useState([{ "value": "cat", "name": "Gato" }, { "value": "dog", "name": "Perro" }]);
    const [tamanios] = useState([
      { "value": "small", "name": "Chico ( 1 a 5kg )" },
      { "value": "medium", "name": "Mediano ( 6 a 15kg )" },
      { "value": "large", "name": "Grande ( 16 a 50kg )" }
    ]);
  
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
        await ApiService.createPet({
          type: tipo,
          breed: raza,
          name: nombre,
          age: edad,
          size: tamanio,
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
  
    useEffect(() => {
      document.title = "Crear Mascotas";
    }, [show, hide, isLoading, tipo, raza, nombre, edad, tamanio]);
  

     return {
    formRef,
    raza,
    setRaza,
    nombre,
    setNombre,
    edad,
    setEdad,
    tamanio,
    setTamanio,
    tipo,
    setTipo,
    tamanios,
    tipos,
    handleSubmit,
  };
}