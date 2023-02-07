import { oneOf } from "prop-types";
import * as Yup from "yup";

export const FormSchema = Yup.object({
  name: Yup.string()
    .min(3, "name must be min 3 char")
    .max(20, " name must be less than 20 charactor")
    .required("name is compulsury"),
  email: Yup.string()
    .min(3, "name must be min 3 char")
    .max(40, " name must be less than 20 charactor")
    .required("email is compulsury"),
  age: Yup.number()
    .min(10, "name must be min 10 year")
    .max(40, " name must be less than 20 charactor")
    .required("email is compulsury"),
  password: Yup.string()
    .required("pas is compulsury")
    .matches(
      /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}/,
      "enter strong passwor"
    ),
  cpassword: Yup.string().oneOf([Yup.ref("password"), null], " both pass will be matchedd")
});
