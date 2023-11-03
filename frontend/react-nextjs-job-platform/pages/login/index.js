import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import AppContext from "../../context/AppContext";
import { CsrfFetch, Post } from "@helpers/fetch_";
import { validateEmail } from "@helpers/string";
import { useLocalStorage } from '@helpers/use_local_storage';
import Headline from "@components/Headline/Headline";
import Button from "@components/Button/Button";
import Icon from "@components/Icon/Icon";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import styles from "@styles/pages_styles/login.module.css";

export async function getStaticProps() {
  return {
    props: {
      GOOGLE_OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
      BASE_BACKEND_URL: process.env.BASE_BACKEND_URL,
    },
  };
}

const Login = (props) => {
  const router = useRouter();
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [type, setType] = useState("");
  const { fetchToken, error } = CsrfFetch();
  const { post, response, pending, error: postError } = Post();
  const [lastLogin, setLastLogin] = useLocalStorage('lastLog', '');

  const { user, authenticated, setAuthenticated, setUser } = useContext(AppContext);

  const handleEmail = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  const openGoogleLoginPage = () => {
    const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const redirectUri = "api/_/cb/" + type + "/";

    const scope = [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ].join(" ");

    const params = {
      response_type: "code",
      client_id: props.GOOGLE_OAUTH_CLIENT_ID,
      redirect_uri: `${props.BASE_BACKEND_URL}/${redirectUri}`,
      prompt: "select_account",
      access_type: "offline",
      scope,
    };
    console.log('[PARAMS]', params);

    const urlParams = new URLSearchParams(params).toString();

    window.location = `${googleAuthUrl}?${urlParams}`;
  };

  useEffect(() => {
    if (!router.isReady) return;
    else {
      if(router.query.t === 'company' || router.query.t === 'candidate') {
        setType(router.query.t);
      } else {
        setType('company');
      }
    }
    return () => {};
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (authenticated) {
      if (user.is_active) {
        router.push("/lease-your-dev-app/");
      }
    }

    fetchToken();

    return () => {};
  }, []);

  useEffect(() => {
    if (authenticated) {
      if (user.is_active) {
        router.push("/lease-your-dev-app/");
      }
    }

    return () => {};
  }, [authenticated]);

  useEffect(() => {
    if (error) {
      console.log("[ERROR]", error);
    }

    return () => {};
  }, [error]);

  useEffect(() => {
    if (response) {
      setUser(response.user);
      setLastLogin(new Date().toString());
      setAuthenticated(true);
    }

    return () => {};
  }, [response]);

  useEffect(() => {
    if (!validateEmail(emailValue)) {
      setEmailError("Email in wrong format");
    } else {
      setEmailError("");
    }

    return () => {};
  }, [emailValue]);
  
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
          <Headline headline="Login" tagName="h1" className={styles.headline} />

          {/* Email input */}
          <label className={styles.label}>Email</label>
          <input
            className={styles.emailInput}
            type={"email"}
            value={emailValue}
            onChange={handleEmail}
          />

          {/* Password input */}
          <label className={styles.label}>Password</label>
          <input
            className={styles.passwordInput}
            type={"password"}
            value={passwordValue}
            onChange={handlePassword}
          />

          {/* Button */}
          <Button
            layout="red"
            className={styles.button}
            onClick={() => {
              post("http://localhost:8000/api/user/login/", {
                email: emailValue,
                password: passwordValue,
              });
            }}
          >
            Login
          </Button>

          {/* Login Methods Divider */}
          <div className={styles.loginMethodsDivider}>
            <span className={styles.divider}>login faster with:</span>
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
            login with google
          </Button>
        </div>
      )}
    </div>
  );
};
export default Login;
