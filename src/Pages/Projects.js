import styled from "styled-components";
import MotionHoc from "./MotionHoc";
import { useState } from "react";
import { useEffect } from "react";
import ProjectList from "./ProjectList";
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio } from "../extras/data";


const Project = styled.div`
    width:100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFD1E0;

    h1{
        position:absolute;
        top: 0.5em;
        left:10.45em;
        color: #24305E;
        font-family: 'Amatic SC', cursive;
        font-size: 70px;
    }

    span{
        position: absolute;
        bottom:0;
        left:54.3em;
        color: #24305E;
        font-size: 13px;
    }

    ul{
        margin-top: 160px;
        padding: 0;
        list-style: none;
        display: flex;
        margin-left: 13em;  

    }

    span{
        position: absolute;
        bottom:0;
        left:54.3em;
        color: #24305E;
        font-size: 13px;
    }
`;

const Container = styled.div`
    width: 60%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: absolute;
    top: 13.5em;
    left: 22.75em;
    background-color: white;
    border-radius: 20px;
`;

const Item = styled.div`
    width: 220px;
    height:150px;
    border-radius: 20px;
    border: 1px solid lightgrey;
    margin: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: all 0.5s ease;
    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
        border-radius: 20px;
    }

    &:hover{
        background-color: #24305E;
        img{
            opacity: 0.2;
            z-index: 0; 
        }
    }

    h3{
        position: absolute;
        font-size: 15px;
    }
`;


const ProjectsComponent = () => {
    const [selected, setSelected] =  useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
          },
          {
            id: "mobile",
            title: "Mobile App",
          },
          {
            id: "web",
            title: "Web App",
        },
        {
            id: "design",
            title: "Designing",
        },
    ]

    useEffect(() => {
        switch(selected){
            case "featured": 
                setData(featuredPortfolio);
                break;
            case "web": 
                setData(webPortfolio);
                break;
            case "mobile": 
                setData(mobilePortfolio);
                break;
            case "design": 
                setData(designPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected])

    return (
        <Project>
            <h1>My Projects</h1>
            <ul>
                {list.map((item) =>(
                    <ProjectList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id= {item.id} />
                ))}
            </ul>
            <Container>
                {data.map((d) => (
                <Item>
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </Item>
                ))}
            </Container>
            <span>©2021 Himaja Kakade. All Rights Reserved.</span>
        </Project>
    )
}
const Projects = MotionHoc(ProjectsComponent);

export default Projects;
