import React from 'react'
import UserCard from './components/UserCard'
import { Card_Data } from './Card_Data'
const App = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          {Card_Data.map((card, i) => {
            return <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={i}>
              <UserCard name={card.name} designation={card.designation} img={card.img} />
              </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default App
