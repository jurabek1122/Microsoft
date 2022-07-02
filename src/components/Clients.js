import { useState } from 'react';
import ClientDataServices from '../sevices/client-service';
import { Form, InputGroup, Button, ButtonGroup, Alert, Table } from "react-bootstrap";
import { BsPencilSquare } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';



const Clients = ({ clientId, setClientId, getClients, clients }) => {

    const [state, setState] = useState(true)
    const deleteHandler = async (id) => {
        await ClientDataServices.deleteClient(id);
        getClients();
        };
    
        const getClientId = (id) => {
        setClientId(id);
        };

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Mijoz</th>
                    <th>Buyurtma</th>
                    <th>Narxi</th>
                    <th>Manzili</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {clients.map((doc, index) => {
                    return (
                    <tr key={doc.id} className={ state ? '' : 'done'}>
                        <td>{index + 1}</td>
                        <td>{doc.mijoz}</td>
                        <td>{
                                doc.buyurtma.map((item) => {
                                    return (
                                        <p>{item.name}</p>
                                    )
                                })
                            }</td>
                        <td>{doc.narxi}</td>
                        <td>{doc.manzil}</td>
                        <td>
                        <Button
                            variant="secondary"
                            className="edit"
                            onClick={() => setState(!state)}
                        >
                            <BsPencilSquare />
                        </Button>
                        <Button
                            variant="danger"
                            className="delete"
                            onClick={(e) => deleteHandler(doc.id)}
                        >
                            <RiDeleteBin5Line />
                        </Button>
                        </td>
                    </tr>
                    );
                })}
                </tbody>
            </Table>
        </div>
    )
}

export default Clients;