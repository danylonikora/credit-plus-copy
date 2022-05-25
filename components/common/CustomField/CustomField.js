import React from "react";
import { Field, ErrorMessage } from "formik";
import * as styles from "./CustomField.module.scss";

function CustomField({
  className = "",
  type = "text",
  options = [],
  nameAndId,
  label,
  placeholder,
}) {
  return (
    <div className={styles.fieldContainer}>
      <label className={styles.label} htmlFor={nameAndId}>
        {label}
      </label>
      {(() => {
        if (type === "select") {
          return (
            <Field
              className={styles.select + " " + className}
              as="select"
              id={nameAndId}
              name={nameAndId}
              label={label}
            >
              {options.map((option) => (
                <option value={option.value}>{option.text}</option>
              ))}
            </Field>
          );
        }

        return (
          <Field
            className={
              type === "textarea"
                ? styles.textArea + " " + className
                : styles.input + " " + className
            }
            as={type === "textarea" ? "textarea" : null}
            type={type === "textarea" ? null : type}
            id={nameAndId}
            name={nameAndId}
            placeholder={placeholder}
            label={label}
            autoComplete="off"
          />
        );
      })()}
      <ErrorMessage name={nameAndId}>
        {(msg) => <span className={styles.error}>{msg}</span>}
      </ErrorMessage>
    </div>
  );
}

export default CustomField;
