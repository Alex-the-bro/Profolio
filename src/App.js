import logo from './logo.svg';
import './App.css';
import { Navbar, Home, About, Jobs, ContactForm, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Jobs/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
