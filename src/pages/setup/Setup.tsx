import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import ColorModal from "../../component/common/ColorModal";
import ModalFrame from "../../component/common/ModalFrame";
import Category from "../../component/setup/Category";
import Header from "../../component/setup/Header";
import Selected from "../../component/setup/Selected";
import { dataState } from "../../store/state/example";

const Setup = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [info, setInfo] = useRecoilState(dataState);

  const getData = async () => {
    const response = await fetch("/data.json", { method: "GET" });
    const data = await response.json();
    setInfo(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const oncloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <Selected />
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
