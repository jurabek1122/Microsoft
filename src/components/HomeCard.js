import { Grid } from '@material-ui/core';
import phones from '../img/phones.png';
import kompyuter from '../img/kompyuter.jpg';
import maishiy from '../img/maishiy.jpg';
import aksessuar from '../img/aksessuar.jpg';
import { Link } from 'react-router-dom';


const HomeCard = ({ setActive }) => {
    return (
        <div className='home-card container'>
            <h1>Bizning Mahsulotlarimiz</h1>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item md={6} xs={12} className='home-card-item' onClick={() => setActive('phone')}>
                    <Link to='products'>
                    <img src={phones} />  
                    <h3>Telefonlar</h3>  
                    </Link>
                </Grid>
                <Grid item md={6} xs={12} className='home-card-item' onClick={() => setActive('laptop')}>
                    <Link to='/products'>
                    <img src={kompyuter} />
                    <h3>Kompyuterlar</h3> 
                    </Link>
                </Grid>
                <Grid item md={6} xs={12} className='home-card-item' onClick={() => setActive('maishiy')}>
                    <Link to='/products'>
                    <img src={maishiy} />
                    <h3>Maishiy Texnikalar</h3> 
                    </Link>
                </Grid>
                <Grid item md={6} xs={12} className='home-card-item' onClick={() => setActive('aksessuar')}>
                    <Link to='/products'>
                    <img src={aksessuar} />
                    <h3>Aksessuarlar</h3> 
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomeCard;    