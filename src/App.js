import React, { Component } from 'react';
import './App.css';
import Lightbox from './components/Lightbox'
import Profile from './components/Profile'
import Project from './components/Project'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Lightbox />
        <div className="row">
          <div className="content col-xs-12 col-sm-10 col-sm-offset-1">
            <Profile image="images/profile_pic.png" name="Alexander D. Brown" title="B.S. Computer Science" >
              <a href="mailto:alexanderdouglasbrown@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i> alexanderdouglasbrown@gmail.com</a>
              <br />
              <a href="https://drive.google.com/open?id=0B30hQOEKn_sUWFViRXkzY0tUb2s"><i className="fa fa-file" aria-hidden="true"></i> Resume</a>
              <span className="smallGap"></span>
              <a href="https://github.com/alexanderdouglasbrown"><i className="fa fa-github" aria-hidden="true"></i> GitHub</a>
              <span className="smallGap"></span>
              <a href="https://www.linkedin.com/in/alexanderdouglasbrown/"><i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</a>
              <div className="profile-text">
                Hi, my name is Alex. I'm passionate about computers and technology, and have been programming, building, and repairing computers for as long as I can remember.
                I have a Bachelor of Science in Computer Science from San Francisco State University, and an Associate in Science in CIS Desktop Networking from College of Marin.
                Below are some of my programming projects.
                    </div>
            </Profile>
            <Project
              image="images/frend_chat.png"
              title="Frend Chat"
              description="A chat room to connect you and your &quot;frends&quot;"
              url="https://github.com/alexanderdouglasbrown/FrendChat/releases"
              giturl="https://github.com/alexanderdouglasbrown/FrendChat"
            >
              A chat app made in Java and JavaFX, and a personal project of mine. It connects to a server, <a href="https://github.com/alexanderdouglasbrown/FrendServer">Frend Server</a>,
              which is written in C++. Frend Server uses SQLite to store user credentials, while passwords are salted and hashed with SHA256.
                    </Project>
            <Project
              image="images/image_splash.png"
              title="Image Splash"
              description="An image sharing website"
              url="http://www.imagesplash.cool/"
              giturl="https://github.com/alexanderdouglasbrown/ImageSplash"
            >
              A personal project website for sharing images and leaving comments. Built with Node.js, Express, and MongoDB.
                    </Project>
            <Project
              image="images/fruit_valley.png"
              title="Fruit Valley"
              description="A match-3 puzzle game made in Javascript"
              url="https://alexanderdouglasbrown.github.io/Fruit-Valley/"
              giturl="https://github.com/alexanderdouglasbrown/Fruit-Valley"
            >
              A personal project of mine. Built with another of my projects, <a href="https://github.com/alexanderdouglasbrown/JSGamework">JSGamework</a>,
              which handles the game loop and scales the screen to fit the browser window.
                    </Project>
            <Project
              image="images/where_weather.jpg"
              title="Where Weather"
              description="An iOS app that lets you see the weather anywhere in the world"
              giturl="https://github.com/alexanderdouglasbrown/Where-Weather"
            >
              A personal project built in Swift. The user presses and holds a spot on the world map
              and, using Apple's MapKit and data from OpenWeatherMap.org, Where Weather displays temperature and
              weather conditions anywhere in the world.
                    </Project>
            <Project
              image="images/sketchy.png"
              title="Sketchy"
              description="An online multiplayer Javascript Pictionary game"
              url="http://csc667.herokuapp.com/"
              giturl="https://github.com/alexanderdouglasbrown/Sketchy"
            >
              Built in my Internet Application Design and Development class using Node.js, Express, jQuery and Socket.IO.
              I worked on building the art pad, which keeps packet sizes small by storing and sending the artist's mouse movements to other players.
              I also worked on the client and server game logic, including assigning the host player, scanning the chat room for correct guesses, etc.
                    </Project>
            <Project
              image="images/amos.png"
              title="Absolutely Mandatory OS"
              description="A simulated OS made in Javascript"
              url="https://alexanderdouglasbrown.github.io/ABSOLUTELY_MANDATORY_OS/AMOS.html"
              giturl="https://github.com/alexanderdouglasbrown/ABSOLUTELY_MANDATORY_OS"
            >
              Built in my Operating System Principals class. I made the command line, which accepts user commands, supports piping, and saves input history.
              I also built commands such as cat, man, and sort.
                    </Project>
            <Project
              image="images/fud5.png"
              title="FüD5"
              description="An Android Java restaurant recommendation app"
              giturl="https://github.com/alexanderdouglasbrown/FUD5"
            >
              Built in my Software Development class, where I was a team lead in an agile work environment.
              I designed and implemented the UI.
                    </Project>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
