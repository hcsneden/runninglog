import './App.css';
import { useState, createContext } from "react"
import { Main } from './components/Main';
import { Header } from './components/Header';

export const UserContext = createContext(null);
function App() {
  const [user, setUser] = useState('Mal')

  const setUserContext = (selected) => {
    setUser(selected)
  }

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUserContext }}>
        <Header></Header>
        <Main></Main>
      </UserContext.Provider>
    </div>
  );
}

export default App;
