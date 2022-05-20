import classNames from "classnames";
import React, { useState, useEffect, useRef } from "react";
import * as styles from "./TabBox.module.scss";

function TabBox(props) {
  // firstTabHeader, secondTabHeader, firstTabContent, secondTabContent, contentClassName

  const [isFirstTab, setIsFirstTab] = useState(true);

  const firstTab = useRef();
  const secondTab = useRef();

  useEffect(() => {
    const selectedTabClass = styles.tabBox__activeHeader;

    if (isFirstTab) {
      secondTab.current.classList.remove(selectedTabClass);
      firstTab.current.classList.add(selectedTabClass);
    } else {
      firstTab.current.classList.remove(selectedTabClass);
      secondTab.current.classList.add(selectedTabClass);
    }
  }, [isFirstTab]);

  return (
    <div className={styles.tabBox}>
      <div className={styles.tabBox__headers}>
        <h4
          className={styles.tabBox__header}
          onClick={() => setIsFirstTab(true)}
          onKeyDown={(event) => {
            if (event.key !== "Enter") return;
            setIsFirstTab(true);
          }}
          ref={firstTab}
          tabIndex={isFirstTab ? null : 0}
        >
          {props.firstTabHeader}
        </h4>
        <h4
          className={styles.tabBox__header}
          onClick={() => setIsFirstTab(false)}
          onKeyDown={(event) => {
            if (event.key !== "Enter") return;
            setIsFirstTab(false);
          }}
          ref={secondTab}
          tabIndex={isFirstTab ? 0 : null}
        >
          {props.secondTabHeader}
        </h4>
      </div>
      <div
        className={classNames(styles.tabBox__content, props.contentClassName)}
      >
        {isFirstTab ? props.firstTabContent : props.secondTabContent}
      </div>
    </div>
  );
}

export default TabBox;
