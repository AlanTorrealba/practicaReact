import imagen1 from './1.png';
import imagen2 from './2.png';
import imagen3 from './3.png';

import './App.css';

function App() {
  const cambiarTexto = (e) =>{
    if (e.target.innerHTML==="over") {
      e.target.innerHTML = "";
    }else{
      e.target.innerHTML ="over";
    }
    
  }
  let nombres=["spider","Captain","thor"];
  return (
    <div className="App">
      <header className="App-header">
      <div className="card">
        <img src={imagen1} className="img1" alt="logo" />
        <p onClick={cambiarTexto}>{nombres[0]}</p>
      </div>
      <div className="card">
        <img src={imagen2} className="img1" alt="logo" />
        <p onClick={cambiarTexto}>{nombres[1]}</p>
      </div>
      <div className="card">
        <img src={imagen3} className="img1" alt="logo" />
        <p onClick={cambiarTexto}>{nombres[2]}</p>
      </div>
      </header>
    </div>
  );
}

export default App;
