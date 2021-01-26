import { useState, useEffect, useHistory } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import * as puppyAPI from '../../utilities/puppies-api';
import AuthPage from '../AuthPage/AuthPage';
import AddPuppyPage from '../AddPuppyPage/AddPuppyPage';
import PuppyIndexPage from '../PuppyIndexPage/PuppyIndexPage';
import NavBar from '../../components/NavBar/NavBar';



export default function App() {
  const [user, setUser] = useState(getUser());
  const [puppies, setPuppies] = useState([]);
  
  useEffect(() => {
    async function getPuppies() {
      const puppies = await puppyAPI.getAll();
      setPuppies(puppies)
    }
    getPuppies();
  }, [])

  async function handleAddPuppy(newPuppyData) {
    const newPuppy = await puppyAPI.create(newPuppyData);
    setPuppies([...puppies, newPuppy]);
  }

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


