import { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import { useParams, Link } from 'react-router-dom';
import { Row } from 'reactstrap';

const Searched = ({ inputValue, setInputValue, phones }) => {
    const [searched, setSearched] = useState([]);
    let params = useParams();

    const getSearched = () => {
        if (inputValue.length > 0) {
            setSearched(phones.filter((product) => 
            product.name.toLowerCase().includes(inputValue.toLowerCase())
            ))
        } else {
            setSearched([])
        }
    }

    useEffect(() => {
        getSearched()
        setInputValue('')

    }, [params.search])

    return (
        <div className='container'>
            <Row>
                {searched.map((phone) => {
                    return <CartItem key={phone.id} phone={phone} />;
                })}
            </Row>
        </div>
    )
}

export default Searched;