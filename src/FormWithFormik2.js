import React from "react";
import { Formik, Form, Field } from "formik";
import ErroMessage1 from "./ErroMessage1";
import * as yup from "yup";

function FormWithFormik2() {
  const initialValid = yup.object({
    email: yup.string().required(),
    name: yup.string().required("name must field"),
    age: yup.number().min(18).max(50).required("hello required"),
    Hobbies: yup.array().min(1),
    select: yup.string().min(),
  });
  return (
    <div>
      <Formik
        validationSchema={initialValid}
        initialValues={{
          name: "",
          email: "",
          age: "",
          gender: "",
          Hobbies: "",
          select1: "",
        }}
        onSubmit={(values, action) => {
          console.log(values);
          action.resetForm();
        }}
      >
        <Form>
          <label htmlFor="name"> Name : </label>
          <Field type="text" name="name" placeholder="enter your name" />

          <ErroMessage1 name="name" />
          <br></br>

          <label htmlFor="email"> Email : </label>
          <Field type="email" name="email" placeholder="enter your email" />

          <ErroMessage1 name="email" />
          <br></br>
          <label htmlFor="age"> Age : </label>
          <Field type="number" name="age" placeholder="enter your age" />
          <br></br>

          <label htmlFor="Gender"> Gender : </label>
          <label htmlFor="age"> Male : </label>
          <Field type="radio" name="gender" value="Male" />
          <label htmlFor="age"> Female : </label>
          <Field type="radio" name="gender" value="Female" />
          <br></br>

          {/* <label htmlFor=""> Hobbies : </label> */}
          <label htmlFor=""> Reading : </label>
          <Field type="checkbox" name="Hobbies" value="Reading" />

          <label htmlFor=""> Palying : </label>
          <Field type="checkbox" name="Hobbies" value="Palying" />
          <br></br>

          <Field as="select" name="select1">
            <option value="null"></option>
            <option value="Muslim">Muslim</option>
            <option value="Non Muslim">Non Muslim</option>
          </Field>
          <ErroMessage1 name="select1" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormWithFormik2;
