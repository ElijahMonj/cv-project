import avatar from './avatar.svg';
import './App.css';
import './cvstyles.css';
import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();

  
  }

  handleChange = (e) => {
    e.preventDefault();
    let name=document.getElementById('name').value;
    
    document.getElementById('nameFinal').textContent = name;
  };
  render() {
   

  return (
    <div className='container'>
      <header>Make your CV</header>
      <div className='content'>
        <div className='addInfo'>
            <label htmlFor='name'>Name</label>
            <input
              onChange={this.handleChange}
              
              type="text"
              id="name"
            />
        </div>
        <div className='showInfo'>
        
          <div className='cvPreview'>
            <div className='basicInfo'>
              <img src={avatar} className="avatar" alt="avatar"/>
              <div className='basicInfoDetails'>
                  <div id='nameFinal'>Sample Name</div>
                  <div className='jobTitle'>{"Sample Employee"}</div>
                    <div className='phoneEmail'>
                      <div className='phone'>Phone : {'1212121212'}</div>
                      <div className='email'>E-mail: {'sample@gmail.com'}</div>
                    </div>
              </div>
            </div>










            
            <div className='personalInfo'>
                <div className='aboutMe'>About Me</div><br></br>
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
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
