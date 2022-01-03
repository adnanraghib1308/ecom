import './App.css';
import Homepage from './pages/Homepage';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import ProductScreen from './pages/ProductScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />      
          <Route path="/product/:id" element={<ProductScreen/>} />      
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
