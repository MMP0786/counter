import React from "react";
import { useFormik } from "formik";
import { FormSchema } from "./FormSchema";

function FormwithFormik() {
  const intialFormikForm = {
    name: "",
    email: "",
    age: "",
    password: "",
    cpassword: ""

  };

  const formik = useFormik({
    initialValues: intialFormikForm,
    validationSchema: FormSchema,

    onSubmit: (values, action) => {
      console.log(values);
      console.log(values.name);
      console.log(values.email);
      console.log(values.age);
      console.log(values.password);
      action.resetForm();
    },
  });
  return (
    <div>
      <h2> Form with Formik</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          placeholder="Enter your Name"
          name="name" onBlur={formik.handleBlur}
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <br></br>
        <h5>
         {formik.errors.name && formik.touched.name ?  <span style={{ color: "red" }}>{formik.errors.name}</span>: null}
        </h5>
        <br></br>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          placeholder="Enter your Name"
          name="email" onBlur={formik.handleBlur}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <br></br>
        <h5>
          <span style={{ color: "red" }}>{formik.errors.email}</span>
        </h5>
        <br></br>
        <label htmlFor="age">Age :</label>
        <input
          type="number"
          placeholder="Enter your age"
          name="age" onBlur={formik.handleBlur}
          value={formik.values.age}
          onChange={formik.handleChange}
        />
        <br></br>
          <span style={{ color: "red" }}>{formik.errors.age}</span>
        <br></br>
        <label htmlFor="password">PassWord : </label>
        <input
          type="password"
          placeholder="Enter your password"
          name="password" onBlur={formik.handleBlur}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      <span style={{ color: "red" }}>{formik.errors.password}</span>
        <br></br>

        <label htmlFor="cpassword">Confirm PassWord : </label>
        <input
          type="password"
          placeholder="Enter your password"
          name="cpassword" onBlur={formik.handleBlur}
          value={formik.values.cpassword}
          onChange={formik.handleChange}
        />
      <span style={{ color: "red" }}>{formik.errors.cpassword}</span>
        <br></br>
        <br></br>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}

export default FormwithFormik;
// import { useFormik } from "formik";
// import { FormSchema } from "./FormSchema";

// export default function FormwithFormik() {
//   const Fomikform = {
//     name: "",
//   };
//   const formik = useFormik({
//     initialValues: Fomikform,
//     validationSchema: FormSchema,

//     onSubmit: (Values, action) => {
//       console.log(Values);
//       action.resetForm()
//     },
//   });
//   return (
//     <>
//       <form onSubmit={formik.handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formik.values.name}
//           onChange={formik.handleChange}
//         />
//         <input type="submit" value="submit" />
//       </form>
//       Hello from formik
//     </>
//   );
// }
