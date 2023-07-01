import './App.css';
import Trimmer from "./Pages/Trimmer/Trimmer";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Trimmer/>
            <About/>
        </div>


    );
}

export default App;
