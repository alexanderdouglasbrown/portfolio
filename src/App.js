import React, { useState } from 'react'
import './App.css'
import Lightbox from './components/Lightbox'
import Profile from './components/Profile'
import Project from './components/Project'

const App = props => {
  const [lightboxImageSource, setLightboxImageSource] = useState("")
  const [lightboxVideoSource, setLightboxVideoSource] = useState("")
  const [isLightboxVisible, setIsLightboxVisible] = useState(null)

  const hideLightbox = () => {
    setIsLightboxVisible(false)
  }

  const showLightbox = (imageSource, videoSource) => {
    setLightboxImageSource(imageSource)
    setLightboxVideoSource(videoSource)
    setIsLightboxVisible(true)
  }

  return (
    <div>
      <Lightbox
        image={lightboxImageSource}
        video={lightboxVideoSource}
        visible={isLightboxVisible}
        hideLightboxCallback={hideLightbox}
      />
      <div className="container">
        <div className="row">
          <div className="content col-xs-12 col-sm-10 col-sm-offset-1">
            <Profile image="images/profile-pic.jpg"
              name="Alexander D. Brown"
              title="B.S. Computer Science"
              email="alexanderdouglasbrown@gmail.com"
              resume="https://drive.google.com/open?id=0B30hQOEKn_sUWFViRXkzY0tUb2s"
              github="https://github.com/alexanderdouglasbrown"
              linkedin="https://www.linkedin.com/in/alexanderdouglasbrown/"
              instagram="https://www.instagram.com/glacialtruffle/"
            >
              Hi, my name is Alex. I'm passionate about computers and technology, and have been programming, building, and repairing computers for as long as I can remember.
              I have a Bachelor of Science in Computer Science from San Francisco State University, and an Associate in Science in CIS Desktop Networking from College of Marin.
              Below are some of my programming projects.
                </Profile>
            <Project
              showLightboxCallback={showLightbox}
              image="images/image-splash.png"
              video="videos/image-splash.mp4"
              title="Image Splash"
              description="An image sharing website"
              url="http://www.imagesplash.cool/"
              giturl="https://github.com/alexanderdouglasbrown/ImageSplash"
            >
              A personal project website for sharing images and leaving comments. Built with Node.js, Express, and MongoDB.
                    </Project>
            <Project
              showLightboxCallback={showLightbox}
              image="images/frend-chat.png"
              video="videos/frend-chat.mp4"
              title="Frend Chat"
              description="A chat room to connect you and your &quot;frends&quot;"
              url="https://github.com/alexanderdouglasbrown/FrendChat/releases"
              giturl="https://github.com/alexanderdouglasbrown/FrendChat"
            >
              A chat app made in Java and JavaFX, and a personal project of mine. It connects to a server, <a href="https://github.com/alexanderdouglasbrown/FrendServer">Frend Server</a>,
              which is written in C++. Frend Server uses SQLite to store user credentials, while passwords are salted and hashed with SHA256.
                </Project>
            <Project
              showLightboxCallback={showLightbox}
              image="images/fruit-valley.png"
              video="videos/fruit-valley.mp4"
              title="Fruit Valley"
              description="A match-3 puzzle game made in Javascript"
              url="https://alexanderdouglasbrown.github.io/Fruit-Valley/"
              giturl="https://github.com/alexanderdouglasbrown/Fruit-Valley"
            >
              A personal project of mine. Built with another of my projects, <a href="https://github.com/alexanderdouglasbrown/JSGamework">JSGamework</a>,
              which handles the game loop and scales the screen to fit the browser window.
                    </Project>
            <Project
              showLightboxCallback={showLightbox}
              image="images/where-weather.jpg"
              video="videos/where-weather.mp4"
              title="Where Weather"
              description="An iOS app that lets you see the weather anywhere in the world"
              giturl="https://github.com/alexanderdouglasbrown/Where-Weather"
            >
              A personal project built in Swift. The user presses and holds a spot on the world map
              and, using Apple's MapKit and data from OpenWeatherMap.org, Where Weather displays temperature and
              weather conditions anywhere in the world.
                    </Project>
            <Project
              showLightboxCallback={showLightbox}
              image="images/sketchy.png"
              video="videos/sketchy.mp4"
              title="Sketchy"
              description="An online multiplayer Javascript Pictionary game"
              url="http://csc667.herokuapp.com/"
              giturl="https://github.com/alexanderdouglasbrown/Sketchy"
            >
              Built in my Internet Application Design and Development class using Node.js with Socket.IO.
              I worked on building the drawing pad, which keeps packet sizes small by sending the artist's mouse movements to other players.
              I also worked on the client and server game logic, including assigning the host player, scanning the chat room for correct guesses, etc.
                    </Project>
            <Project
              showLightboxCallback={showLightbox}
              image="images/capone.jpg"
              video="videos/capone.mp4"
              title="Capone Behind Bars at Alcatraz"
              description="An iOS detailing Al Capone's time spent in Alcatraz"
              giturl="https://github.com/alexanderdouglasbrown/Capone-Behind-Bars-at-Alcatraz"
            >
              An iOS app I made for my family's business before entering my Computer Science degree program.
                </Project>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
