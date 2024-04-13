import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";

export default function ContactForm({ onAdd }) {
  const formId = nanoid();

  const formValidationSchema = Yup.object().shape({
    nameValue: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    numberValue: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        "Phone number must be in the format xxx-xx-xx"
      )
      .required("Phone number is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const { nameValue, numberValue } = values;

    onAdd({
      name: nameValue,
      number: numberValue,
      id: formId,
    });

    resetForm();
  };

  return (
    <Formik
      initialValues={{
        nameValue: "",
        numberValue: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={formValidationSchema}
    >
      <Form className={styles.formElement}>
        <label className={styles.labelElement} htmlFor="name">
          Name
        </label>
        <Field className={styles.inputElement} name="nameValue" id="name" />
        <ErrorMessage
          className={styles.incorrectName}
          name="nameValue"
          component="div"
        />
        <label className={styles.labelElement} htmlFor="number">
          Number
        </label>
        <Field
          className={styles.inputElement}
          type="tel"
          name="numberValue"
          id="number"
        />
        <ErrorMessage
          className={styles.incorrectNumber}
          name="numberValue"
          component="div"
        />
        <button className={styles.buttonItem} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}