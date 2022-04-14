import styled from 'styled-components';
import {mobile} from '../responsive';

const Footer = () => {
  return (
    <Container>
        <img className="logo" src={"/assets/logo.svg"} />
        <p class="p-footer">Copyright - Suite</p>
        <ul className="icons">
            <li className="icon">
                <img src={"/assets/icon-facebook.svg"} />
            </li>
            <li className="icon">
                <img src={"/assets/icon-twitter.svg"} />
            </li>
            <li className="icon">
                <img src={"/assets/icon-instagram.svg"} />
            </li>
        </ul>
    </Container>
  )
}

const Container = styled.div`
    height: 50vh;
    background: hsl(30, 33%, 93%);
    padding: 4% 10%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 80px;

    ${mobile({
        flexDirection: 'column',
        width: '100vw',
        alignItems: 'center',
        height: 'auto',
    })}

    .logo {
        height: 30px;

        ${mobile({
            marginTop: '160px',
            marginBottom: '30px',
            height: '26px'
        })}
    }

    .icons {
        list-style: none;
        display: flex;
        align-items: center;

        ${mobile({
            marginTop: '30px',
        })}
    }

    .icon {
        margin-left: 20px;
        cursor: pointer;
    }

    .p-footer {
        font-weight: 500;
    }
`;

export default Footer