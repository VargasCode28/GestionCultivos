import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";



export function useLoginHook() {
    
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();


const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
    const data = await login(email, password);


    const userToStore = {
        ...data,
        email: data.email || email
    };

    window.localStorage.setItem("user", JSON.stringify(userToStore));

    if (data.rol === "admin") {
        navigate("/admin");
    } else {
        navigate("/user");
    }
    } catch (error) {
        console.error("Error login:", error);
    alert("Credenciales inválidas");
    }
};


    return {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit
}
}
