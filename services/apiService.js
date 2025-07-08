import axios from "axios";
import Swal from "sweetalert2";
import { clearAuth, getToken } from "./authStorageService";
import { callHideSpinner } from "../context/SpinnerContext";

const http = axios.create({ baseURL: "http://localhost/api/" });

http.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers = config.headers || {};
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

http.interceptors.response.use(
  (response) => response,
  (axiosError) => {
    callHideSpinner();
    if (axiosError.response) {
      handleApiError(axiosError.response.status, axiosError.response.data);
    } else {
      showNetworkError();
    }

    return Promise.reject(axiosError.response?.data?.errors || []);
  }
);

function handleApiError(status, data) {
  const message = data?.message || "Ocurrió un error inesperado.";
  const errorText = formatErrorMessages(data?.errors);

  Swal.fire({
    icon: "error",
    title: `Error ${status}: ${message}`,
    text: errorText,
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#d33",
  }).then((result) => {
    if (result.isConfirmed && status === 401) {
      logoutAndRedirect();
    }
  });
}

function formatErrorMessages(errors) {
  if (!errors?.length) return "Por favor, inténtelo de nuevo.";

  return errors
    .map((err) =>
      typeof err === "string" ? err : Object.values(err).join(", ")
    )
    .join(" - ");
}

function showNetworkError() {
  Swal.fire({
    icon: "error",
    title: "Error de red",
    text: "No se pudo conectar al servidor.",
  });
}

function logoutAndRedirect() {
  console.log("Session expired, redirecting to login page.");
  if (window && window.location && window.location.pathname) {
    clearAuth();
   // window.history.replaceState(null, '', "/login");
    window.location.href = "/login";
  }
}


export default http;