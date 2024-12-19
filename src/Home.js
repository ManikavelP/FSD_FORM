import React from 'react'
import DetailsButton from './components/DetailsButton'
import EmployeeForm from './components/EmployeeForm'

function Home() {
  return (
    <div>
        <div style={{display:'flex', marginLeft:'42%'}}>
            <h1>
                EmployeeForm
            </h1>
            <div style={{marginLeft:'60%', marginTop:'1%', padding:'5px'}}>
            <DetailsButton child = {"List Employee"}to = {'/ShowEmployee'} />
            </div>
            
        </div>
        <EmployeeForm />
    </div>
  )
}

export default Home