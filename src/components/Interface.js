import React, {useState, useEffect} from 'react'
import ProgressBar from './Progressbar'
import TextBox from "./TextBox"

export default function Interface({foe, timer, player, active, updateHp, ongoingAttack, attackName, updateActivePokemon}) {

  console.log(active.skills)

    const [setting, setSetting] = useState("base")

    const changePokemon = (e) => {
    updateActivePokemon(e)
    setSetting("base")
    }

    useEffect(() => {
      if(active.hp <= 0){
        setSetting("pokemon-list")
      }
    }, [active])

  

  return (
    <div className='d-flex justify-content-center align-items-center h-100 w-100 mt-2'>

{timer ?
       <TextBox text={"Entraineur Axel vous défie en duel!"} />
        
       :
      
      <>
      {!ongoingAttack ? 
      <>
        {setting === "base" && 
        <>
           <div className='w-100 h-100'> Que souhaites tu faire?  </div>
        <ul className='m-0 p-0 h-100'>
            <li className='list-group-item my-3'><div onClick={() => setSetting("attack")} className='attack'>Attaquer</div></li>
        </ul>
        </>
        }

        {setting === "attack" && 
        <div className='container-fluid'>
        <div className='row'>
        {active.skills.map(x => (
          <>
          <div className='col-6 my-2'>
          <div onClick={() => updateHp(x)}>
          <p className='custom-text-size'>{x.name}</p>
            </div>
          </div>
          </>
        ))}

        </div>

        <div className='mt-4' onClick={() => setSetting("base")}><p className='custom-text-size'>Retour</p></div>
        </div>
        
        }


        {setting === "pokemon-list" && 
        <div className='w-100'>
          <div className="d-flex justify-content-between">
        <div className='custom-text-size'>Quel Pokémon choisir?</div>
        </div>
        <div className="container-fluid w-100 ">
        <div className="row ">
        {player.map(x => (
          <>
          {x.hp > 0 &&
          
          <div className='col-4' onClick={() => changePokemon(x)}>
          
          <img className="thumb-player-list" src={x.sprite}/>
          <div>
            <ProgressBar  style={{width:"75px"}} bgcolor={"#0c9d39"} completed={x.hp}/>
            </div>
            {x.name}
          </div>
         
          }
           </>
        ))}
        
        

        </div>

        </div>
       

        </div>
        }
        </>
        : 
        <>

          <TextBox text={attackName} />

       </>
 
         }
            </>
     }
    </div>
  )
}
