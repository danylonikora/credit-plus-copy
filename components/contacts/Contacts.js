import React, { useState, useEffect } from "react";
import * as styles from "./Contacts.module.scss";
import PhoneInfo from "../common/PhoneInfo/PhoneInfo";
import PhoneSvg from "../../public/images/phone.svg";
import MailSvg from "../../public/images/mail.svg";
import ClockSvg from "../../public/images/clock.svg";
import LocationSvg from "../../public/images/location.svg";
import ClipSvg from "../../public/images/clip.svg";
import TickSvg from "../../public/images/tick.svg";
import useTranslation from "../../utils/useTranslation";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import CustomField from "../common/CustomField/CustomField";
import ConditionalComponent from "../common/ConditionalComponent/ConditionalComponent";

function Contacts() {
  const { Contacts: t } = useTranslation();
  const [isSendByEmail, setIsSendByEmail] = useState(false);
  const [isIdRequired, setIsIdRequired] = useState(false);
  const [isCreditIdRequired, setIsCreditIdRequired] = useState(false);
  const [isSumRequired, setIsSumRequired] = useState(false);
  const [isLawTopic, setIsLawTopic] = useState(false);

  function createValidationSchema() {
    return Yup.object({
      phone: Yup.string()
        .matches(/[0-9]{10}/, t.card_3.phoneInput.error)
        .length(10, t.card_3.phoneInput.error)
        .required(t.card_3.phoneInput.required),
      email: isSendByEmail
        ? Yup.string()
            .email(t.card_3.emailInput.error)
            .required(t.card_3.emailInput.required)
        : Yup.string().optional(),
      topic: Yup.string().required(t.card_3.topicSelect.required),
      id: isIdRequired
        ? Yup.string()
            .length(11, t.card_3.idInput.error)
            .matches(/[0-9]{11}/, t.card_3.idInput.error)
            .required(t.card_3.idInput.required)
        : Yup.string().optional(),
      credit_id: isCreditIdRequired
        ? Yup.string()
            .length(8, t.card_3.creditIdInput.error)
            .matches(/[0-9]{8}/, t.card_3.creditIdInput.error)
            .required(t.card_3.creditIdInput.required)
        : Yup.string().optional(),
      date_of_signing: isCreditIdRequired
        ? Yup.date().required(t.card_3.dateOfSigningInput.required)
        : Yup.date().optional(),
      sum: isSumRequired
        ? Yup.string().required(t.card_3.sumInput.required)
        : Yup.string().optional(),
      law_topic: isLawTopic
        ? Yup.string().required(t.card_3.lawTopicSelect.required)
        : Yup.string().optional(),
      name: isLawTopic
        ? Yup.string().required(t.card_3.nameInput.required)
        : Yup.string().optional(),
      location: isLawTopic
        ? Yup.string().required(t.card_3.locationInput.required)
        : Yup.string().optional(),
    });
  }

  function ScrollToFieldError() {
    const { isValid, isSubmitting, errors } = useFormikContext();

    useEffect(() => {
      if (isValid) return;

      const fieldErrorNames = Object.keys(errors);
      const element = document.getElementById(fieldErrorNames[0]);

      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }, [isSubmitting]);

    return null;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.sectionHeading}>{t.heading}</h1>
      <div className={styles.cards}>
        <div className={styles.column_1}>
          <div className={styles.card}>
            <h2 className={styles.cardHeading}>{t.card_1.heading}</h2>
            <div className={styles.contactWithIcon}>
              <PhoneSvg viewBox="0 0 20 20" />
              <PhoneInfo color="#003366" />
            </div>
            <div className={styles.contactWithIcon}>
              <MailSvg viewBox="0 0 20 20" />
              <span>{t.card_1.contacts[0]}</span>
            </div>
            <div className={styles.contactWithIcon}>
              <ClockSvg viewBox="0 0 20 20" />
              <span>{t.card_1.contacts[1]}</span>
            </div>
            <div className={styles.contactWithIcon}>
              <LocationSvg viewBox="0 0 20 20" />
              <span>{t.card_1.contacts[2]}</span>
            </div>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardHeading}>{t.card_2.heading}</h2>
            {t.card_2.spans.map((text, i) => (
              <span key={i}>{text}</span>
            ))}
            <Link href={t.card_2.a.to}>
              <a className={styles.link}>{t.card_2.a.text}</a>
            </Link>
          </div>
        </div>
        <div className={styles.column_2}>
          <Formik
            initialValues={{
              phone: "",
              email: "",
              topic: "",
              file: "",
              message: "",
              id: "",
              credit_id: "",
              date_of_signing: "",
              law_topic: "",
              name: "",
              location: "",
              sum: "",
            }}
            validationSchema={createValidationSchema}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {(props) => (
              <Form className={styles.card}>
                <h2 className={styles.cardHeading}>{t.card_3.heading}</h2>
                <span>{t.card_3.p}</span>

                <ScrollToFieldError />

                <div className={styles.fieldContainer}>
                  <label className={styles.label} htmlFor="phone">
                    {t.card_3.phoneInput.label}
                  </label>
                  <div className={styles.phoneInputContainer}>
                    <div className={styles.countryPhoneCode}>+38</div>
                    <Field
                      className={styles.phoneInput}
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder={t.card_3.phoneInput.placeholder}
                      autoComplete="off"
                    />
                  </div>
                  <ErrorMessage name="phone">
                    {(msg) => <span className={styles.error}>{msg}</span>}
                  </ErrorMessage>
                </div>

                <div
                  onClick={() => setIsSendByEmail((prev) => !prev)}
                  className={styles.checkBox}
                >
                  <div className={styles.checkBoxField}>
                    {isSendByEmail && <TickSvg />}
                  </div>
                  <span>{t.card_3.getByEmail}</span>
                </div>

                {isSendByEmail && (
                  <CustomField
                    nameAndId="email"
                    placeholder={t.card_3.emailInput.placeholder}
                    label={t.card_3.emailInput.label}
                  />
                )}

                <CustomField
                  nameAndId="topic"
                  type="select"
                  options={t.card_3.topicSelect.options}
                  label={t.card_3.topicSelect.label}
                />

                <ConditionalComponent
                  dependencie={props.values.topic}
                  triggerValues={["law", "calculation"]}
                  setState={setIsIdRequired}
                >
                  <CustomField
                    nameAndId="id"
                    label={t.card_3.idInput.label}
                    placeholder={t.card_3.idInput.placeholder}
                  />
                </ConditionalComponent>

                <ConditionalComponent
                  dependencie={props.values.topic}
                  triggerValues={["partial_repayment", "law"]}
                  setState={setIsCreditIdRequired}
                >
                  <CustomField
                    nameAndId="credit_id"
                    placeholder={t.card_3.creditIdInput.placeholder}
                    label={t.card_3.creditIdInput.label}
                  />
                  <CustomField
                    nameAndId="date_of_signing"
                    type="date"
                    label={t.card_3.dateOfSigningInput.label}
                  />
                </ConditionalComponent>

                <ConditionalComponent
                  dependencie={props.values.topic}
                  triggerValues={["partial_repayment"]}
                  setState={setIsSumRequired}
                >
                  <CustomField
                    nameAndId="sum"
                    label={t.card_3.sumInput.label}
                    placeholder={t.card_3.sumInput.placeholder}
                  />
                </ConditionalComponent>

                <ConditionalComponent
                  dependencie={props.values.topic}
                  triggerValues={["law"]}
                  setState={setIsLawTopic}
                >
                  <CustomField
                    nameAndId="law_topic"
                    type="select"
                    options={t.card_3.lawTopicSelect.options}
                    label={t.card_3.lawTopicSelect.label}
                  />

                  <CustomField
                    nameAndId="name"
                    label={t.card_3.nameInput.label}
                    placeholder={t.card_3.nameInput.placeholder}
                  />

                  <CustomField
                    nameAndId="location"
                    label={t.card_3.locationInput.label}
                    placeholder={t.card_3.locationInput.placeholder}
                  />
                </ConditionalComponent>

                <div className={styles.fieldContainer}>
                  <label className={styles.label} htmlFor="file">
                    {t.card_3.fileInput.label}
                  </label>
                  <div className={styles.fileInputLabelContainer}>
                    <label className={styles.fileInputLabel} htmlFor="file">
                      <ClipSvg />
                      <span>{t.card_3.fileInput.chooseFile}</span>
                    </label>
                    <span className={styles.fileLimitations}>
                      {t.card_3.fileInput.fileLimitations}
                    </span>
                  </div>
                  <Field
                    className={styles.fileInput}
                    id="file"
                    name="file"
                    type="file"
                    accept=".png,.jpg,.pdf"
                  />
                  <ErrorMessage name="file">
                    {(msg) => <span className={styles.error}>{msg}</span>}
                  </ErrorMessage>
                </div>

                <CustomField
                  className={styles.textArea}
                  nameAndId="message"
                  type="textarea"
                  label={t.card_3.textInput.label}
                  placeholder={t.card_3.textInput.placeholder}
                />

                <button className={styles.sendBtn} type="submit">
                  {t.card_3.send}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
