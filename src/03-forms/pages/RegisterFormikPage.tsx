import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Debe tener 2 caracteres como mínimo")
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .min(6, "Debe tener 6 caracteres como mínimo")
            .email("Email no tiene un formato válido")
            .required("Requerido"),
          password1: Yup.string()
            .min(6, "Debe tener 6 caracteres como mínimo")
            .required("Requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las contraseña no son iguales")
            .required("Requerido"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Nombre" name="name" placeholder="Franco" />

            <MyTextInput
              label="Email"
              name="email"
              placeholder="fran@gmail.com"
            />

            <MyTextInput
              label="Password"
              name="password1"
              placeholder="******"
              type="password"
            />
            <MyTextInput
              label="Repeat password"
              name="password2"
              placeholder="******"
              type="password"
            />

            <button type="submit">Crear</button>

            <button type="button" onClick={handleReset}>
              Resetear formulario
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
