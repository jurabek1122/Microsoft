import Corusel from '../components/Corusel';
import HomeCard from '../components/HomeCard';

const Home = ({ phones, setActive }) => {
    return (
        <div>
            <Corusel phones={phones} />
            <HomeCard setActive={setActive} />
        </div>
    );
}

export default Home;