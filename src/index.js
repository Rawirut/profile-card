import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App(){
  return(
    <>
      <div className='card'>
        <Avatar />
        <div className='data'>
          <Intro />
          <SkillList />
    
        </div>
      </div>
    </>
  );
}

function SkillList(){
  return(
    <div className='skill-list'>
      <Skill skill='Gaming' emoji='👶🏻' color='red' />
      <Skill skill='Music' emoji='👶🏻' color='blue' />
      <Skill skill='Eat' emoji='👶🏻' color='orange' />
      <Skill skill='sleep' emoji='👶🏻' color='cyan' />

    </div>

  );
}

function Skill(props){
  return(
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>

    </div>

  );
}

function Intro(){
  return(
    <div>
      <h1>นายรวีรุจ ดานุวงค์</h1>
      <p>
        นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์ 
        มหาวิทยาลัยอุบลราชธานี ชอบฟังเพลงเล่นเกมและนอน
      </p>

    </div>

  );
}

function Avatar() {
  return <img className='avatar' src='arm.jpg' alt='My Avatar'></img>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);