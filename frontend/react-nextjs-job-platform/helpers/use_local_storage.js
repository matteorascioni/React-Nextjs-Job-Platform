import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  // getting stored value
  if (typeof window === "undefined") {
    return "";
  }
  const saved = localStorage.getItem(key);
  try {
    const initial = JSON.parse(saved);
    return initial || defaultValue;
  } catch {
    return defaultValue;
  }
}

export const setExpireDateToNow = () => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.setItem("expire", JSON.stringify(new Date().toString()));
};

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value, typeof window === "undefined"]);

  return [value, setValue];
};
