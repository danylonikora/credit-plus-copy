import React, { useState, useEffect, useRef } from "react";
import "./TabBox.scss";

function TabBox(props) {
  // firstTabHeader, secondTabHeader, firstTabContent, secondTabContent

  const [isFirstTab, setIsFirstTab] = useState(true);

  const firstTab = useRef();
  const secondTab = useRef();

  useEffect(() => {
    const selectedTabClass = "tab-box__header--selected";

    if (isFirstTab) {
      secondTab.current.classList.remove(selectedTabClass);
      firstTab.current.classList.add(selectedTabClass);
    } else {
      firstTab.current.classList.remove(selectedTabClass);
      secondTab.current.classList.add(selectedTabClass);
    }
    
  }, [isFirstTab]);

  return (
    <div className="tab-box">
      <div className="tab-box__headers">
        <h4
          className="tab-box__header"
          onClick={() => setIsFirstTab(true)}
          ref={firstTab}
        >
          {props.firstTabHeader}
        </h4>
        <h4
          className="tab-box__header"
          onClick={() => setIsFirstTab(false)}
          ref={secondTab}
        >
          {props.secondTabHeader}
        </h4>
      </div>
      <div className="tab-box__content">
        {isFirstTab ? props.firstTabContent : props.secondTabContent}
      </div>
    </div>
  );
}

export default TabBox;