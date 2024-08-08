import { useContext } from "react";
import ModalTemplate from "./template/ModalTemplate";
// Contexts
import LangContext from "../../../contexts/LangContext";

const ModalContent = () => {
  const { text } = useContext(LangContext);

  return (
    <ModalTemplate
      title={text.coinConversion}
      projectName={text.webApp}
      urlRepo="https://github.com/elena-arniz/conversor-moneda"
      languages="React"
      urlWeb="https://elena-arniz.github.io/conversor-moneda/"
      image="img/projects/conversor-moneda.png"
    />
  );
};

export default ModalContent;
