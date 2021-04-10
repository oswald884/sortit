import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home/Index';
import Navbar from './components/Navbar/Index';
import ManagerContextProvider from './contexts/ManagerContext';
import ArrayContextProvider from './contexts/ArrayContext';

function App() {
  return (
    <ManagerContextProvider>
      <ArrayContextProvider>
          <Router>
            <div className="app-container">
              <Navbar />
              <Switch>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            </div>
          </Router>
      </ArrayContextProvider>
    </ManagerContextProvider>
  );
}

export default App;
