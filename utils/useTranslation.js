import { useContext } from "react";
import TranslationContext from "./TranslationContext";

function useTranslation() {
  return useContext(TranslationContext);
}

export default useTranslation;
