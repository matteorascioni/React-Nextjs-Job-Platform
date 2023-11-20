import { useState, useEffect } from "react";
import validator from "validator";

const RegistratiState = () => {
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [verificaEmail, setVerificaEmail] = useState("");
    const [verificaEmailError, setVerificaEmailError] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [verificaPassword, setVerificaPassword] = useState("");
    const [verificaPasswordError, setVerificaPasswordError] = useState(false);
    const [acconsente, setAcconsente] = useState(false);
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (validator.isEmail(email)) {
            setEmailError(false);
        } else {
            setEmailError(true);
        }
        if (validator.equals(verificaEmail, email)) {
            setVerificaEmailError(false);
        } else {
            setVerificaEmailError(true);
        }
        if (validator.equals(verificaPassword, password)) {
            setVerificaPasswordError(false);
        } else {
            setVerificaPasswordError(true);
        }
        if (
            validator.isAlphanumeric(password) &&
            validator.isLength(password, { min: 8, max: 64 })
        ) {
            setPasswordError(false);
        } else {
            setPasswordError(true);
        }
        if (
            verificaEmailError,
            emailError,
            verificaPasswordError,
            passwordError,
            !acconsente
        ) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [email, password, verificaEmail, verificaPassword, acconsente]);
    const handleAcconsente = (e) => {
        setAcconsente(e.target.checked);
    };
    const handleNome = (e) => {
        setNome(e.target.value);
    };
    const handleCognome = (e) => {
        setCognome(e.target.value);
    };
    const handleVerificaEmail = (e) => {
        setVerificaEmail(e.target.value);
    };
    const handleVerificaPassword = (e) => {
        setVerificaPassword(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    return {
        nome,
        handleNome,
        cognome,
        handleCognome,
        email,
        handleEmail,
        verificaEmail,
        handleVerificaEmail,
        password,
        handlePassword,
        verificaPassword,
        handleVerificaPassword,
        acconsente,
        handleAcconsente,
        emailError,
        passwordError,
        verificaEmailError,
        verificaPasswordError,
        formValid,
    };
};
export default RegistratiState;
