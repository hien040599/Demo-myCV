import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validateForm = Yup.object().shape({
  firstname: Yup.string()
    .required("First name is a required field")
    .trim("This field may not contain spaces")
    .strict()
    .min(3, "This field must be greater than 3 characters")
    .max(30, "This field must be less than 30 characters"),
  lastname: Yup.string()
    .required("Last name is a required field")
    .trim("This field may not contain spaces")
    .strict()
    .min(3, "This field must be greater than 3 characters")
    .max(30, "This field must be less than 30 characters"),
  companyname: Yup.string()
    .required("Company name is a required field")
    .trim("This field may not contain spaces")
    .strict()
    .min(3, "This field must be greater than 3 characters")
    .max(30, "This field must be less than 30 characters"),
  towncity: Yup.string()
    .required("Town / City is a required field")
    .trim("This field may not contain spaces")
    .strict()
    .min(3, "This field must be greater than 3 characters")
    .max(30, "This field must be less than 30 characters"),
  statecounty: Yup.string()
    .required("State / County is a required field")
    .trim("This field may not contain spaces")
    .strict()
    .min(3, "This field must be greater than 3 characters")
    .max(30, "This field must be less than 30 characters"),
  phone: Yup.string()
    .required("Phone is a required field")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Invalid phone number")
    .max(10, "Invalid phone number"),
  postcode: Yup.string()
    .required("postcode / Zip is a required field")
    .trim("This field may not contain spaces")
    .strict()
    .min(3, "This field must be greater than 3 characters")
    .max(30, "This field must be less than 30 characters"),
  email: Yup.string()
    .required("Email is a required field")
    .trim("This field may not contain spaces")
    .strict()
    .email("this field should be email"),
  address: Yup.string()
    .required("Address is a required field")
    .trim("This field may not contain spaces")
    .strict()
    .min(3, "This field must be greater than 3 characters")
    .max(30, "This field must be less than 30 characters"),
  countryId: Yup.string()
    .required("Country is a required field")
    .trim("This field may not contain spaces")
    .strict()
    .min(1, "This field must be greater than 1 characters")
    .max(30, "This field must be less than 30 characters"),
});
