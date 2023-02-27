import { Card } from "antd";
import { FC, useState } from "react";
import { Player } from "../../models/HomeModels";
import ModalPlayer from "../ModalPlayer/ModalPlayer";
import './PlayerCard.scss';

type PlayerCardProps = {
  player: Player;
  index:number

};

const PlayerCard: FC<PlayerCardProps> = ({ player ,index}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const showModal = () => {
        setIsModalOpen(true);
      };
      const closeModal = () => {
        setIsModalOpen(false);}
  return (
    <div>
      <Card
        style={{ width: 500,height:'20%' }}
        className="player-card"
        cover={<img alt="example" src={player.picture}  />}
        onClick={showModal}
      >
        <div className="player-card-title">
        <h2>
          {player.firstname} {player.lastname}
        </h2>
        </div>
        <div className="player-card-infos">
        <p>Rank: {player.data.rank}</p>
        <p>Points: {player.data.points}</p>
        <p>Country: {player.country.code}</p>
        </div>
      </Card>
      <ModalPlayer isModalOpen={isModalOpen} player={player} closeModal={closeModal} index={index}/>
    </div>
  );
};
export default PlayerCard;
