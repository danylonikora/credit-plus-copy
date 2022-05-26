import React from "react";
import Contacts from "../components/contacts/Contacts";

function ContactsPage() {
  return (
    <main>
      <Contacts />
    </main>
  );
}

export default ContactsPage;

export function getStaticProps({ locale }) {
  return {
    props: {
      translation: {
        ...require(`../translations/${locale}/Layout.json`),
        ...require(`../translations/${locale}/PhoneInfo.json`),
        ...require(`../translations/${locale}/contacts.json`),
      },
    },
  };
}
