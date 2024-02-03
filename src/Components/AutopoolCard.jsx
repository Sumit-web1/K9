import React from 'react'
import '../Style/Autopool.css'

function AutopoolCard() {

  let levels = [
    { level: 1, earning: 10 },
    { level: 2, earning: 20 },
    { level: 3, earning: 30 },
    { level: 4, earning: 40 },
    { level: 5, earning: 50 },
    { level: 6, earning: 60 },
    { level: 7, earning: 70 },
    { level: 8, earning: 80 },
    { level: 9, earning: 90 },
  ];

  return (
    <div>
       {levels.map((levelInfo) => (
        <div key={levelInfo.level} className='autopoolCard'>
          <h1>Level {levelInfo.level}</h1>
          <p>Earning: {levelInfo.earning}</p>
          <br />
          <div className="withdrawBtn">
            00:00:00
          </div>
        </div>
      ))}
    </div>
  )
}

export default AutopoolCard