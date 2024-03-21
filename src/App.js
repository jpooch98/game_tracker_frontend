import AddGame from "./Components/AddGame";
import GameRow from "./Components/GameRow";
import Game from "./Components/Game"
import NewStrategy from "./Components/NewStrategy";
import NavigationBar from "./Components/NavigationBar";
import Logout from "./Components/Logout"
import { Routes, Route } from "react-router-dom";
import "./index.css"
import Account from "./Components/CreateAccount";
import Loggin from "./Components/Loggin";
import { AppUserProvider } from "./Components/AppUserContext";
import UserStrategies from "./Components/UserStrategies";


//Need to figure out how to pass up the value of the userId from the loggin
//component to see which links to show and to pass it to the strategy creation
//page to be passed as a param

function App() {
  return (
   <>
   <AppUserProvider>
      <NavigationBar/>
      <Routes>
        <Route path="/games" element={<GameRow/>}/>
        <Route path="/addGame" element={<AddGame/>}/>
        <Route path="/game" element={<Game />}/>
        <Route path="/newStrategy" element={<NewStrategy/>}/>
        <Route path="/createAccount" element={<Account />}/>
        <Route path="/loggin" element={<Loggin />}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/userStrategies" element={<UserStrategies/>}/>
      </Routes>
    </AppUserProvider>
   </>
  );
}

export default App;
