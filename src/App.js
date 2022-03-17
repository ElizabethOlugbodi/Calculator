
import './App.css';
import Displays from './Components/Displays';
import Numbers from './Components/Numbers';
import Operators from './Components/Operators';

function App() {
  return (
    <div className="App">
     <div> My calculator App</div>
     <Displays/>
     <Operators/>
     <Numbers/>
    </div>
  );
}

export default App;
