import React from 'react';
import Documents from '../components/documents/Documents';

function DpcumentsPage() {
  return (
    <main>
      <Documents />
    </main>
  );
}

export default DpcumentsPage;

export function getStaticProps({ locale }) {
  return {
    props: {
      translation: {
        ...require(`../translations/${locale}/Layout.json`),
        ...require(`../translations/${locale}/PhoneInfo.json`),
        ...require(`../translations/${locale}/documents.json`),
      }
    },
  };
}