import avatar from './avatar.svg';
import './App.css';
import './cvstyles.css';
import React, { Component } from "react";
import Overview from "./components/Overview";
import Certifications from "./components/Certifications.js";
import Educations from "./components/Educations";
import Experience from "./components/Experience";
import uniqid from "uniqid";
class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '', 
        id: uniqid()
      },
      tasks: [],
      cert: {
        text: '', 
        id: uniqid()
      },
      certs: [],

      edu: {
        text: '', 
        id: uniqid()
      },
      edus: [],

      exp: {
        text: '', 
        id: uniqid()
      },
      exps: [],
    };

    
  }
  //experience
  handleChangeExp = (e) => {
    this.setState({
      exp: {
        text: e.target.value,
        id: this.state.exp.id,
      },
    });
  };

  onSubmitExp = (e) => {
    e.preventDefault();
    this.setState({
      exps: this.state.exps.concat(this.state.exp),
      exp: {
        text: '', 
        id: uniqid()
      },
    });
  };
  //experience
  //edu
  handleChangeEdu = (e) => {
    let school=document.getElementById('eduInputSchool').value;  
    let year=document.getElementById('eduInputYear').value;  
    let degree=document.getElementById('eduInputDegree').value;  
    this.setState({
      edu: {
        text: school+" - "+year+" - "+degree,
        id: this.state.edu.id,
      },
    });
  };
  onSubmitTaskEdu = (e) => {
    
    e.preventDefault();
    this.setState({
      edus: this.state.edus.concat(this.state.edu),
      edu: {
        text: '', 
        id: uniqid()
      },
    });
  };
  //edu
  //cert
  handleChangeCert = (e) => {
    this.setState({
      cert: {
        text: e.target.value,
        id: this.state.cert.id,
      },
    });
  };

  onSubmitTaskCert = (e) => {
    e.preventDefault();
    this.setState({
      certs: this.state.certs.concat(this.state.cert),
      cert: {
        text: '', 
        id: uniqid()
      },
    });
  };
  //cert

  //skills
  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };
  
  onSubmitTask = (e) => {
    e.preventDefault();
    let skills=document.getElementsByClassName("skillsID");
    console.log(skills);
    if(skills.length>=9){
      document.getElementById("skillsBtn").disabled = true;
    }
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '', 
        id: uniqid()
      },
    });
  };
  //Skills


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
    const { task, tasks } = this.state;
    const { cert, certs } = this.state;
    const { edu, edus } = this.state;
    const { exp, exps } = this.state;

  return (
    <div className='container'>
      <header>Make your CV</header>
      <div className='content'>
        <div className='addInfo'>
            <label htmlFor='name'>Name</label>
            <input
              maxLength={41}
              onChange={this.handleChangeName}   
              type="text"
              id="name"
            />
            <label htmlFor='occupation'>Occupation:</label>
            <input
              maxLength={30}
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
              maxLength={37}
              onChange={this.handleChangeEmail}   
              type="email"
              id="inputEmail"
            /> 
            <label htmlFor='inputAboutMe'>Make a short summary of you:</label>
            <textarea
              maxLength={300  }
              onChange={this.handleChangeAbout}   
              type="text"
              id="inputAboutMe"
            />
            <form onSubmit={this.onSubmitTaskEdu}>
              <div>Enter Education</div>
              <label htmlFor="eduInput">Enter School</label>
              <input
                onChange={this.handleChangeEdu}
                 maxLength='18'
                required
                 type="text"
                id="eduInputSchool"
              />
              <label htmlFor="eduInputYear">Enter Year</label>
              <input
                onChange={this.handleChangeEdu}
                 maxLength='18'
                 required
                 type="text"
                id="eduInputYear"
              />
              <label htmlFor="eduInputDegree">Enter Degree</label>
              <input
                onChange={this.handleChangeEdu}
                 maxLength='18'
                 required
                 type="text"
                id="eduInputDegree"
              />
              <button type="submit" id='eduBtn'>Add Education</button>
            </form>   
            <form onSubmit={this.onSubmitTask}>
              <label htmlFor="taskInput">Enter Skills</label>
              <input
                onChange={this.handleChange}
                 maxLength='18'
                 value={task.text}
                 type="text"
                id="taskInput"
              />
              <button type="submit" id='skillsBtn'>Add Skills</button>
            </form>  

            <form onSubmit={this.onSubmitExp}>
              <label htmlFor="expInput">Enter Experience</label>
              <input
              onChange={this.handleChangeExp}
              value={exp.text}
              type="text"
              id="expInput"
              />
              <button type="submit">Add Experience</button>
            </form> 

            <form onSubmit={this.onSubmitTaskCert}>
              <label htmlFor="certInput">Enter Certifications</label>
              <input
                onChange={this.handleChangeCert}
                 maxLength='18'
                 value={cert.text}
                 type="text"
                id="certInput"
              />
              <button type="submit" id='certBtn'>Add Cert</button>
            </form>   
        
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
                <div className='aboutMe'>Education</div>
                <Educations edus={edus} />
             </div>
             <div className='skills'>
                <div className='aboutMe'>Skills</div>
                <Overview tasks={tasks} />
             </div>
             <div className='experience'>
                <div className='aboutMe'>Experience</div>
                <Experience exps={exps} />
             </div>
             <div className='certifications'>
                <div className='aboutMe'>Certifications</div>
                <Certifications certs={certs} />
             </div>
            
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
