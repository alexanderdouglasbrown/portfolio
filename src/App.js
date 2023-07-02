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
              name="Alex Brown"
              title="B.S. Computer Science"
              email="alexanderdouglasbrown@gmail.com"
              resume="https://drive.google.com/open?id=1mG2RvEwQ_a2byFQQztXR-XhCxnnchWVc"
              github="https://github.com/alexanderdouglasbrown"
              linkedin="https://www.linkedin.com/in/alexanderdouglasbrown/"
              instagram="https://www.instagram.com/glacialtruffle/"
            >
              Hi, my name is Alex, and that's my dog Murphy. I'm passionate about computers and technology, and have been programming, building, and repairing computers for as long as I can remember.
              I have a Bachelor of Science in Computer Science from San Francisco State University, and an Associate in Science in CIS Desktop Networking from College of Marin.
              Below are some of my programming projects.
            </Profile>
            <Project
              showLightboxCallback={showLightbox}
              title="Cabin Scene"
              image="images/cabin-scene.png"
              video="videos/cabin-scene.mp4"
              description="A cabin on a flying island"
              url="https://alexanderdouglasbrown.github.io/Cabin-Scene/"
              giturl="https://github.com/alexanderdouglasbrown/Cabin-Scene"
            >
              A 3D scene created in WebGL2, with WebAssembly (through Rust) for math functions.
            </Project>
            <Project
              showLightboxCallback={showLightbox}
              title="Word Grove"
              image="images/word-grove.png"
              video="videos/word-grove.mp4"
              description="A relaxing place to enjoy words and images on the internet"
              url="https://wordgrove.net"
              giturl="https://github.com/alexanderdouglasbrown/Word-Grove"
              serverurl="https://github.com/alexanderdouglasbrown/Word-Grove-API"
            >
              A website for posting your thoughts, dogs, links, whatever, and leaving comments. Built with React, ASP .NET Core, and PostgreSQL.
            </Project>
            <Project
              showLightboxCallback={showLightbox}
              image="images/friend-chat.png"
              video="videos/friend-chat.mp4"
              title="Friend Chat"
              description="A chat room to connect you and your friends"
              url="https://github.com/alexanderdouglasbrown/FriendChat/releases"
              giturl="https://github.com/alexanderdouglasbrown/FriendChat"
              serverurl="https://github.com/alexanderdouglasbrown/FriendServer"
            >
              A chat app made in Java and JavaFX. It connects to Friend Server, which is written in C++.
              Friend Server uses SQLite to store user credentials, while passwords are salted and hashed with SHA256.
            </Project>
            <Project
              showLightboxCallback={showLightbox}
              image="images/where-weather.jpg"
              video="videos/where-weather.mp4"
              title="Where Weather"
              description="An iOS app that lets you see the weather anywhere in the world"
              giturl="https://github.com/alexanderdouglasbrown/Where-Weather"
            >
              An iOS weather app built in Swift. The user presses and holds a spot on the world map,
              and, using Apple's MapKit and data from OpenWeatherMap.org, Where Weather displays temperature and
              weather conditions anywhere in the world.
            </Project>
            <Project
              showLightboxCallback={showLightbox}
              image="images/fruit-valley.png"
              video="videos/fruit-valley.mp4"
              title="Fruit Valley"
              description="A match-three puzzle game made in Javascript"
              url="https://alexanderdouglasbrown.github.io/Fruit-Valley/"
              giturl="https://github.com/alexanderdouglasbrown/Fruit-Valley"
            >
              A match-three puzzle browser game. Built with another of my projects, <a href="https://github.com/alexanderdouglasbrown/JSGamework">JSGamework</a>,
              which handles the game loop and scales the screen to fit the browser window.
            </Project>
            <Project
              showLightboxCallback={showLightbox}
              image="images/image-splash.png"
              video="videos/image-splash.mp4"
              title="Image Splash"
              description="An image sharing website"
              url="http://www.imagesplash.cool/"
              giturl="https://github.com/alexanderdouglasbrown/ImageSplash"
            >
              A website for sharing images and leaving comments. Built with Node.js, Express, and MongoDB.
            </Project>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
