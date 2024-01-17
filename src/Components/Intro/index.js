import Typewriter from 'typewriter-effect'
import './index.css'

const Intro = () => {
  const value = 'const'
  console.log(value)
  return (
    <div className="introContainer" id="introduction">
      <div className="columnContainer">
        <h1>
          Hey<span className="red">,</span> I<span className="red">&#39;</span>m
        </h1>
        <div className="typeWriting">
          <Typewriter
            className="fontSize"
            onInit={typewriter => {
              typewriter
                .typeString(`<span style="color: red;">S</span>ujith `)
                .typeString(`<span style="color: red;">C</span>harles `)
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  '<span style="color: red;">W</span>eb <span style="color: red;">D</span>eveloper',
                )
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  '<span style="color: red;">F</span>rontend <span style="color: red;">D</span>eveloper',
                )
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  '<span style="color: red;">B</span>ackend <span style="color: red;">D</span>eveloper',
                )
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  '<span style="color: red;">F</span>ullstack <span style="color: red;">D</span>eveloper',
                )
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  '<span style="color: red;">R</span>eact <span style="color: red;">D</span>eveloper',
                )
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  '<span style="color: red;">P</span>ython <span style="color: red;">D</span>eveloper',
                )
                .pauseFor(1000)
                .deleteAll()
                .typeString('<span style="color: red;">D</span>eveloper')
                .start()
            }}
          />
        </div>
      </div>
      <div className="positioned">
        <img
          className="imgContainer"
          src="data:image/jpeg;base64,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"
          alt="men"
        />
      </div>
    </div>
  )
}

export default Intro
