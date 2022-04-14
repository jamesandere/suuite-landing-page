import styled from 'styled-components';
import {mobile} from '../responsive';

const Navbar = () => {
  return (
    <Container>
        <img className="logo" src={"/assets/logo.svg"} />
        <button>Request Beta Access</button>
    </Container>
  )
}

const Container = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10%;

    ${mobile({
      width: '100vw',
    })}

    span {
        font-weight: 900;
        font-size: 1.5rem;
    }

    button {
        padding: 0.8rem 1rem;
        font-weight: 700;
        border: 1.5px solid #18243C;
        border-radius: 5px;
        background-color: transparent;
        cursor: pointer;

        ${mobile({
          padding: '0.8rem 0.6rem'
        })}
    }
`;

export default Navbar