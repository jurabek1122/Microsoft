import { useEffect } from 'react';
import CartItem from '../components/CartItem';
import { Row } from 'reactstrap';
import ProductsMenu from '../components/ProductsMenu';


const Products = ({ phones, addCart, filtered, setFiltered, active, setActive }) => {


    useEffect(() => {
        const filteredProduct = phones.filter((phone) =>
            phone.type.includes(active)
        )
        setFiltered(filteredProduct);
    }, [active])

    console.log(active)

    return (
        <div className='products'>
            <div className='container'>
                <ProductsMenu 
                    active={active}
                    setActive={setActive}
                />
                <h2>Mahsulotlar</h2>
                <Row>
                    {
                        filtered.map((phone, index) => {
                            return (
                                <CartItem key={index} phone={phone} addCart={addCart} />
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    );
}

export default Products;