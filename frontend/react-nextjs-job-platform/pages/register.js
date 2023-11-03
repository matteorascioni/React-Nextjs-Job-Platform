import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import Headline from "@components/Headline/Headline";
import Button from "@components/Button/Button";
import Icon from "@components/Icon/Icon";
import { useState, useEffect } from "react";
import styles from "@styles/pages_styles/login.module.css";
import {
  validateEmail,
  validateHasNumber,
  validatePasswordLength,
  validateUpperCase,
  validateLowerCase,
} from "@helpers/string";
import { Post, CsrfFetch } from "@helpers/fetch_";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmEmailValue, setConfirmEmailValue] = useState("");
  const [confirmEmailError, setConfirmEmailError] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [differentEmailError, setDifferentEmailError] = useState("");
  const [differentPasswordError, setDifferentPasswordError] = useState("");
  const { post, pending, response, error: postError } = Post();
  const { fetchToken, error } = CsrfFetch();
  useEffect(() => {
    fetchToken();
  }, []);
  useEffect(() => {
    if (!validateEmail(emailValue)) {
      setEmailError("Email in wrong format");
    } else {
      setEmailError("");
    }
    if (!validateEmail(confirmEmailValue)) {
      setConfirmEmailError("Email in wrong format");
    } else {
      setConfirmEmailError("");
    }
    if (emailValue !== confirmEmailValue) {
      setDifferentEmailError("Emails are not the same");
    } else {
      setDifferentEmailError("");
    }
    return () => {};
  }, [emailValue, confirmEmailValue]);

  useEffect(() => {
    const passwordLengthError = validatePasswordLength(passwordValue);
    const passwordUpperCaseError = validateUpperCase(passwordValue);
    const passwordLowerCaseError = validateLowerCase(passwordValue);
    const passwordNumberError = validateHasNumber(passwordValue);

    if (passwordLengthError) {
      setPasswordError(
        passwordError + "The password shoulòd contain at least 8 characters"
      );
    }

    if (passwordUpperCaseError) {
      setPasswordError(
        passwordError +
          "The password should contain at least one upper case character"
      );
    }

    if (passwordLowerCaseError) {
      setPasswordError(
        passwordError +
          "The password should contain at least one lower case character"
      );
    }

    if (passwordNumberError) {
      setPasswordError(
        passwordError + "The password should contain at least one number"
      );
    }
    if (
      !passwordLengthError &&
      !passwordUpperCaseError &&
      !passwordLowerCaseError &&
      !passwordNumberError
    ) {
      setPasswordError("");
    }
  }, [passwordValue]);

  useEffect(() => {
    const passwordLengthError = validatePasswordLength(confirmPasswordValue);
    const passwordUpperCaseError = validateUpperCase(confirmPasswordValue);
    const passwordLowerCaseError = validateLowerCase(confirmPasswordValue);
    const passwordNumberError = validateHasNumber(confirmPasswordValue);

    if (passwordLengthError) {
      setConfirmPasswordError(
        confirmPasswordError +
          "The password shoulòd contain at least 8 characters"
      );
    }

    if (passwordUpperCaseError) {
      setConfirmPasswordError(
        confirmPasswordError +
          "The password should contain at least one upper case character"
      );
    }

    if (passwordLowerCaseError) {
      setConfirmPasswordError(
        confirmPasswordError +
          "The password should contain at least one lower case character"
      );
    }

    if (passwordNumberError) {
      setConfirmPasswordError(
        confirmPasswordError + "The password should contain at least one number"
      );
    }
    if (
      !passwordLengthError &&
      !passwordUpperCaseError &&
      !passwordLowerCaseError &&
      !passwordNumberError
    ) {
      setConfirmPasswordError("");
    }
  }, [confirmPasswordValue]);

  useEffect(() => {
    if (passwordValue !== confirmPasswordValue) {
      setDifferentPasswordError("The passwords must be the same");
    } else {
      setDifferentPasswordError("");
    }
  }, [passwordValue, confirmPasswordValue]);

  const handleEmail = (e) => {
    setEmailValue(e.target.value);
  };
  const handleConfirmEmail = (e) => {
    setConfirmEmailValue(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPasswordValue(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  return (
    <div
      className={`
        grid-full-width
        ${styles.container}
      `}
    >
      {pending ? (
        <LoadingSpinner />
      ) : (
        // Content
        <div
          className={`
            grid-8--mobile
            grid-5--tablet
            grid-6--desktop-small
            grid-4--desktop-large
            ${styles.content}
          `}
        >
          {/* Headline */}
          <Headline
            headline="Register"
            tagName="h1"
            className={styles.headline}
          />
          {/* First name input */}
          <label className={styles.label}>First name</label>
          <input
            className={styles.emailInput}
            type={"text"}
            value={firstName}
            onChange={handleFirstName}
          />
          {/* Last name input */}
          <label className={styles.label}>Last name</label>
          <input
            className={styles.emailInput}
            type={"text"}
            value={lastName}
            onChange={handleLastName}
          />
          {/* Email input */}
          <label className={styles.label}>Email</label>
          <input
            className={styles.emailInput}
            type={"email"}
            value={emailValue}
            onChange={handleEmail}
          />

          {/* Confirm Email input */}
          <label className={styles.label}>Confirm Email</label>
          <input
            className={styles.emailInput}
            type={"email"}
            value={confirmEmailValue}
            onChange={handleConfirmEmail}
          />

          {/* Password input */}
          <label className={styles.label}>Password</label>
          <input
            className={styles.passwordInput}
            type={"password"}
            value={passwordValue}
            onChange={handlePassword}
          />

          {/* Confirm Password input */}
          <label className={styles.label}>Confirm Password</label>
          <input
            className={styles.passwordInput}
            type={"password"}
            value={confirmPasswordValue}
            onChange={handleConfirmPassword}
          />

          {/* Button */}
          <Button
            layout="red"
            className={styles.button}
            onClick={() => {
              post("http://localhost:8000/api/user/register/", {
                first_name: firstName,
                last_name: lastName,
                email: emailValue,
                password: passwordValue,
                password2: confirmPasswordValue,
              });
            }}
          >
            Register
          </Button>

          {/* Login Methods Divider */}
          <div className={styles.loginMethodsDivider}>
            <span className={styles.divider}>register faster with:</span>
          </div>

          {/* Google Button */}
          <Button
            layout="white"
            className={styles.googleButton}
            onClick={() => {
              openGoogleLoginPage();
            }}
          >
            <Icon icon="google_login" className={styles.googleIcon} />
            Register with google
          </Button>
        </div>
      )}
    </div>
  );
};

export default Register;
