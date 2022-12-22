import React from 'react'
import Interface from './Interface'


export default function FightConfigZone({foe, player, active, updateHp, ongoingAttack, attackName, updateActivePokemon, timer}) {
    return (
        <div className='fightConfigZone'>
            <div className="container-fluid p-4">
                <div className="row">
                    <Interface timer={timer} foe={foe} player={player} active={active} updateHp={updateHp} ongoingAttack={ongoingAttack} attackName={attackName} updateActivePokemon={updateActivePokemon} />
                </div>
            </div>
        </div>

    )
}
