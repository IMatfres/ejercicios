import logo from './logo.svg';
import './App.css';
import Clock from './clase456/clock';
// * import ContactAcomponent from './clase123/ContactA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {/* <ContactAcomponent></ContactAcomponent> : clase 123 */}
        <Clock></Clock>
        </p>
      </header>
    </div>
  );
}

export default App;
