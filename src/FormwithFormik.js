import { useFormik } from "formik";
import React from "react";

function FormwithFormik() {
  const intialFormikForm = {
    name: "",
    email: "",
    age: "",
    password:""
  };

  const formik = useFormik({
    initialValues: intialFormikForm,

    onSubmit: (values, action)=>{
      console.log(values)
      console.log(values.name)
      console.log(values.email)
      console.log(values.age)
      console.log(values.password)
      action.resetForm()
    }

  });
  return (
    <div>
      <h2> Form with Formik</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name :</label>
        <input type="text" placeholder="Enter your Name" name="name" value={formik.values.name} onChange={formik.handleChange}/> <br></br>
        <br></br>
        <label htmlFor="email">Email :</label>
        <input type="email" placeholder="Enter your Name" name="email" value={formik.values.email} onChange={formik.handleChange}/> <br></br>

        <br></br>
        <label htmlFor="age">Age :</label>
        <input type="number" placeholder="Enter your age" name="age" value={formik.values.age} onChange={formik.handleChange}/> <br></br>
        <br></br>
        <label htmlFor="password">PassWord : </label>
        <input type="password" placeholder="Enter your password" name="password" value={formik.values.password} onChange={formik.handleChange}/> <br></br>

        <br></br>
        <div><input type="submit" value="submit" /></div>
      </form>
    </div>
  );
}

export default FormwithFormik;
