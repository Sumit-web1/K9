import React from 'react'
import TotalEarning from './TotalEarning'
import '../Style/Wallet.css'

function Wallet() {
  let autopoolEarning = "0.00"
  return (
    <div className='wallets'>
      <h1>Total Earning</h1>
      <br />
      <TotalEarning />
      <hr />
      <br />
      <h2>Wallet</h2>

      <div className="wallet">
        <div className='flex'>
          <div>
            <h1>Id Referal</h1>
            <h4>Earning</h4>
          </div>
          <div>
            <h1>₹{autopoolEarning}</h1>
            <h5>Earning</h5>
          </div>
        </div>
        <br />
        <div className="withdrawBtn">
          Withdraw
        </div>
      </div>
      <div className="wallet">
        <div className='flex'>
          <div>
            <h1>Product Referal</h1>
            <h4>Earning</h4>
          </div>
          <div>
            <h1>₹{autopoolEarning}</h1>
            <h5>Earning</h5>
          </div>
        </div>
        <br />
        <div className="withdrawBtn">
          Withdraw
        </div>
      </div>
      <div className="wallet">
        <div className='flex'>
          <div>
            <h1>Autopool</h1>
            <h4>Earning</h4>
          </div>
          <div>
            <h1>₹{autopoolEarning}</h1>
            <h5>Earning</h5>
          </div>
        </div>
        <br />
        <div className="withdrawBtn">
          Withdraw
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  )
}

export default Wallet