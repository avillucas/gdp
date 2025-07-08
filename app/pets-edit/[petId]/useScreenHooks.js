import { ApiService } from "./api";
import { useSpinner } from '../../../context/SpinnerContext';
import { AlertService } from "../../../services/alertService";
import { useState, useEffect, useRef } from "react";
export default function useScreenHooks(petId) {
  const formRef = useRef(null);
  const { show, hide, isLoading } = useSpinner();
  const [tipo, setTipo] = useState("");
  const [raza, setRaza] = useState("");
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [tamanio, setTamanio] = useState("");
  const [tipos] = useState([
    { value: "cat", name: "Gato" },
    { value: "dog", name: "Perro" },
  ]);
  const [tamanios] = useState([
    { value: "small", name: "Chico ( 1 a 5kg )" },
    { value: "medium", name: "Mediano ( 6 a 15kg )" },
    { value: "large", name: "Grande ( 16 a 50kg )" },
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
      await ApiService.updatePet({
        id: petId,
        type: tipo,
        breed: raza,
        name: nombre,
        age: edad,
        size: tamanio,
      });
      hide();
      const alertResponse = await AlertService.showSuccess(
        "La mascota ha sido editada correctamente"
      );
      if (alertResponse.value) window.location.href = "/pets";
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }
  async function fetchData() {
    try {
      if (petId) {
        if (!isLoading) show();
        const petData = await ApiService.getPetById(petId);
        if (petData.data) {
          setTipo(petData.data.type);
          setRaza(petData.data.breed);
          setNombre(petData.data.name);
          setEdad(petData.data.age);
          setTamanio(petData.data.size);
        }
        hide();
      }
    } catch (error) {
      console.log("Error fetching data:", error);
      hide();
    }
  };
  useEffect(() => {
    document.title = "Editar Mascotas";
    if (petId) {
      fetchData();
    }
  }, []);

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