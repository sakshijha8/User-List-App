import './App.css';
import UserList from './components/UserList'
import {AppContainer} from './styles/userDetail'

function App() {
  return (
    <AppContainer>
      <h1>User List App</h1>
      <UserList />
    </AppContainer>
  );
}

export default App;
