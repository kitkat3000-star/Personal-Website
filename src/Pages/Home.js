import { init } from "ityped";
import styled from "styled-components";
import MotionHoc from "./MotionHoc";
import { useEffect, useRef } from "react";
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const Intro = styled.div`
    display:flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content:center;
    background-image:url('https://i.pinimg.com/originals/5d/ab/4d/5dab4d5e50156cb929c1b1946085bdde.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
    p{
        position: absolute;
        bottom:0;
        left:54.3em;
        color: #24305E;
        font-size: 13px;
    }
`;

const Left = styled.div`
    flex:0.5;
`;

const Right = styled.div`
    flex:0.5;
    position: relative;
    overflow: hidden;
`;

const ImageContainer = styled.div`
    width: 600px;
    height: 600px;
    background-color: pink;
    margin-top: 50px;
    border-radius:50%;
    margin-bottom: 50px;
    margin-left: 70px;
    background-image: url('https://i.pinimg.com/originals/86/80/5a/86805ab550586369a6d2e9c6a8823c97.gif');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
`;

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding-left: column;
    display: flex;
    margin-left: 120px;
    flex-direction: column;
    justify-content: center;
    color: black;
    font-family: 'Amatic SC', cursive;

    h1{
        font-size: 100px;
        margin: 10px 0;
    }
    h2{
        font-size: 50px;
        color: white;
    }
    h3{
        font-size: 40px;
        
        span{
            font-size: inherit;
            color: white;
        }

        .ityped-cursor{
            animation: blink 1s infinite;
        }

        @keyframes blink{
            50%{
                opacity: 1;
            }

            100%{
                opacity: 0;
            }
        }
    }
`;

const Social = styled.div`
    position: fixed;
    bottom: 10px;
    right:10px;
    padding-right:1rem;
    cursor:pointer;
`;

const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

const HomeComponent = () => {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Developer', 'UI/UX Designer','Software Engineer' ] })
    },[])

    return (
        
        <Intro>
           <Left>
                <Wrapper>
                    <h2>Hi There, I'm</h2>
                    <h1>Himaja Kakade</h1>
                    <h3>Aspiring &nbsp;<span ref={textRef}></span></h3>
                </Wrapper>       
           </Left>
           <Right>
                <ImageContainer>
                </ImageContainer>
            
                <Social>
                    <a href="https://www.linkedin.com/in/himaja-k-617897188/"><LinkedInIcon style={{ color: "#24305E" }}/></a> &nbsp;
                    <Mailto email="himaja.kakade@gmail.com" subject="Message"><EmailIcon style={{ color: "#24305E" }}/></Mailto> &nbsp;
                    <a href="https://www.github.com/kitkat3000-star"><GitHubIcon style={{ color: "#24305E" }}/></a>
                </Social>
               
           </Right>
                <p>©2021 Himaja Kakade. All Rights Reserved.</p>
        </Intro>
    )
}

const Home = MotionHoc(HomeComponent);

export default Home;