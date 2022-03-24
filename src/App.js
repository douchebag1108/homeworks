import Main from './Main';
import Score from './Score';
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/Score/">
        <Score />
      </Route>
    </div>
  );
}

export default App;