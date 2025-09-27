import React from 'react'
import UserCard from './components/UserCard'
import { Card_Data } from './Card_Data'
const App = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          {Card_Data.map((a, b) => {
            return <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={b}>
              <UserCard name={a.name} designation={a.designation} img={a.img} />
              </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default App
