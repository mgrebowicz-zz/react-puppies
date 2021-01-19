import { useState } from 'react';
import { Route } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import NewPuppyPage from '../NewPuppyPage/NewPuppyPage';
import PuppyHistoryPage from '../PuppyHistoryPage/PuppyHistoryPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState({}); 

  return (
    <main className="App">
      { user ?
        <Route path="/puppies/new">
          <NewPuppyPage />
        </Route>
        :
        <AuthPage />
      }
    </main>
  );
}


