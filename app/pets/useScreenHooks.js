import { ApiService } from "./api";
import Swal from "sweetalert2";
import { AlertService } from "../../services/alertService";
import { useSpinner } from '../../context/SpinnerContext';
import { useState, useEffect, useCallback  } from "react";
export default function useScreenHooks() {
    const [pets, setPets] = useState([]);
    const [errors] = useState(null);
    const { show, hide, isLoading } = useSpinner();
    const handleDetail = (e, petId) => {
        e.preventDefault();
        window.location.href = `/pets/${petId}`;
    };
    const handleEdit = (e, petId) => {
        e.preventDefault();
        window.location.href = `/pets/edit/${petId}`;
    };
    const handleDelete = (e, petId) => {
        e.preventDefault();
        Swal.fire({
            title: "¿Estás seguro de que quieres eliminar la mascota?",
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
                        "La mascota ha sido eliminada correctamente"
                    );
                    if (alertResponse.value) window.location.href = "/pets";
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
        window.location.href = `/pets-create`;
    };


  const fetchAll = useCallback(async () => {
    try {
      if (!isLoading) show();
      const response = await ApiService.getAll();
      setPets(response.data);
      hide();
    } catch (error) {
      console.error("Error fetching pets:", error);
      hide();
    }
  }, [isLoading, show, hide]);

  
  useEffect(() => {
    document.title = "Lista de Mascotas";
    console.log("Fetching all pets...",pets);
    fetchAll();
  }, []);

    return {
        pets,
        isLoading,
        errors,
        handleDetail,
        handleEdit,
        handleDelete,
        handleCreate,
    };
}