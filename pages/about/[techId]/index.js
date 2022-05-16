import { useRouter } from 'next/router';
import React from 'react'

function EmployeeSingle() {
   const router = useRouter()
	const {techId} = router.query
   console.log(techId);
  return (
   
    <>
      <h2>HSgsdfhsfsjfhsjdf - {techId}</h2>
    </>
  )
}

export default EmployeeSingle
