import avatar from './avatar.svg';
import github from './GitHub-Mark-Light-120px-plus.png'
import './App.css';
import './cvstyles.css';
import './fieldStyle.css';
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
    if(this.state.exps.length===5){
      document.getElementById("addExpBtn").disabled = true;
    }
  };
  //experience
  //edu
  handleChangeEdu = (e) => {
    let school=document.getElementById('eduInputSchool').value;  
    let year=document.getElementById('eduInputYear').value;  
    let degree=document.getElementById('eduInputDegree').value;  
    this.setState({
      edu: {
        text: school+" - "+degree+" - "+year,
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
    document.getElementById('eduInputSchool').value="";  
    document.getElementById('eduInputYear').value="";  
    document.getElementById('eduInputDegree').value="";  
    if(this.state.edus.length===5){
      document.getElementById("eduBtn").disabled = true;
    }
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
    if(this.state.certs.length===7){
      document.getElementById("certBtn").disabled = true;
    }
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
    
    if(this.state.tasks.length===9){
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

  //deleting
  skillsDelete = (e) => {
    e.preventDefault();
    var array=this.state.tasks;
    array.pop();
    console.log(array);
    this.setState({
      tasks: array,
      task: {
        text: '', 
        id: uniqid()
      },
    });
    document.getElementById("skillsBtn").disabled = false;
  };
  expDelete = (e) => {
    e.preventDefault();
    var array=this.state.exps;
    array.pop();
    console.log(array);
    this.setState({
      exps: array,
      exp: {
        text: '', 
        id: uniqid()
      },
    });
    document.getElementById("addExpBtn").disabled = false;
  };
  certDelete = (e) => {
    e.preventDefault();
    var array=this.state.certs;
    array.pop();
    console.log(array);
    this.setState({
      certs: array,
      cert: {
        text: '', 
        id: uniqid()
      },
    });
    document.getElementById("certBtn").disabled = false;
  };
  edusDelete = (e) => {
    e.preventDefault();
    var array=this.state.edus;
    array.pop();
    console.log(array);
    this.setState({
      edus: array,
      edu: {
        text: '', 
        id: uniqid()
      },
    });
    document.getElementById("eduBtn").disabled = false;
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
            /> <div className='PE'>
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
            /> </div>
            <label htmlFor='inputAboutMe'>Make a short summary of you:</label>
            <textarea
              maxLength={300}
              onChange={this.handleChangeAbout}   
              type="text"
              id="inputAboutMe"
            />
            <form onSubmit={this.onSubmitTaskEdu} className="formEducation">
              <div>Enter Education</div><br></br>
              <label htmlFor="eduInput">Enter School</label>
              <input
                onChange={this.handleChangeEdu}
                 maxLength='35'
                required
                 type="text"
                id="eduInputSchool"
              />
             
              <label htmlFor="eduInputDegree">Enter Degree</label>
              <input
                onChange={this.handleChangeEdu}
                 maxLength='50'
                 required
                 type="text"
                id="eduInputDegree"
              />
               <label htmlFor="eduInputYear">Enter Year</label>
              <input
                onChange={this.handleChangeEdu}
                 maxLength='10'
                 required
                 type="text"
                id="eduInputYear"
              /> <div className='buttons'>
              <button type="submit" id='eduBtn'>Add Education</button>
              <button type="button" id='delEduBtn' onClick={this.edusDelete}>Delete Education</button>
              </div>
            </form>   
            <form onSubmit={this.onSubmitTask}>
            <div className='buttons'>
              <label htmlFor="taskInput">Enter Skills &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input
                onChange={this.handleChange}
                 maxLength='18'
                 value={task.text}
                 type="text"
                 required
                id="taskInput"
              />
              <button type="submit" id='skillsBtn'>Add Skills</button>
              <button type="button" id='delSkillsBtn' onClick={this.skillsDelete}>Delete Skills</button></div>
            </form>  

            <form onSubmit={this.onSubmitExp}>
            <div className='buttons'>
              <label htmlFor="expInput">Enter Experiences&nbsp;&nbsp;&nbsp;</label>
              <input
              onChange={this.handleChangeExp}
              value={exp.text}
              type="text"
              required
              id="expInput"
              />
              <button type="submit" id='addExpBtn'>Add Experience</button>
              <button type="button" id='delExpBtn' onClick={this.expDelete}>Delete Experience</button></div>
            </form> 

            <form onSubmit={this.onSubmitTaskCert}>
              
              <div className='buttons'>
              <label htmlFor="certInput">Enter Certifications</label>
              <input
                onChange={this.handleChangeCert}
                 maxLength='18'
                 value={cert.text}
                 type="text"
                id="certInput"
                required
              />
              <button type="submit" id='certBtn'>Add Cert</button>
              <button type="button" id='delCertBtn' onClick={this.certDelete}>Delete Certificate</button></div>
            </form>
            <br></br>
            <br></br>
            <br></br>   
        
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
          <button className=''>Export</button>
          <br></br><br></br><br></br><br></br>
        </div>
        
      </div>
      <footer>Copyrights 2022 @ElijahMonj&nbsp;&nbsp;<a href='https://github.com/ElijahMonj/Restaurant-Page'><img src={github}></img></a></footer>
    </div>
  );
  }
}

export default App;
