
import { useState, useEffect } from "react";
import { api } from "./api.js";
import { useNavigate } from "react-router-dom";
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
const { show, isLoading } = useSpinner();
const { login } = useGlobal();


async function handleSubmit(event) {
    event.preventDefault();
    try {
        if (!isLoading) show();
        const response = await api.login({ email, password });
        login(response.token, response.user);
        navigate("/dashboard");
    } catch (error) {
        console.error("Error on login:", error);
    }
}

useEffect(() => {
    document.title = "Iniciar Sesión";
}, []);

return { email, password, setEmail, setPassword, handleSubmit };