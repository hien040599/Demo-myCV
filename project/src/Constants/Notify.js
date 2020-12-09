import React from "react";
import { ToastContainer, toast } from "react-toastify";

export const toastSuccess = (messages, pos, time, notifyClass) => {
  return toast.success(messages, {
    className: notifyClass,
    position: pos,
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const toastWarn = (messages, pos, time, notifyClass) => {
  return toast.warn(messages, {
    className: notifyClass,
    position: pos,
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const toastError = (messages, pos, time, notifyClass) => {
  return toast.error(messages, {
    className: notifyClass,
    position: pos,
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const toastContainer = (pos, time) => {
  return (
    <ToastContainer
      position={pos}
      autoClose={time}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};
