import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import Files from './components/ToDo/Files';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
       <Header/>
      </header>
      <body>
        <Files/>
      </body>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
