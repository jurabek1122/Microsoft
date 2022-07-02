import { Card, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';


const CartItem = ({ phone, addCart }) => {

    return (
        <Col md="4">
                <div className="phone-card">
                    <Card className="card">
                        <Link to={'/product/' + phone.id} className='product-link'>
                        <div className='card-img'>
                            <img src={phone.img} />
                        </div>
                        </Link>
                        <span className='card-name'>{phone.name}</span>
                        <span className='card-narxi'>{phone.narxi}</span>
                        <button className='card-btn' onClick={() => addCart(phone)}><HiOutlineShoppingCart /> Savatchaga</button>
                    </Card>
                </div>
        </Col>
    );
}

export default CartItem;