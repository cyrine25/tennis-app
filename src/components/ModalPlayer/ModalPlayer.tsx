import React, { FC, useState } from "react";
import { Button, Modal } from "antd";
import { Player } from "../../models/HomeModels";
import "./ModalPlayer.scss";

type ModalPlayerProps = {
  player: Player;
  closeModal: () => void;
  isModalOpen: boolean;
  index: number;
};
const ModalPlayer: FC<ModalPlayerProps> = ({
  isModalOpen,
  player,
  closeModal,
  index,
}) => {
  return (
    <>
      <Modal
        title=""
        open={isModalOpen && index === player.id}
        onCancel={closeModal}
        footer={[]}
        className="modal-container"
      >
        <div className="modal-image">
          <img alt="example" src={player.picture} />
        </div>
        <div className="modal-content">
          <div className="modal-title">
            <h2>
              {player.firstname} {player.lastname}
            </h2>
          </div>
          <div className="modal-infos">
            <div className="modal-infos-tag">
              <p>Rank: </p>
              <p>{player.data.rank}</p>
            </div>
            <div>
              <p>Points: </p>
              <p>{player.data.points}</p>
            </div>
            <div>
              <p>Country: </p>
              <p>{player.country.code}</p>
            </div>
            <div>
              <p>Age: </p>
              <p>{player.data.age}</p>
            </div>
            <div>
              <p>weight: </p>
              <p>{player.data.weight}</p>
            </div>
            <div>
              <p>height: </p>
              <p>{player.data.height}</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalPlayer;
