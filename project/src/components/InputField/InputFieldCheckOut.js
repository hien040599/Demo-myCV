import React from "react";

function InputFieldCheckOut(props) {
  const { field, form, type, label, placeholder, disable } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <div className="col-checkout__infor__wrapper__form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        {...field}
        placeholder={placeholder}
        disabled={disable}
        required
        className={
          errors[name] &&
          touched[name] &&
          "col-checkout__infor__wrapper__form-group__errors-notify"
        }
      />
      {showError && (
        <div className="col-checkout__infor__wrapper__form-group__notify-error">
          <p>{errors[name]}</p>
        </div>
      )}
      {touched[name] === true && errors[name] === undefined ? (
        <div className="col-checkout__infor__wrapper__form-group__notify-success"></div>
      ) : (
        ""
      )}
    </div>
  );
}

export default InputFieldCheckOut;
