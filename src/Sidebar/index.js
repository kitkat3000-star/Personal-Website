import React, { useState } from 'react';
import styled from 'styled-components';
import logo from "../assets/logo.svg"
import Home from "../assets/home-solid.svg"
import Skills from "../assets/important.svg"
import Projects from "../assets/starred.svg"
import Documents from "../assets/draft.svg"
import { NavLink } from 'react-router-dom';

const Container = styled.div`
    position: fixed;
    margin-top: 20px;
    transition: all 1s ease;

    .active{
        border-right: 4px solid white;
        
        img{
            filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
        }
    }
`;

const Button1 = styled.button`
    
    background-color: #24305E;
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin: 0.5rem 0 0 0.5rem;
    cursor: pointer;

    display:flex;
    justify-content:center;
    align-items: center;
    position:relative;

    &::before,
    &::after{
        content:"";
        background-color:var(--white);
        height:2px;
        width:1rem;
        position:absolute;
        transition:all 0.3s ease;
    }

    &::before{
       top: ${(props) => (props.clicked ? "1.5" : "1rem")};
       transform:${(props) => (props.clicked? "rotate(135deg)":"rotate(0)")};
    }
    
    &::after{
        top:${(props) => (props.clicked ? "1.2" : "1.5rem")};
        transform:${(props) => (props.clicked? "rotate(-135deg)":"rotate(0)")};
     }
`;

const SidebarContainer = styled.div`
    background-color: #24305E;
    width: 3.5rem;
    height: 80vh;
    margin-top: 1rem;
    border-radius: 0 30px 30px 0;
    padding:1rem 0;

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    position: relative;
`;

const Logo = styled.div`
    width: 2rem;

    img{
        width:100%;
        height: auto;
    }

`;

const Slickbar = styled.ul`
    color: white;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #24305E;

    padding: 1rem 0;

    position: absolute;
    top: 6rem;
    left: 0;

    width:${(props) => (props.clicked ? "12rem" : "3.5rem")};
    transition: all 0.5s ease;
    border-radius: 0 30px 30px 0;
   
`;

const Item = styled(NavLink)`
    color: white;
    text-decoration: none;
    width:100%;
    padding: 1rem 0;
    cursor: pointer;

    display: flex;
    padding-left: 1rem;

    &:hover{
        border-right: 4px solid var(--white);

        img{
            filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
        }
    }
    
    img{
        width: 1.2rem;
        height: auto;
        filter: invert(74%) sepia(10%) saturate(316%) hue-rotate(162deg) brightness(92%) contrast(97%);
    }

`;

const Text = styled.span`
    width: ${(props) => (props.clicked ? "100%" :"0")};
    overflow: hidden;
    margin-left: ${(props) => (props.clicked ? "1.5rem" :"0")};
    transition: all 0.3s ease;
    font-family: 'Amatic SC', cursive;
    font-size: 22px;
`;

const Profile = styled.div`
    width: ${(props) => (props.clicked ? "12rem" : "3rem")};
    height: 3rem;

    padding: 0.5rem 1rem;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${(props) => (props.clicked? "11rem" : "-0.25rem")};

    background-color: #24305E;
    color: white;

    transition: all 0.3s ease;

    img{
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        cursor: pointer;

        &:hover{
            border:2px solid var(--grey);
            padding:2px;
        }
    }
`;

const Details = styled.div`
    display: ${(props) => (props.clicked ? "flex" : "none")};
    justify-content: space-between;
    align-items: center;
`;

const Name = styled.div`
    padding: 0 1.5rem;

    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    h4{
        display: inline-block;
    }

    a{
        font-size: 0.8rem;
        text-decoration: none;
        color: grey;
    }

    &:hover{
        text-decoration: underline;
    }
`;

const Sidebar = () => {
   
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    const [profileClick, setProfileClick] = useState(false);
    const handleProfileClick = () => setProfileClick(!profileClick);

    return (
        <Container>
    
            <Button1 clicked={click} onClick={() => handleClick()}></Button1>
            <SidebarContainer>
           
                <Logo>
                    {/* <img src={logo} alt="logo" /> */}
                </Logo>
                
                <Slickbar clicked={click}>
            
                    <Item onClick={() => setClick(false)} exact activeClassName="active" to="/Personal_Website">
                        <img src={Home} alt="Home"  />
                        <Text clicked={click}>Home</Text>
                    </Item>
                    <Item onClick={() => setClick(false)} activeClassName="active" to="/Personal_Website/skills">
                        <img src={Skills} alt="Skills" />
                        <Text clicked={click}>Skills</Text>
                    </Item>
                    <Item onClick={() => setClick(false)} activeClassName="active" to="/Personal_Website/projects">
                        <img src={Projects} alt="Projects"  />
                        <Text clicked={click}>Projects</Text>
                    </Item>
                    <Item onClick={() => setClick(false)} activeClassName="active" to="/Personal_Website/documents">
                        <img src={Documents} alt="Documents"  />
                        <Text clicked={click}>Documents</Text>
                    </Item>
                    <Item onClick={() => setClick(false)} activeClassName="active" to="/Personal_Website/interests">
                        <img src="http://simpleicon.com/wp-content/uploads/heart1.png" style={{ width: "22px", height: "22px" }} alt="Interests"/>
                        <Text clicked={click}>Interests</Text>
                    </Item>
                </Slickbar>

                <Profile clicked={profileClick}>
                    <img onClick={() => handleProfileClick()} src="https://picsum.photos/200" alt="profile" />
                    <Details clicked={profileClick}>
                        <Name>
                            Himaja&nbsp;Kakade
                        </Name>
                    </Details>
                </Profile>
        
            </SidebarContainer>
        </Container>

    )
}

export default Sidebar;