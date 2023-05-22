import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import TextComp from './components/TextComp';
function App() {
  return (
    <>
      <Navbar title="Data-Comparision" aboutText="Please define it correctly" />
      <div className="container">
        <div class="row">
          <div class="col">
            <Textform />
          </div>
          <div class="col">
            <TextComp />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
