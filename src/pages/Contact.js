import { Row, Col, Button } from 'reactstrap';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';

const Contact = () => {

    return (
        <Row id='contacts'>
            <h1>Aloqa</h1>
            <Col md='6'>
                <input placeholder='name' type='text' className='contactInput' />
                <input placeholder='email' type='email' className='contactInput' />
                <textarea placeholder='your message...' className='contactmessage' />
                <Button color="dark" outline className='sendBtn'>Send</Button>
            </Col>
            <Col md='6' className="contact">
                <div className='social'>
                    <a href='#' target='_blanck'>
                        <FaTelegramPlane className='icon' />
                    </a>
                    <a href='#' target='_blanck'>
                        <BsFacebook className='icon' />
                    </a>
                    <a href='#' target='_blanck'>
                        <BsInstagram className='icon' />
                    </a>
                    <a href='#' target='_blanck'>
                        <AiFillYoutube className='icon' />
                    </a>
                    
                </div>
                <div className='contactInfo'>
                    <MdAlternateEmail /> 
                    <p>makroSoft@gmail.com</p>
                    <BsFillTelephoneFill /> 
                    <p>+998 99 999 99 99</p>
                </div>
            </Col>
        </Row>
    );
}

export default Contact;