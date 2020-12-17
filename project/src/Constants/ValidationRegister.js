import * as Yup from "yup";

export const validateForm = Yup.object().shape({
  username: Yup.string()
    .required("Username is a required field")
    .trim("This field may not contain spaces")
    .strict()
    .min(3, "This field must be greater than 3 characters")
    .max(30, "This field must be less than 30 characters"),
  password: Yup.string()
    .required("Password is a required field")
    .trim("This field may not contain spaces")
    .strict()
    .min(3, "This field must be greater than 3 characters")
    .max(30, "This field must be less than 30 characters"),
  email: Yup.string()
    .required("Email is a required field")
    .trim("This field may not contain spaces")
    .strict()
    .email("this field should be email"),
  repassword: Yup.string()
    .required("Confirm password is a required field")
    .trim("This field may not contain spaces")
    .strict()
    .min(3, "This field must be greater than 3 characters")
    .max(6, "This field must be less than 6 characters")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
