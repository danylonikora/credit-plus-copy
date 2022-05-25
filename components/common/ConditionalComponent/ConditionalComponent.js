import React, { useEffect } from "react";

function ConditionalComponent({
  children,
  dependencie,
  triggerValues,
  setState,
}) {
  const isTriggerValue = triggerValues.includes(dependencie);
  useEffect(() => {
    setState(isTriggerValue ? true : false);
  });
  return <>{isTriggerValue ? children : ""}</>;
}

export default ConditionalComponent;
