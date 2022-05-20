import React from "react";
import useTranslation from "../../utils/useTranslation";
import * as styles from "./InternalError.module.scss";
import Link from "next/link";

function InternalError() {
  const { InternalError: t } = useTranslation();
  
  return (
    <main className={styles.internalError}>
      <h1 className={styles.internalError__heading}>{t.heading}</h1>
      <div>
        <Link href="/">
          <a className={styles.internalError__btn}>{t.mainPage}</a>
        </Link>
      </div>
    </main>
  );
}

export default InternalError;
