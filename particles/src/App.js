import './App.css';
import Login from './login/login.jsx';
import Particles from './particles/particle.jsx';
import Fade from './fade/fade.jsx';
import Fade2 from './fade2/fade2';

//http://reactcommunity.org/react-transition-group/with-react-router///
function App() {
  return (
    <div className="App">
      <div className='bg-circle1'></div>
      <div className='bg-circle2'></div>
      <div className='bg-circle3'></div>
      <div className='bg-circle4'></div>
      <Login />
      <Fade />
      <Fade2/>
      <Particles id='tsparticles'/>
      
    </div>
  );
}

export default App;
