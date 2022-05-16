import React, { useContext } from 'react'
import { Context } from '../../Context/GlobalState';

function EmployeeSingle() {
   const {techSingle} = useContext(Context)
  return (
    <section className="employee-single">
       <div className="container">
          <img src={techSingle.image} alt="" />
            <h2>
               {techSingle.name}
            </h2>

            <p>{techSingle.rol}</p>
            <p>{techSingle.id} </p>
       </div>
    </section>
  )
}

export default EmployeeSingle
