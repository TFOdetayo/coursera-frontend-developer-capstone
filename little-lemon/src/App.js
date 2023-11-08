import './App.css';
import Header from "./Header"
import Nav from "./Nav"
import Hero from "./Hero"
import Footer from "./Footer"

function App() {
  return (
    <div>
      <div className="Flex">
        <Header/>
        <Nav/>
      </div>

    <div>
      <Hero/>
    </div>
  </div>
  );
}

export default App;
