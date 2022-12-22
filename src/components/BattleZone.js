import React, {useEffect, useRef} from 'react'
import PokemonHealth from './PokemonHealth'
import PlayerSprite from './PlayerSprite'
import PokeballThrow from './PokeballThrow'
import PokemonBallCount from './PokemonBallCount'
import PokemonSprite from "./PokemonSprite"



export default function BattleZone({foe, player, active, ongoingAttack}) {



  return (
    <div className='battleZone'>
        <PokemonHealth player={true} active={active} ongoingAttack={ongoingAttack} />
        <PokemonHealth player={false} active={foe} ongoingAttack={ongoingAttack}/>
        <PokemonBallCount  player={true}/>
        <PokemonBallCount  player={false}/>
        <PlayerSprite player={true}/>
        <PlayerSprite/>
        <PokemonSprite player={true} active={active}/>
        <PokemonSprite player={false} active={foe}/>
  
    </div>
  )
}
