import React from 'react';
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./LoginForm.form";


export function LoginForm() {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                console.log(formValue);
            } catch (error) {
                console.error(error);
            }
        }
    });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input 
        name="email" 
        placeholder="Correo electronico" 
        onChange={formik.handleChange} 
        value={formik.values.email}
        error={formik.errors.email}
      />
      <Form.Input 
        name="password" 
        type="password" 
        placeholder="Contraseña"
        onChange={formik.handleChange} 
        value={formik.values.password}
        error={formik.errors.password}
      />
      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Entrar
      </Form.Button>
    </Form>
  );
}
