import React from "react";
import ColorModal from "../../component/common/ColorModal";
import Modal from "../../component/common/ModalFrame";
import Category from "../../component/setup/Category";
import Header from "../../component/setup/Header";
import Selected from "../../component/setup/Selected";

const Setup = () => {
  return (
    <div>
      <Header />
      <Selected />
      <Category />
      <Modal>
        <ColorModal />
      </Modal>
    </div>
  );
};

export default Setup;
