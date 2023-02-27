import React, { FC, useState } from 'react'
import PlayerCard from '../../components/PlayerCard/PlayerCard'
import data from "../../data/PlayerData.json";
import { Player } from '../../models/HomeModels';
import "./Home.scss"

type HomeProps = {}

const Home:FC <HomeProps> = () => {
    
      const players: Player[] = data.players;
    

  return (
    <div className='list-player'>
        {players.map((player: Player,index:number) => <PlayerCard index={player.id}player={player}/>)}
        
    </div>
  )
}

export default Home