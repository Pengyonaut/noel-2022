import React from 'react'

export default function Victory({victory}) {

 
  return (
    <>
    <div className='position-absolute bg-white w-100 h-100' style={{ left: "0", right: "0", top: "0", bottom: "0" }}>
      <div className="container mt-5 my-auto h-100 text-center">
          <p className='text-center'>
            Axel est vaincu ! Récupère ton cadeau !
          </p>
          <div className="d-block">
            <button className='btn btn-outline-dark'>Lien vers ton cadeau</button>
          </div>
    </div>
    </div>
 
 </>
  )
}
