import { IoIosClose } from "react-icons/io";
import { ModalContent, ModalWrapper, SvgClose } from "../styles/Modal.jsx";

export default function Modal({ active, setActive, children }) {
  return (
    <ModalWrapper active={active} onClick={() => setActive(false)}>
      <ModalContent active={active} onClick={(e) => e.stopPropagation()}>
        <SvgClose>
          <IoIosClose onClick={() => setActive(false)} />
        </SvgClose>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
}
