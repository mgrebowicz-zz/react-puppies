import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import AddPuppyPage from '../AddPuppyPage/AddPuppyPage';
import PuppyIndexPage from '../PuppyIndexPage/PuppyIndexPage';
import NavBar from '../../components/NavBar/NavBar';
import Button from '@material-ui/core/Button';


export default function App() {
  const [user, setUser] = useState(getUser()); 

  return (
    <main className="App">
      { user ?
        <>
        <NavBar user={user} setUser={setUser} />
        <Switch>
            <Route path="/puppies/new">
              <AddPuppyPage user={user} setUser={setUser}/>
            </Route>
            <Route path="/puppies">
              <PuppyIndexPage />
            </Route>
              <Redirect to="/puppies" />
          </Switch>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


