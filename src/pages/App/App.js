import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import NewPuppyPage from '../NewPuppyPage/NewPuppyPage';
import PuppyHistoryPage from '../PuppyHistoryPage/PuppyHistoryPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState({}); 

  return (
    <main className="App">
      { user ?
        <>
        <Switch>
            <Route path="/puppies/new">
              <NewPuppyPage />
            </Route>
            <Route path="/puppies">
              <PuppyHistoryPage />
            </Route>
              <Redirect to="/puppies" />
          </Switch>
        </>
        :
        <AuthPage />
      }
    </main>
  );
}


