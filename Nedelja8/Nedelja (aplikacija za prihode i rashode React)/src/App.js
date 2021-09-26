import logo from './logo.svg';
import './App.css';

import { useState } from "react";
import Mapiranje from './components/Mapiranje.jsx';
import Form from './components/Form';
import Header from './components/Header';

function App() {

  const [spisak, setSpisak] = useState([
    {
      id: 1,
      vrsta: 'prihod',
      opis: 'Plata',
      iznos: 8000
    },

    {
      id: 2,
      vrsta: 'rashod',
      opis: 'Poklon',
      iznos: 3000
    },

    {
      id: 3,
      vrsta: 'prihod',
      opis: 'Prodaja',
      iznos: 2000
    }

  ])

  return (
    <div>

      <Header spisak={spisak} />
      <Form setSpisak={setSpisak} />
      <Mapiranje spisak={spisak} setSpisak={setSpisak} />


    </div>

  );
}

export default App;





















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
