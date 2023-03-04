import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Bannerspage from './Component/Bannerspage';
import Productpage from './Component/Productpage';
import Filter from './Component/Filter';
import Cart from './Component/Cart';
import Tabs from './Component/Tabs'
import Supplier from './Component/Supplier'; // import the Supplier component
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
        
          <Route path='' element={
            <>             
              <Tabs />
              <Bannerspage />
              <div className='mainpage'>
                <Filter />
                <Productpage />
              </div>
              <Footer />
            </>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/supplier" element={<Supplier />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
