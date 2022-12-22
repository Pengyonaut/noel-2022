import React, {useState, useEffect} from 'react'
import {Chen} from "../sprites/models"
import Sound from "../soundEffects/pokemonTheme.mp3"
import BattleStart from "../sprites/battleStart.gif"


export default function PlayerSelect({setPlayerName, battleStartAnimation, victory}) {


    const [battle,setBattle] = useState(false)
    const [dropdown, setDropdown] = useState(undefined)

    let audio = new Audio(Sound)
   
    const startBattle = (e) => {
        audio.play()
        setBattle(true)
        setTimeout(() => {
        setPlayerName(e)
        setBattle(false)
        }, 4000);
    }

  return (
    <>
   <div className='position-absolute bg-white w-100 h-100' style={{ left: "0", right: "0", top: "0", bottom: "0" }}>
<div className="container mt-5 text-center">
    <img src={Chen} className="position-relative mx-auto mb-5" style={{width:"100px"}} alt="" />
<p>Cette année, tu vas devoir mériter ton cadeau, en plongeant dans les années 2000...</p>

<p>Qui es tu? </p>   
<select className="form-select" defaultValue={0} aria-label="Default select example"  onChange={(e) => setDropdown(e.target.value)}>
  <option>Sélectionne ton nom</option>
  <option value="Cloé">Cloé</option>
  <option value="Elisa">Elisa</option>
  <option value="Lorelei">Lorelei</option>
  <option value="Lucie">Lucie</option>
  <option value="Luck">Luck</option>
  <option value="Louis">Louis</option>
</select>

<button onClick={() => startBattle(dropdown)} className="btn btn-outline-dark mt-5">Que l'épreuve commence!</button>

</div>
</div>

{battle &&
      <>
    
      <div className='position-absolute w-100 h-100' style={{ left: "0", right: "0", top: "0", bottom: "0", zIndex:9999 }} >
        <img src={BattleStart} className="w-100 h-100 p-0 m-0"/>
      </div>
      </>
      }
    </>
  )
}
