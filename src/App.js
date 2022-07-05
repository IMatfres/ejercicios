//import logo from './logo.svg';
import './App.css';
//import Clock from './clase456/clock';
import ContactListComponent from './clase789/contact_list';
// * import ContactAcomponent from './clase123/ContactA';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
       <ContactAcomponent></ContactAcomponent>
        <Clock></Clock>
        </p>
      </header> */}
      <ContactListComponent></ContactListComponent>
    </div>
  );
}

export default App;
