import React, { useState } from "react";
import ColorModal from "../../component/common/ColorModal";
import ModalFrame from "../../component/common/ModalFrame";
import Category from "../../component/setup/Category";
import Header from "../../component/setup/Header";
import SelectedCard from "../../component/setup/SelectedCard";

const Setup = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const oncloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Header />
      <SelectedCard />
      <Category />
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        test modal
      </button>
      {isModalOpen && (
        <ModalFrame>
          <ColorModal
            onhandleModal={() => {
              oncloseModal();
            }}
          />
        </ModalFrame>
      )}
    </div>
  );
};

export default Setup;
