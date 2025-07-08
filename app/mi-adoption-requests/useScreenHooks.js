import { ApiService } from "./api";
import Swal from "sweetalert2";
import { AlertService } from "../../services/alertService";
import { useSpinner } from '../../context/SpinnerContext';
import { useState, useEffect, useCallback } from "react";
export default function useScreenHooks() {
  
    const [adoptionRequests, setAdoptionRequests] = useState([]);
    const [errors] = useState(null);
    const { show, hide, isLoading } = useSpinner();
  
    const fetchAll = useCallback(async () => {
        try {
            if (!isLoading) show();
            const response = await ApiService.getMineAdoptionRequests();
            console.log("Fetching all adoption requests...", response.data);
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
        errors
    };
}