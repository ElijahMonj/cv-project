import avatar from './avatar.svg';
import './App.css';
import './cvstyles.css';
import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();

  
  }

  handleChangeName = (e) => {
    e.preventDefault();
    let name=document.getElementById('name').value;
    
    document.getElementById('nameFinal').textContent = name;
  };
  handleChangeOccupation = (e) => {
    e.preventDefault();
    let occupation=document.getElementById('occupation').value;  
    document.getElementById('jobTitle').textContent = occupation;
  };
  handleChangeinputNumber = (e) => {
    e.preventDefault();
    let number=document.getElementById('inputNumber').value;  
    document.getElementById('phone').textContent = "Phone: "+number;
  };
  handleChangeEmail = (e) => {
    e.preventDefault();
    let email=document.getElementById('inputEmail').value;  
    document.getElementById('email').textContent = "E-mail: "+email;
  };
  handleChangeAbout = (e) => {
    e.preventDefault();
    let me=document.getElementById('inputAboutMe').value;  
    document.getElementById('personalInfo').textContent = me;
  };



  render() {
   

  return (
    <div className='container'>
      <header>Make your CV</header>
      <div className='content'>
        <div className='addInfo'>
            <label htmlFor='name'>Name</label>
            <input
              maxLength={24}
              onChange={this.handleChangeName}   
              type="text"
              id="name"
            />
            <label htmlFor='occupation'>Occupation:</label>
            <input
              maxLength={20}
              onChange={this.handleChangeOccupation}   
              type="text"
              id="occupation"
            />
             <label htmlFor='inputNumber'>Phone Number:</label>
            <input
              maxLength={15}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"  
              onChange={this.handleChangeinputNumber}   
              type="tel"
              id="inputNumber"
            />
            <label htmlFor='occupation'>E-mail:</label>
            <input
              maxLength={25}
              onChange={this.handleChangeEmail}   
              type="email"
              id="inputEmail"
            /> 
            <label htmlFor='inputAboutMe'>Make a short summary of you:</label>
            <textarea
              maxLength={210}
              onChange={this.handleChangeAbout}   
              type="text"
              id="inputAboutMe"
            />   
        </div>
        <div className='showInfo'>
        
          <div className='cvPreview'>
            <div className='basicInfo'>
              <img src={avatar} className="avatar" alt="avatar"/>
              <div className='basicInfoDetails'>
                  <div id='nameFinal'>Sample Name</div>
                  <div className='jobTitle' id='jobTitle'>Sample Employee</div>
                    <div className='phoneEmail' id='phoneEmail'>
                      <div className='phone' id='phone'>Phone : {'1212121212'}</div>
                      <div className='email' id='email'>E-mail: {'sample@gmail.com'}</div>
                    </div>
              </div>
            </div>
  
            <div className='personalInfo'>
                <div className='aboutMe'>About Me</div><br></br>
                <div id='personalInfo'></div>
                </div>




            <div className='education'>
                <div className='aboutMe'>Education</div><br></br>
                <ul>
                  
                </ul>
             </div>
             <div className='skills'>
                <div className='aboutMe'>Skills</div><br></br>
                <ul>
                  <li>as</li>
                  <li>as</li>
                  <li>as</li>
                  <li>as</li>
                </ul>
             </div>
             <div className='experience'>
                <div className='aboutMe'>Experience</div><br></br>
                <ul>
                  <li>as</li>
                  <li>as</li>
                  <li>as</li>
                  <li>as</li>
                </ul>
             </div>
             <div className='certifications'>
                <div className='aboutMe'>Certifications</div><br></br>
                <ul>
                  <li>as</li>
                  <li>as</li>
                  <li>as</li>
                  <li>as</li>
                </ul>
             </div>
            
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
