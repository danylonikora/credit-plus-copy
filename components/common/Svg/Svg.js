import React, { useEffect, useRef, useState } from "react";

function Svg({ name }) {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function importIcon() {
      try {
        const { default: namedImport } = await import(
          `../../../public/images/partners/${name}.svg`
        );
        ImportedIconRef.current = namedImport;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    }
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon />;
  }

  return null;
}

export default Svg;
