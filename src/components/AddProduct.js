import { useState, useEffect } from 'react';
import { Form, InputGroup, Button, ButtonGroup, Alert, Table } from "react-bootstrap";
import PhoneDataServices from '../sevices/phone-service';
import { BsPencilSquare } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';

const AddProduct = ({ getPhones, phones, setPhones }) => {

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [narxi, setNarxi] = useState();
    const [skidka, setSkidka] = useState("");
    const [skidka_narxi, setSkidka_narxi] = useState();
    const [type, setType] = useState("");
    const [img, setImg] = useState("");
    const [flag, setFlag] = useState(true);
    const [message, setMessage] = useState({ error: false, msg: "" });
    const [phoneId, setPhoneId] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [soni, setSoni] = useState(0);


    const deleteHandler = async (id) => {
    await PhoneDataServices.deletePhone(id);
    getPhones();
    };

    const getPhoneId = (id) => {
    setPhoneId(id);
    };

    const handlerSubmit = async(e) => {
        e.preventDefault();
        setMessage("")
        if (name === "" || narxi === "") {
            setMessage({ error: true, msg: "All fields are mandatory!"})
            return;
        }
        const newPhone = {
            name,
            narxi, 
            company,
            soni,
            img,
            skidka,
            skidka_narxi,
            type,
            quantity
        }

        try {
            if (phoneId !== undefined && phoneId !== "") {
                await PhoneDataServices.updatePhone(phoneId, newPhone)
                setMessage({error: false, msg: "Updated Succesfully"})
                setPhoneId("")
            } else {
                await PhoneDataServices.addPhones(newPhone)
                setMessage({error: false, msg: "New Phone Added Succesfully"})
            }
           
        } catch (err) {
            setMessage({ error: true, msg: err.message })
        }

        setName("")
        setNarxi("")
        setType("")
        setSkidka("")
        setSkidka_narxi("")
        setImg("")
        setCompany("")
        setSoni("")
    }

    const editHandler = async () => {
        setMessage("")
        try {
            const docSnap = await PhoneDataServices.getPhone(phoneId)
            setName(docSnap.data().name)
            setCompany(docSnap.data().company)
            setNarxi(docSnap.data().narxi)
            setSoni(docSnap.data().soni)
            setSkidka(docSnap.data().skidka)
            setImg(docSnap.data().img)
            setSkidka_narxi(docSnap.data().skidka_narxi)
            setType(docSnap.data().type)
        } catch (err) {
            setMessage({ error: true, msg: err.message})
        }
    }

    useEffect(() => {
        if(phoneId !== undefined && phoneId !== "") {
            editHandler();
        }
    }, [phoneId])

    const getPhoneIdHandler = (id) => {
        setPhoneId(id)
    }
  
  return (
    <div className='container'>
      <div className="p-4 box">

      {message?.msg && (
        <Alert 
        variant={message?.error ? "danger" : "success"} 
        dismissible 
        onClose={() => setMessage("")}>
            {message?.msg}
        </Alert>
        )}

        <Form onSubmit={handlerSubmit}>
          <Form.Group className="mb-3" controlId="formPhoneName">
            <InputGroup>
              <InputGroup.Text id="formPhoneName">M</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Mahsulot nomi"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhoneCompany">
            <InputGroup>
              <InputGroup.Text id="formPhoneCompany">M</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Ishlab chiqaruvchi"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhonePrice">
            <InputGroup>
              <InputGroup.Text id="formPhonePrice">M</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Mahsulot Narxi"
                value={narxi}
                onChange={(e) => setNarxi(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhoneSoni">
            <InputGroup>
              <InputGroup.Text id="formPhoneSoni">M</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Mahsulot miqdori"
                value={soni}
                onChange={(e) => setSoni(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhoneImg">
            <InputGroup>
              <InputGroup.Text id="formPhoneImg">M</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="mahsulot rasmi"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhoneDiscout">
            <InputGroup>
              <InputGroup.Text id="formPhoneDiscout">M</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Chegirma holati  true or false"
                value={skidka}
                onChange={(e) => setSkidka(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhoneDiscountPrice">
            <InputGroup>
              <InputGroup.Text id="formPhoneDiscountPrice">M</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Mahsulotning chegirmadagi narxi"
                value={skidka_narxi}
                onChange={(e) => setSkidka_narxi(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhoneType">
            <InputGroup>
              <InputGroup.Text id="formPhoneType">M</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Mahsulot turi"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Qo`shish/ Yangilash
            </Button>
          </div>
        </Form>
      </div>

      <div className="mb-2">
        <Button variant="dark edit" onClick={getPhones}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(phones, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Mahsulot nnomi</th>
            <th>Mahsulot narxi</th>
            <th>Chegirma</th>
            <th>Chegirma narxi</th>
            <th>Soni</th>
            <th>Amallar</th>
          </tr>
        </thead>
        <tbody>
          {phones.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.name}</td>
                <td>{doc.narxi}</td>
                <td>{doc.skidka}</td>
                <td>{doc.skidka_narxi}</td>
                <td>{doc.soni}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getPhoneId(doc.id)}
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
  );
};

export default AddProduct;