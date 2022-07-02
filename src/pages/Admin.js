import { useState } from 'react'
import AddProduct from '../components/AddProduct';
import Clients from '../components/Clients';

const Admin = ({ clientId, setClientId, getPhones, phones, clients, setPhones, getClients}) => {

  const [toggle, setToggle] = useState(true)

  return (
    <div className='container'>
      <div className='d-f'>
        <button onClick={() => setToggle(true)} className='btn btn-info mx-3'>Mahsulotlar</button>
        <button onClick={() => setToggle(false)} className='btn btn-info mx-3'>Mijozlar</button>
      </div>
      {
        toggle ? (
          <AddProduct getPhones={getPhones} phones={phones} setPhones={setPhones} />
        ) : ( 
            <Clients clientId={clientId} setClientId={setClientId} getClients={getClients} clients={clients} />
        )
      }
    </div>
  )
}

export default Admin;