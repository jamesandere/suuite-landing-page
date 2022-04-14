import styled from 'styled-components';
import {mobile} from '../responsive';

const Testimonial = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return (
    <Container>
        <div className="left">
            <img src={isMobile ? "/assets/image-jeremy-small.png" :"/assets/image-jeremy-large.png"} />
        </div>
        <div className="center">
            <img src={"/assets/pattern-curved-line-2.svg"} />
        </div>
        <div className="right">
            <h3>It just <b>works.</b></h3>
            <p className="parag"> “I really like how it is an all-in-one solution that handle many of
            the tasks that you would normally need separate tools to do the same
            job. This thing is a miracle worker.”</p>
            <p className="name">Jeremy Robinson</p>
          <p className="jd">CMO. FYLO</p>
        </div>
    </Container>
  )
}

const Container = styled.div`
    background-color: #18243C;
    height: 80vh;
    display: flex;
    color: #fff;
    border-radius: 10px;
    margin: 0 10%;
    margin-top: 0rem;
    position: relative;
    top: 220px;

    ${mobile({
        flexDirection: 'column',
        minHeight: '100vh',
        margin: '0',
        width: '100vw',
        padding: '20px 20px'
    })}

    .left {
        /* height: 100%; */
        flex:1;
        display: flex;
        justify-content: flex-end;
        position: relative;
        padding: 0 1%;

        ${mobile({
            justifyContent: 'center',
        })}
    }

    .left img {
        /* height: 100%; */
        /* object-fit: contain; */
        position: absolute;
        margin-top: -30px;
        bottom: 0;

        ${mobile({
            // height: '100%',
            // marginTop: '-10px',
            transform: 'scale(0.9)',
        })}
    }

    .center {
        width: 4%;
        position: relative;

        ${mobile({
            justifyContent: 'center',
            width: '100%',
        })}
    }

    .center img {
        position: absolute;
        top: 30%;
        left: 0;

        ${mobile({
            top: '0',
            position: 'relative',
            display: 'block',
            margin: '1rem auto',
        })}
    }

    .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* padding: 0 20%; */
        padding-left: 6%;

        ${mobile({
            textAlign: 'center',
        })}
    }

    .right h3 {
        font-weight: 400;
        font-size: 2rem;
        margin-bottom: 40px;

        ${mobile({
            marginTop: '30px',
            fontSize: '1.8rem',
        })}
    }

    .parag {
        line-height: 1.8rem;
        letter-spacing: 1px;
        margin-bottom: 30px;
        width: 70%;

        ${mobile({
            width: '100%',
            fontSize: '0.9rem',
        })}
    }

    .name {
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 8px;

        ${mobile({
            fontSize: '0.9rem',
            letterSpacing: '1px',
        })}
    }

    .jd {
        ${mobile({
            fontSize: '0.9rem',
            letterSpacing: '1px',
        })}
    }
`;

export default Testimonial