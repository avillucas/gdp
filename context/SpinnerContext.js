'use client'

import React, { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

let hideSpinner= null;

export function registerHideSpinner(fn) {
  hideSpinner = fn;
}
export function callHideSpinner() {
  hideSpinner && hideSpinner();
}


const SpinnerContext = createContext(undefined);

export function SpinnerProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const show = (title = "Cargando...") => {
    if (isLoading) return;
    setIsLoading(true);
    Swal.fire({
      title,
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        setIsLoading(false);
      },
    });
  };

  const hide = () => {
    Swal.close();
    setIsLoading(false);
  };

  useEffect(() => {
    registerHideSpinner(hide);
  }, [hide]);

  return (
    <SpinnerContext.Provider value={{ show, hide, isLoading }}>
      {children}
    </SpinnerContext.Provider>
  );
}

export function useSpinner() {
  const ctx = useContext(SpinnerContext);
  if (!ctx)
    throw new Error("useSpinner debe usarse dentro de <SpinnerProvider>");
  return ctx;
}