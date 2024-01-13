import React from 'react'
import TotalEarning from './TotalEarning'
import '../Style/Wallet.css'

function Wallet() {
  return (
    <div className='wallets'>
      <h1>Total Earning</h1>
      <br />
      <TotalEarning/>
      <hr />
      <br />
      <h2>Wallet</h2>
      <div className="wallet"></div>
      <div className="wallet"></div>
      <div className="wallet"></div>

      <br />
      <br />
      <br />
    </div>
  )
}

export default Wallet