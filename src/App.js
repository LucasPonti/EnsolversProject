import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import Files from './components/ToDo/Files';
import Login from './components/ToDo/Login';
import {useAuth} from './server/firebase' 

function App() {
  const currentUser = useAuth();  

  return (
    currentUser ? (
      <div className="App">
      <header className="App-header">
        <NavBar/>
       <Header/>
       <Login/>
      </header>
      <body>
        <Files/>
      </body>
      <footer>
        <Footer/>
      </footer>
    </div>
    ) : (
      <div className="App">
      <header className="App-header">
        <NavBar/>
       <Header/>
       <Login/>
      </header>
      <footer>
        <Footer/>
      </footer>
    </div>
    )
   
  );
}

export default App;
