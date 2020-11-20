import { Link } from 'react-router-dom';
import {StyledP} from './home.style';

export const Home = () => {

    return (    <>
        Home
        <StyledP>asdas</StyledP>
        <Link to="/about">About Us</Link> 
        </>
    )

}