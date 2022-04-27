// npx create-react-app {name}
// cd {name}
// npm start

import {useState} from 'react';
import './App.css';
import {UpDown/*, DownUp*/} from "./components/UpDown"

function App() {
  const [first, setFirst] = useState(1);
  const [second, setSecond] = useState(1);
  return (
    <div>
      <UpDown number={first} setNumber={setFirst} />
      <UpDown number={second} setNumber={setSecond} />
      <p>{first + second}</p>
    </div>
  );
}

export default App;
