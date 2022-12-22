import React, {useLayoutEffect, useRef} from 'react'
import playerSprite from "../sprites/Player-model.png"
import AxelSprite from "../sprites/axel-trainer-model.png"
import gsap from "gsap"

export default function PlayerSprite({player}) {


  
  let root = useRef()
  let foeTarget = useRef();
  let playerTarget = useRef();

  let animationDuration = 3


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if(player) {
        gsap.from(playerTarget.current, { x: -300, ease: "power2.out"});
        gsap.to(playerTarget.current, { x: -300 , delay:animationDuration  });
      }

      else {
        gsap.from(foeTarget.current, { x: 300, ease: "power2.out"});
        gsap.to(foeTarget.current, { x: 300 , delay:animationDuration });
      }

    }, root);

    return () => ctx.revert();
  }, []);


  
  return (
    <>
    {player ?
    <div className='avatar playerAvatarPosition' ref={playerTarget}>
    <img  src={playerSprite}/>
    </div>
    :
    <div className="avatar foeAvatarPosition" ref={foeTarget}>
    <img  src={AxelSprite}/>
    </div>

    }
    </>
  )
}
