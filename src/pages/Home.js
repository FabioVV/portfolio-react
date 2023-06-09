import React from "react";
import DefaultPage from "./DefaultPage";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GamesIcon from "@mui/icons-material/Games";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/home.css";
import { motion } from "framer-motion";
import me from "../assets/me.jpeg";
import AboutSkills from "../components/AboutSkills";

export default function Home() {
  return (
    <DefaultPage>
      <motion.div
        className="home"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <div className="about ">
          <h1 className="main-h1">
            Hi, my name is <span className="author">Fábio</span>
          </h1>
          <div
            style={{ backgroundImage: `url(${me})` }}
            className="myprofile"
          ></div>
          <div className="prompt">
            <p>
              - A systems information student with a passion for programming and
              learning. -
            </p>
          </div>
        </div>

        <hr />

        <div className=" about">

          <h1><span className="terminal-user">fabio@dev</span>:~$ cat A-little-About-Me.txt </h1>
          
          <div className="prompt me">
            <h2>A-little-About-Me.txt</h2>
            <p>
              I am a systems information student that is in love with technology
              and software development. I have always loved coding and
              technology since i was little.
            </p>
            <p>
              I had my first contact with programming when i was in High School,
              with our Logics teacher teaching us Pascal and later Java. I have
              become a great student, and i stand out through my grades, focus
              and commitment. Today i am currently studying for a degree in
              Systems information.
            </p>
            <p>
              I am also looking for an oportunity to land my first gig in the IT
              area, and start my career doing what i love, which is coding!
            </p>
            <p>
              "Por meio do estudo você encontrará tudo que precisa para
              conquistar seus sonhos."
            </p>
          </div>
        </div>

        <hr />

        <div className="skills">
          <h1><span className="terminal-user">fabio@dev</span>:~$ nano some_of_my_skills.py </h1>
          <h2>some_of_my_skills.py</h2>
          <AboutSkills></AboutSkills>
        </div>

        <hr />

        <div className="about final">
          <h1>
            Connect with me through <span className="author">Here</span>
          </h1>
          <div className="prompt contact">
            <div className="icons">
              <a
                rel="noreferrer"
                style={{ color: "white" }}
                target="_blank"
                href="https://github.com/FabioVV"
              >
                <GitHubIcon />
                My github
              </a>
              <a
                rel="noreferrer"
                style={{ color: "white" }}
                target="_blank"
                href="mailto:fabio-varela@protonmail.com"
              >
                <EmailIcon />
                My Email
              </a>
              <a
                rel="noreferrer"
                style={{ color: "white" }}
                target="_blank"
                href="https://www.linkedin.com/in/f%C3%A1bio-varela-413719217"
              >
                <LinkedInIcon />
                My LinkedIn
              </a>
              <a
                rel="noreferrer"
                style={{ color: "white" }}
                target="_blank"
                href="https://twitter.com/fabinhotk"
              >
                <TwitterIcon />
                My Twitter
              </a>
              <a
                rel="noreferrer"
                style={{ color: "white" }}
                target="_blank"
                href="https://steamcommunity.com/id/fabinhotk998/"
              >
                <GamesIcon />
                My Steam
              </a>
            </div>
          </div>
        </div>
        <div class="quote">
          <blockquote>
            <p>
              "Success is not final; failure is not fatal: It is the courage to
              continue that counts."
            </p>
            <cite>Winston S. Churchill</cite>
          </blockquote>
        </div>
      </motion.div>
    </DefaultPage>
  );
}
