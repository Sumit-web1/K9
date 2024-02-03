import React from 'react'
import AutopoolCard from '../Components/AutopoolCard'
import '../Style/Autopool.css'
import { ReactComponent as TopSvg } from '../SVG/top-graphic.svg'

function Autopool() {
  return (
    <div>
      <div className="top">
        <TopSvg className="top-svg" />
      </div>
      <div className='autopool'>
        <h1>Welcome To! <br /> <span>Autopool Earning</span></h1>
        <p>You can Withdraw Your Earning after 45 days of your Autopool Started</p>
        <br />
        <AutopoolCard />

        <br />
        <br />
        <br />
      </div>


    </div>
  )
}

export default Autopool