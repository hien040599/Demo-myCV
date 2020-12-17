import React from "react";

function TextareaFieldContact(props) {
  const { field, form, type, label, placeholder, disable } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <div className="col-contact-form__content__form-group">
      <textarea
        type={type}
        id={name}
        {...field}
        placeholder={placeholder}
        disabled={disable}
        required
        className={
          errors[name] &&
          touched[name] &&
          "col-contact-form__content__form-group__errors-notify"
        }
      />
      {label && <label htmlFor={name}>{label}</label>}
      {showError && (
        <div className="col-contact-form__content__form-group__notify-error">
          <p>{errors[name]}</p>
        </div>
      )}
    </div>
  );
}

export default TextareaFieldContact;
