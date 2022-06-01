// import Hiking from './Hiking/Hiking';
// import './css/hiking.scss'
// import Peaky from './Peakyblinders/Peaky';
// import './css/peaky.scss'
// import './moderncss/nav.scss'
// import './moderncss/robot.scss'
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Tech from './Tech/Tech';
import './techcss/tech.scss'
// import Navbar from './Modern/Navbar';
// import Robot from './Modern/Robot';
// import Modern from './Modern/Modern';
// import Web from './Modern/Web';


function App() {
  return (
    <div className="App">
      {/* <Peaky></Peaky> */}
      {/* <Hiking></Hiking> */}
      {/* <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Robot></Robot>}> </Route>
          <Route path="/modern" element={<Modern></Modern>}> </Route>
          <Route path="/web" element={<Web></Web>}> </Route>
        </Routes>
      </Router> */}
      <Tech></Tech>
    </div>
  );
}

export default App;
