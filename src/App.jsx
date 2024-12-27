
import Header from './components/Header'
import Auth from './components/Auth'
import './App.css'
import { UserContextProvider } from "./context/userContext";


function App() {
  return (
    <div className="ui container">
      <UserContextProvider>
        <Header />
        <Auth />
      </UserContextProvider>
    </div>
  );
}

export default App;

