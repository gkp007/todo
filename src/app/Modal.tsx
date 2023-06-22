import { Dispatch, SetStateAction } from "react";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <button
          onClick={() => setModalOpen(false)}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          X
        </button>
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">This modal works with a hidden checkbox!</p>
        <div className="modal-action">
          <button onClick={() => setModalOpen(false)} className="btn">
            Close!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
