
import './App.css';
import Front from './components/front'
import Collect from './components/collecton'
import Pdf from './components/pdf'
import Music from './components/music'


import { BrowserRouter as Router , Route, Link, Redirect , Switch   } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
      <>
         <Router>
            <Switch>
              <Route exact path="/" component={Front}/>
              <Route exact path="/collection" component={Collect} />
              <Route exact path="/pdf" component={Pdf}/>
              <Route exact path="/music" component={Music}/>
            </Switch>
         </Router>
         
      </>

    </div>
  );
}

export default App;
