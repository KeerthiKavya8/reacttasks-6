import './App.css';
import insta from './instagramlogo.png';
import mail from './gmail.jpeg';
import github from './githublogo.png';
export default function app(){
  return(
    <div id="id">
      <div id="id1">
        <p> PORTFOLIO </p>
      </div>
      <div id="id2">
        <p><b id="id3">Profile</b></p>
        <p>Hello I am  Challa Keerthi Kavya currently pursing in BTech-3rd year in  VIT-AP university</p>
        <p>
          I completed my Intermediate at Narayana Junior College and I studied 10 th standard at Sri Chaitanya School,Kavali.
        </p>
        <p>
         Currently I am a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning.
        </p>
        <p>
           I believe that a combination of creativity, empathy, and determination can lead to transformative change, and I'm committed to embodying these qualities in everything I do.
        </p>
      </div>

      <div id="id9">
        <p id="id3"><b>Skills</b></p>
        
        <span id="id6">Java</span>
        <span id="id6">Python</span>
        <span id="id6">HTML & CSS</span>
        <span id="id6">SQL</span>
        <span id="id6">JavaScript</span>
      </div>
      <div id="id10">
        <p id="id12"><b>Projects</b></p>
        
        <span id="id11">Deep Learning for Image Recognition</span>
        <span id="id11">Weather monitoring system using Iot</span>
        
        <span id="id11">NLP for Sentiment Analysis</span>
      </div>
      <div id="id4">
        <p id="id3">Contact</p>
        <span id="id5"><a id="id8" href="kavyachalla99@gmail.com">Email</a></span>
        <a href="kavyachalla99@gmail.com"><img src={mail} alt="Instagram logo" height={50}/></a>
        <span id="id5"><a id="id8" href="https://www.instagram.com/keerthi___kavya/">Instagram</a></span>
        <a href="https://www.instagram.com/keerthi___kavya/"><img src={insta} alt="Instagram logo" height={50}/></a>
        <span id="id5"><a id="id8" href="https://github.com/KeerthiKavya8 ">Github</a></span>
        <a href="https://github.com/KeerthiKavya8"><img src={github} alt="Instagram logo" height={50}/></a>
      </div>
    </div>
  );
}