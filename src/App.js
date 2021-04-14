import React from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import Contacto from './pages/Contacto';
import Quien from './pages/QuienSoy';
import './App.css';

function App() {
  //const [stateCar, setStateCar] = useState(false);
  //const [count, setCount] = useState(0);

  /*useEffect(() =>{
    console.log("Total: "+count);
  }, [count]);
  

  const encenderApagar = () => {
    setStateCar(!stateCar);
    setCount(count + 1);
  }
  */

  return (
    <div className="App">
      <h1>React Bootstrap</h1>
      <Router>
        <div>
          <Link to="/contacto">
            <Button>Contacto</Button>
          </Link>
          <Link to="/quien">
            <Button>Quién soy</Button>
          </Link>
        </div>

        <Switch>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/quien">
            <Quien />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
