import React from 'react'
import UserCard from './components/UserCard'
const App = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <UserCard name="Gustavo Herwitz" designation="UI/UX Designer" img="./assets/images/first-img.png"/>
          </div>
          <div className="col-3">
            <UserCard name="Phillip Curtis" designation="Graphic Designer" img="./assets/images/second-img.png" />
          </div>
          <div className="col-3">
            <UserCard name="Talan Torff" designation="Web Developer" img="./assets/images/third-img.png" />
          </div>
          <div className="col-3">
            <UserCard name="Abram Vaccaro" designation="App Developer" img="./assets/images/fourth-img.png" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
