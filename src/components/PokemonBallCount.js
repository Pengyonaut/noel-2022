import React, {useLayoutEffect, useRef} from 'react'
import PokeballsPlayer from "../sprites/pokemon-battle-start-pokeball.png"
import PokeballsFoe from "../sprites/pokemon-battle-start-pokeball-foe.png"
import gsap from "gsap"

export default function PokemonBallCount({player}) {

  let root = useRef()
  let foeTarget = useRef();
  let playerTarget = useRef();

  let animationDuration = 3


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if(player) {
        gsap.from(playerTarget.current, { x: 300, ease: "power2.out"});
        gsap.to(playerTarget.current, { x: 300 , delay:animationDuration  });
      }

      else {
        gsap.from(foeTarget.current, { x: -300, ease: "power2.out"});
        gsap.to(foeTarget.current, { x: -300 , delay:animationDuration });

      }

    }, root);

    return () => ctx.revert();
  }, []);

  
  return (
    <>
    <div ref={root}>
    {player ? 
    
    <div className='player-balls-position' ref={playerTarget}>
        <img className='player-health' src={PokeballsPlayer}/>
    </div>
 
    :

    <div className='foe-balls-position' ref={foeTarget} >
        <img className='player-health' src={PokeballsFoe}/>
    </div>

}
</div>
   
    </>
  )
}
