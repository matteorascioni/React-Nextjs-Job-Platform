import { useContext, useState } from "react";
import AppContext from "context/AppContext";

export const CsrfFetch = () => {
  const { setCsrfToken } = useContext(AppContext);
  const [error, setError] = useState("");
  const [backendUrl, setBackendUrl] = useState(
    "http://localhost:8000/api/user/csrf/"
  );
  const fetchToken = () => {
    fetch(backendUrl, {
      credentials: "include",
    })
      .then((res) => {
        let csrf = res.headers.get("x-csrftoken");
        setCsrfToken(csrf);
        return true;
      })
      .catch((err) => {
        setError(err);
        return false;
      });
  };
  return { fetchToken, error };
};

// export const Put = () => {
//     const [error, setError] = useState("");
//     const [pending, setPending] = useState(false);
//     const [response, setResponse] = useState(null);
//     const { csrfToken } = useContext(AppContext);
//     const put = (postfix, post_data) => {
//         setPending(true);
//         return fetch(BACKEND_URL + postfix, {
//             method: "PUT",
//             credentials: "include",
//             headers: {
//                 "X-CSRFToken": csrfToken,
//                 "Content-Type": "application/json",
//             },
//             mode: "cors",
//             body: JSON.stringify(post_data),
//         })
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error("Could not connect to the server");
//             } else {
//                 console.log(res.ok, res, "logging res");
//             }
//         })
//         .then((data) => {
//             setPending(false);
//             console.log(data);
//             setResponse(data);
//             setError("");
//             return true;
//         })
//         .catch((err) => {
//             setPending(false);
//             setError(err);
//             console.log(err);
//             return false;
//         });
//     };
//     return { put, pending, response, error };
// };

// export const Delete = () => {
//     const [error, setError] = useState("");
//     const [pending, setPending] = useState(false);
//     const [response, setResponse] = useState(null);
//     const { csrfToken } = useContext(AppContext);
//     const delete_ = (postfix) => {
//         setPending(true);
//         return fetch(BACKEND_URL, postfix, {
//             method: "DELETE",
//             credentials: "include",
//             headers: {
//                 "X-CSRFToken": csrfToken,
//                 "Content-Type": "application/json",
//             },
//             mode: "cors",
//             body: JSON.stringify(post_data),
//         })
//         .then((res) => {
//             if (!res.ok) {
//             throw new Error("Could not connect to the server");
//             } else {
//             console.log(res.ok, res, "logging res");
//             }
//         })
//         .then((data) => {
//             setPending(false);
//             setResponse(data);
//             setError("");
//             return true;
//         })
//         .catch((err) => {
//             setPending(false);
//             setError(err);
//             console.log(err);
//             return false;
//         });
//     };
//     return { delete_, response, pending, error };
// };

export const Post = () => {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [response, setResponse] = useState(null);
  const { csrfToken, setCsrfToken } = useContext(AppContext);
  const post = (url, post_data) => {
    setPending(true);
    console.log(csrfToken);
    return fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "X-CSRFtoken": csrfToken,
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(post_data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPending(false);
        console.log("PostData: ", data);
        setResponse(data);
        setError("");
        return true;
      })
      .catch((res) => {
        setPending(false);
        console.log(res);
        return false;
      });
  };
  return { post, pending, response, error };
};

export const Get = () => {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [response, setResponse] = useState(null);

  const get = (postfix) => {
    return fetch("http://localhost:8000/" + postfix, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    })
      .then((res) => {
        if (res.ok) {
          setPending(false);
        }
        return res.json();
      })
      .then((data) => {
        setResponse(data);
        return true;
      })
      .catch((err) => {
        setPending(false);
        setError(err);
        return false;
      });
  };
  return { get, pending, response, error };
};
