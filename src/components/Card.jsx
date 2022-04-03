import React, { useState } from "react";
import Modal from "react-modal";

const Card = (props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="card" onClick={openModal}>
        <div className="image">
          <img src={props.image} alt="name" />
        </div>
        <div className="info">
          <h4>Intel® Core™ i3-1220PE Processor</h4>
          <div className="specs">
            <div>
              <h6>CLock Speed</h6>
              <p>234Ghz</p>
            </div>
            <div>
              <h6>No. of Cores</h6>
              <p>235</p>
            </div>
            <div>
              <h6>Cache Size</h6>
              <p>235MB</p>
            </div>
          </div>
          <div className="buy">
            <div className="price">
              <h6>Price</h6>
              <p>$235</p>
            </div>
            <button>Buy</button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button onClick={closeModal}>close</button>
        
      </Modal>
    </>
  );
};

export default Card;
