import React from "react";
import useTranslation from "../../utils/useTranslation";
import * as styles from "./NotFound.module.scss";
import Link from "next/link";

function NotFound() {
  const { NotFound: t } = useTranslation();

  return (
    <main className={styles.notFound}>
      <h1 className={styles.notFound__heading}>{t.heading}</h1>
      <div>
        <Link href="/">
          <a className={styles.notFound__btn}>{t.mainPage}</a>
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
