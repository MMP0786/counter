import { useFormik } from "formik";
import React from "react";

function FormwithFormik() {
  const intialFormikForm = {
    name: "",
    email: ""
  };

  const formik = useFormik({
    initialValues: intialFormikForm,

    onSubmit: (values, action)=>{
      console.log(values)
      console.log(values.name)
      console.log(values.email)
      action.resetForm()
    }

  });
  return (
    <div>
      <h2> Form with Formik</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name :</label>
        <input type="text" placeholder="Enter your Name" name="name" value={formik.values.name} onChange={formik.handleChange}/> <br></br>
        <label htmlFor="email">Email :</label>
        <input type="email" placeholder="Enter your Name" name="email" value={formik.values.email} onChange={formik.handleChange}/> <br></br>

        <br></br>
        <div><input type="submit" value="submit" /></div>
      </form>
    </div>
  );
}

export default FormwithFormik;
