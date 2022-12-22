import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react'
import BattleZone from './components/BattleZone';
import FightConfigZone from './components/FightConfigZone';
import PlayerSelect from './components/PlayerSelect';
import { foePokemonList, playerPokemonList } from './data/data';
import Victory from './components/Victory';

function App() {

  let nmbPokemon = 6

const [ongoingAttack, setOnGoingAttack] = useState(false)
const [attackName, setAttackName] = useState("")
const [playerName, setPlayerName] = useState(undefined)
const [battleStartAnimation, setBattleStartAnimation] = useState(false)
const [timer, setTimer] = useState(true)
const [pokemonChange, setPokemonChange] = useState(false)
const [PlayerActivePokemon , setPlayerActivePokemon] = useState(playerPokemonList[0])
const [FoeActivePokemon , setFoeActivePokemon] = useState(foePokemonList[0])
const [turn, setTurn] = useState(true)
const [FoeListIndex, setFoeListIndex] = useState(1)
const [victory, setVictory] = useState(false)

let globalAttackTimer = 4500


useEffect(() => {
  if(playerName != undefined) {
  setBattleStartAnimation(true)
  setTimeout(() => {
    setBattleStartAnimation(false)
  }, 4000);
  setTimeout(() => {
    setTimer(false)
  }, 4000);
}
}, [playerName])



useEffect(() => {
  let PlayerHp = PlayerActivePokemon.hp
  let foeHp = FoeActivePokemon.hp
 
  if(PlayerActivePokemon.hp <= 0) {
    PlayerHp = 0
    
    generateLabels(false, PlayerActivePokemon.name, "power.name", "power.label" )
  
    // setTimeout(() => {
    //   setPlayerActivePokemon(playerPokemonList[Math.floor(Math.random() * playerPokemonList.length)])
    //   }, globalAttackTimer);
    PlayerHp = PlayerActivePokemon.hp

  }

  if(FoeActivePokemon.hp <= 0) {
    foeHp = 0
    setFoeListIndex(FoeListIndex => FoeListIndex += 1)
    console.log(FoeListIndex)
    setTurn(true)
    console.log(FoeListIndex)
    if(FoeListIndex === nmbPokemon) {
        setVictory(true)
    }

    else {generateLabels(false, FoeActivePokemon.name, "power.name", "power.label" )
    setTimeout(() => {
      setFoeActivePokemon(foePokemonList[FoeListIndex])
      }, globalAttackTimer);
      foeHp = FoeActivePokemon.hp
    }

  }


  if(FoeActivePokemon.hp > 0 && turn === false) {
    console.log("trigger ennemy attack")
    setTimeout(() => {
      EnnemyAttack()
      
    }, globalAttackTimer);
  }



}, [PlayerActivePokemon.hp, FoeActivePokemon.hp])



const updateEnnemyPokemon = (power) => {
  let index = Math.floor(Math.random() * foePokemonList.length) 
  generateLabels(true, PlayerActivePokemon.name, power.name, power.label )
  let newHp = FoeActivePokemon.hp
  setFoeActivePokemon(FoeActivePokemon => ({
    ...FoeActivePokemon,
    hp: newHp - power.dmg
  })  
)
setTurn(false)

console.log("new hp after attack:", FoeActivePokemon.hp)

}

const EnnemyAttack = () => {
  let newHp = PlayerActivePokemon.hp
  let AttackIndex = Math.floor(Math.random() * FoeActivePokemon.skills.length) 
  let ennemyAttack = FoeActivePokemon.skills[AttackIndex]
  generateLabels(true, FoeActivePokemon.name, ennemyAttack.name, FoeActivePokemon.skills[AttackIndex].label )
  
    console.log("animation ended, now processing logic")
    setPlayerActivePokemon(playerActivePokemon => ({
      ...playerActivePokemon,
      hp: newHp - ennemyAttack.dmg
    }))
    setTurn(true)
}

const generateLabels = (alive, playerName, attackName, text ) => {
  if(alive) {
    setOnGoingAttack(true)
    setAttackName(`${playerName} utilise ${attackName}! ${text} `)
  setTimeout(() => {
    setOnGoingAttack(false)
  }, globalAttackTimer);
  }

  else {
    setOnGoingAttack(true)
    setAttackName(`${playerName} est ko! `)
  setTimeout(() => {
    setOnGoingAttack(false)
  }, globalAttackTimer);
  }

}





  return (
    <div className="App">

      {playerName != undefined &&
     
     <>
      <BattleZone  foe={FoeActivePokemon} player={playerPokemonList} active={PlayerActivePokemon}/>
      <FightConfigZone timer={timer} foe={FoeActivePokemon} player={playerPokemonList} active={PlayerActivePokemon} ongoingAttack={ongoingAttack} attackName={attackName} updateActivePokemon={setPlayerActivePokemon} updateHp={updateEnnemyPokemon}/>
      </>
    
    }
     {victory &&
        <Victory victory={victory}/>
     }

     {(playerName === undefined) &&
     <>
     <PlayerSelect  setPlayerName={setPlayerName} battleStart={battleStartAnimation} victory={victory}/>
     </>
     
     
     }
    </div>
  );
}


export default App;
