import React, {useEffect, useLayoutEffect, useRef} from 'react'
import PlayerHealth from "../sprites/player-battle-bar.png" 
import EnnemyHealth from "../sprites/foe-battle-bar.png" 
import ProgressBar from './Progressbar'
import gsap from "gsap"


export default function PokemonHealth({player, active, ongoingAttack}) {

  
  let root = useRef()
  let foeTarget = useRef();
  let playerTarget = useRef();




  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if(player) {
        gsap.from(playerTarget.current, { delay:3.5, x: 300, ease: "power2.out"});
     
      }

      else {
        gsap.from(foeTarget.current, { delay:3.5, x: -300, ease: "power2.out"});

      }

    }, root);

    return () => ctx.revert();
  }, []);

  
  useEffect(() => {

  if(active.hp < 0) {
    active.hp = 0
  }
  }, [active])

  

  return (
    <>
    {player ?
                <div ref={playerTarget} className='player-health-position'>
                    <p className='name-position'>{active.name}</p>
                <img src={PlayerHealth} className="player-health"/>
                <div className='player-health-bar-position'>
                <ProgressBar bgcolor={"#0c9d39"} completed={active.hp} />
                </div>
                </div>
       
        : 
        <div ref={foeTarget} className='foe-health-position'>
           <p className='name-position'>{active.name}</p>
                <img src={EnnemyHealth} className="player-health"/>
                <div className='foe-health-bar-position'>
                <ProgressBar bgcolor={"#0c9d39"} completed={active.hp} />
                </div>
                </div>
     
}
</>
  )
}
