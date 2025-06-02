import { useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import KycInfo from './Components/KycInfo/KycInfo'
import Address from './Components/Address/Address'
import AccountType from './Components/AcountType/AccountType'
import Display from './Components/Display/Display'
import { FormDataProvider } from './Components/FormDataProvider'
import ProgressBar from './Components/ProgressBar'

function App() {
  
  return (
    <div className='app-container'>
    <FormDataProvider>
        
        <ProgressBar/>
          <Routes>
            <Route path='/' element={<KycInfo />} />
            <Route path='/address' element={<Address />} />
            <Route path='/accountType' element={<AccountType />} />
            <Route path='/display' element={<Display />} />
          </Routes>
        
    </FormDataProvider>
    </div>
  )
}

export default App
