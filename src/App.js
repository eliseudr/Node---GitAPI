import UserDetails from "./UserDetails";
import { useState } from "react";
import api from './Services/api';
import './App.css';

function App() {

  const [username, setUsername] = useState("");
  const [since, setSince] = useState("");
  const [user, setUser] = useState("");

  const [repos, setRepos] = useState([]);
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  function handleSubmitRepos(e) {
    e.preventDefault();
    searchRepos();
  };

  function handleSubmitAllUsers(e) {
    e.preventDefault();
    searchAllUsers();
  };

  function handleSubmitUser(e) {
    e.preventDefault();
    searchUser();
  };

  //get all users since "/users?since={number}"
  function searchAllUsers() {
    api.call(`?since={${since}}`)
     .then((response) => setUsers(response.data))
     .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
   });
  };

   //get one specific user "/users/eliseudr"
   function searchUser() {
     api.get(`/${user}`)
     .then((response) => setUserDetails(response.data))
     .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
   });
  };

  //get all repos from the user
  function searchRepos() {
    api.get(`/${username}/repos`)
    .then((response) => setRepos(response.data))
    .catch((err) => {
     console.error("ops! ocorreu um erro" + err);
  });
  };

  function renderRepo(repo){
    return (
      <div className="row" key={repo.id}>
        <h2 className="repo-name">{repo.name}</h2>
      </div>
    );
  }

  function renderUsers(users){
    return(
      <div className="row" key={users.id}>
        <h2 className="repo-name">
          {/* INSERT HERE -- This should show all the info abouth the user,
          its current displaying it all on the console, just for clarity i`ll show just the login*/}
          {users.login}
        </h2>
      </div>
    )
  };

  return (
    <div className="page">
      <div className="landing-page-container">
        <form className="form">
            {/* Search users since user */}
            <input 
            className="input"
            value={since}
            placeholder="Show all users since..."
            onChange={e => setSince(e.target.value)}
            />
            <button className="button"
              onClick={handleSubmitAllUsers}>Search</button>

            {/* Search one user */}
            <input 
            className="input"
            value={user}
            placeholder="Show one user..."
            onChange={e => setUser(e.target.value)}
            />
            <button className="button"
              onClick={handleSubmitUser}>Search</button>

            {/* Search repos from this user */} 
            <input 
            className="input"
            value={username}
            placeholder="Show repos from this user..."
            onChange={e => setUsername(e.target.value)}
            />
            <button className="button"
              onClick={handleSubmitRepos}>Search</button>
        </form>
        <div className="results-container">
          {users.map(renderUsers)}
          {repos.map(renderRepo)}
        </div>
        <UserDetails details={userDetails} />
      </div>
    </div>
  );
}

export default App;