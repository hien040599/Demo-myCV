import React from "react";

function SelectField(props) {
  const { field, form, label, disable, options } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <div className="col-checkout__infor__wrapper__form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <select
        id={name}
        {...field}
        disabled={disable}
        required
        className={
          errors[name] &&
          touched[name] &&
          "col-checkout__infor__wrapper__form-group__errors-notify"
        }
      >
        <option value="">Select a country</option>
        {options.map((element, index) => {
          return (
            <option value={element.value} key={index}>
              {element.label}
            </option>
          );
        })}
      </select>
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

export default SelectField;
