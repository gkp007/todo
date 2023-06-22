"use client";

import { MdAddCircleOutline } from "react-icons/md";
import Modal from "../Modal";
import { useState } from "react";

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <button onClick={handleClick} className="btn btn-primary w-full">
        Add new task<MdAddCircleOutline className="ml-2" size={18} />
      </button>
      {modalOpen && (
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
    </div>
  );
};

export default AddTask;
