
import Weather from './Dashboard';
import Nav from './Navbar'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Weather /> */}
      <BrowserRouter>
      <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;
