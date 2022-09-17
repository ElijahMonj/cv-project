import avatar from './avatar.svg';
import './App.css';
import './cvstyles.css';

function App() {
  return (
    <div className='container'>
      <header>Make your CV</header>
      <div className='content'>
        <div className='addInfo'>
            <label htmlFor='name'>Name</label>
            <input id='name'></input>
        </div>
        <div className='showInfo'>
          <div className='cvPreview'>
            <div className='basicInfo'>
              <img src={avatar} className="avatar" alt="avatar"/>
              <div className='basicInfoDetails'>
                  <div className='name'>{"Elijah Monjardin"}</div>
                  <div className='jobTitle'>{"IT Project Manager"}</div>
                  <div className='phone'>Phone : {'1212121212'}</div>
                  <div className='email'>E-mail: {'sample@gmail.com'}</div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
