import React, {useEffect, useState, useLayoutEffect, useRef} from 'react'
import gsap from "gsap"


export default function PlayerSprite({player, active}) {

  const [render,setRender] = useState(3.5)

  useEffect(() => {
   setTimeout(() => {
    setRender(0.5)
   }, 6000);
    
  }, [])
  

  let root = useRef()
  let foeTarget = useRef();
  let playerTarget = useRef();

  let animationDuration = 3


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if(player) {
        gsap.from(playerTarget.current, { delay:render, x: -300, ease: "power2.out"});
      }

      else {
        gsap.from(foeTarget.current, { delay:render, x: 300, ease: "power2.out"});

      }

    }, root);

    return () => ctx.revert();
  }, [active.name]);
  


  return (
    <>
    {player ?
    <div ref={playerTarget} className='pokemon-sprite-fight playerAvatarPosition'>
    <img  src={active.sprite}/>
    </div>
    :
    <div ref={foeTarget} className="pokemon-sprite-fight foeAvatarPosition">
    <img src={active.sprite}/>
    </div>

    }
    </>
  )
}
