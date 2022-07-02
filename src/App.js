import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Admin from './pages/Admin';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import ShoppingCard from './pages/ShoppingCard';
import Products from './pages/Products';
import Searched from './pages/Searched';
import ProductCard from './pages/ProductCard';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PhoneDataServices from './sevices/phone-service';
import ClientDataServices from './sevices/client-service';

const App = () => {

  const [phones, setPhones] = useState([]);
  const [clients, setClients] = useState([]);
  const [clientId, setClientId] = useState("");
  const [card, setCard] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState('phone');
  const [onlypromo, setOnlypromo] = useState(0)
  const [afterPromoSum, setAfterPromoSum] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const addCart = (item) => {
    const productList = [...card];
    if(!productList.includes(item)){
      productList.push(item);
      const index = productList.indexOf(item);
      productList[index].quantity++;
    }
    setCard(productList)
  }

  useEffect(() => {
    getPhones();
    getClients();
    }, []);

  const getPhones = async () => {
    const data = await PhoneDataServices.getAllPhones();
    const data1 = data?.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      setPhones(data1)
    };

  const getClients = async () => {
    const data = await ClientDataServices.getAllClients();
    const data1 = data?.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      setClients(data1)
    };

    console.log('clients', clients)

  return (
    <div className="App">
      <Router>
        <Navbar card={card} inputValue={inputValue} setInputValue={setInputValue} />
        <Routes>
          <Route path="/" element={<Home phones={phones} setActive={setActive} />} />
          <Route path="/product/:id" element={<ProductCard phones={phones} addCart={addCart} />} />
          <Route path="/products" element={<Products 
            phones={phones} 
            addCart={addCart} 
            filtered={filtered}
            setFiltered={setFiltered}
            active={active}
            setActive={setActive}
          />} />
          <Route path="/card" element={<ShoppingCard 
            card={card} 
            setCard={setCard}
            onlypromo={onlypromo}
            setOnlypromo={setOnlypromo}
            afterPromoSum={afterPromoSum}
            setAfterPromoSum={setAfterPromoSum}
          />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/searched/:search" element={<Searched phones={phones} inputValue={inputValue} setInputValue={setInputValue} />} />
          <Route path="/payment" element={<Payment 
            card={card} 
            setCard={setCard}
            onlypromo={onlypromo}
            afterPromoSum={afterPromoSum}
            clients={clients}
            setClients={setClients}
            getClients={getClients}
            clientId={clientId}
            setClientId={setClientId}
          />} />
          <Route path="/admin" element={<Admin setClientId={setClientId} clientId={clientId} clients={clients} getClients={getClients} getPhones={getPhones} phones={phones} setPhones={setPhones} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
