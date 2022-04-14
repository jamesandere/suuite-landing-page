import styled from 'styled-components';
import {mobile} from '../responsive';

const Welcome = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return (
    <Container>
        <div className="left">
            
            <div className="deets">
            <img class="line" src={"/assets/pattern-curved-line-1.svg"} />
              <h2><span>A <b>super solution</b></span>
              <span>for your <b>business.</b></span> </h2>
              <p>Our marketing and sales automations help you scale your outreach to
            get more leads for your company.</p>
            <button>Request Beta Access</button>
            </div>
            <img className="phone" src={isMobile ? "/assets/image-hero-landscape@2x.png":"/assets/image-hero-portrait@2x.png"} />
        </div>
        <div className="right">
          <ul>
            <li>
              <h2>2K+</h2>
              <p>Companies</p>
            </li>
            <li>
              <h2>8</h2>
              <p>Languages</p>
            </li>
            <li>
              <h2>1.2M</h2>
              <p>Leads</p>
            </li>
          </ul>
        </div>
    </Container>
  )
}

const Container = styled.div`
display: flex;
height: 70vh;
padding: 0 10%;
background-color: transparent;

${mobile({
  flexDirection: 'column',
  width: '100vw',
  height: 'auto',
})}

.left {
    flex: 3.5;
    position: relative;
    width: 100%;
    position: relative;
    ${mobile({
  flexDirection: 'column',
})}
}

.phone {
  position: absolute;
  top: 0;
  right: 14%;
  /* width: 100%; */
  height: 100%;
  object-fit: contain;

  ${mobile({
  position: 'relative',
  // height: '100%',
  width: '100%',
  marginTop: '3rem',
  right: '0'
})}
}

.line {
  position: relative;
  top: -20px;
  width: 30%;
  /* right: 40%; */
  left: 32%;
  object-fit: contain;
  
  ${mobile({
    top: 0,
  textAlign: 'end',
  marginBottom: '10px',
  })}
}

.deets {
  position: absolute;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  z-index: 3;
  top: 16%;

  ${mobile({
  position: 'relative',
})}
}

.deets h2 {
  font-size: 4rem;
  font-weight: 400;

  
}

.deets span {
  display: block;
  line-height: 3.8rem;

  ${mobile({
    fontSize: '2.2rem',
    lineHeight: '2.4rem',
  })}
}

.deets p {
  width: 46%;
  margin-top: 30px;
  letter-spacing: 1px;
  line-height: 1.5rem;

  ${mobile({
    width: '100%',
    letterSpacing: 0
  })}
}

.deets button {
  width: 200px;
  padding: 0.8rem 1rem;
  font-weight: 700;
  background-color: #18243C;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 2rem 0;
  cursor: pointer;

  ${mobile({
    padding: '1rem 0.6rem',
    margin: '1rem 0',
  })}
}

.right {
    flex: 1;
    display: flex;
    align-items: center;

    ${mobile({
      justifyContent: 'center',
      marginTop: '40px',
      marginBottom: '60px',
    })}
}

ul {
  list-style: none;
}

li {
  margin: 2rem 0;
}

li h2 {
  font-size: 2rem;
  font-weight: 900;
}

li p {
  text-transform: uppercase;
  margin-top: 4px;
  font-size: 0.9rem;
  letter-spacing: 1px;
}
`;

export default Welcome