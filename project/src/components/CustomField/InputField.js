import React from "react";

function InputField(props) {
  const { field, form, type, label, placeholder, disable } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
      <div className="form-group">
        <input
          type={type}
          id={name}
          {...field}
          placeholder={placeholder}
          disabled={disable}
          required
          className={errors[name] && touched[name] && "errors-notify"}
        />
        {label && <label htmlFor={name}>{label}</label>}
        {showError && (
          <div className="form-group__notify-error">
            <p>{errors[name]}</p>
          </div>
        )}
        {touched[name] === true && errors[name] === undefined ? (
          <div className="form-group__notify-success"></div>
        ) : (
          ""
        )}
      </div>
  );
}

export default InputField;
