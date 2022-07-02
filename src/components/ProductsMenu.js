import { Grid } from '@material-ui/core';
import { BsPhone } from 'react-icons/bs';
import { FaHeadphonesAlt } from 'react-icons/fa';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
import { MdOutlineLaptopChromebook } from 'react-icons/md';

const ProductsMenu = ({ active, setActive }) => {

    return (
        <div className='products-menu container'>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item md={3} onClick={() => setActive('phone')} className={active === 'phone' ? 'active' : '' } >
                    <BsPhone />
                    <h6>Telefonlar</h6>
                </Grid>
                <Grid item md={3} onClick={() => setActive('maishiy')} className={active === 'maishiy' ? 'active' : ''} >
                    <CgSmartHomeRefrigerator />
                    <h6>Maishiy Texnikalar</h6>
                </Grid>
                <Grid item md={3} onClick={() => setActive('laptop')} className={active === 'laptop' ? 'active' : ''} >
                    <MdOutlineLaptopChromebook />
                    <h6>Kompyuterlar</h6>
                </Grid>
                <Grid item md={3} onClick={() => setActive('aksessuar')} className={active === 'aksessuar' ? 'active' : ''} >
                    <FaHeadphonesAlt />
                    <h6>Aksessuarlar</h6>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductsMenu;