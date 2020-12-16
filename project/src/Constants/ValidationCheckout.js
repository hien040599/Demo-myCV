import * as Yup from "yup";


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
      .trim("This field may not contain spaces")
      .strict()
      .min(3, "This field must be greater than 3 characters")
      .max(30, "This field must be less than 30 characters"),
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
  });
  