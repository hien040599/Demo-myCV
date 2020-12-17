import * as Yup from "yup";

export const validateForm = Yup.object().shape({
  name: Yup.string()
    .required("Name is a required field")
    .trim("This field may not contain spaces")
    .strict()
    .min(3, "This field must be greater than 3 characters")
    .max(30, "This field must be less than 30 characters"),
  subject: Yup.string()
    .required("Subject is a required field")
    .strict()
    .min(3, "This field must be greater than 3 characters")
    .max(30, "This field must be less than 30 characters"),
  email: Yup.string()
    .required("Email is a required field")
    .trim("This field may not contain spaces")
    .strict()
    .email("this field should be email"),
  messages: Yup.string().required("Messages is a required field").strict(),
});
