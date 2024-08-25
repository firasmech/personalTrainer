import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Work from './Work';
import About from './aboutMe';
import Contact from './contact';
import './styles/App.css';

function App() {
  return (
    <Router>
      
      <Header/>

      <main className="main">

        
        <Switch>
          
            
          <Route exact path='/'>
            <Home/>
          </Route>
            
          <Route path='/about'>
            <About/>
          </Route>

          <Route path='/portfolio'>
            <Work/>
           </Route>

          <Route path='/contact'>
            <Contact/>
          </Route>

          
        </Switch>
      
      </main>
      
    </Router>
    
  );
}

export default App;
