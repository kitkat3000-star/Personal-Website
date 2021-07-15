import styled from "styled-components";
import MotionHoc from "./MotionHoc";
import ReactPlayer from "react-player";
import smartpark from '../assets/Media1.mov';
import website from '../assets/Website.mp4';
import portfolio from '../assets/portfolio.mp4';

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
`;

const Container = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 8em;
    left: 5em;
`;

const Card = styled.div`
    background-color:#dbf3fa;
    width: 300px;
    height: 80%;
    border-radius: 10px;
    box-shadow: 0px 0px 15px -8px black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    transition: all 1s ease;
   
    &.featured{
        width: 300px;
        height: 85%;
        margin: 0 30px;
    }
    &:hover{
        transform: scale(1.1);
    }

`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    // img {
    //     cursor: pointer;
    //     height: 140px;
    //     width: 600px;
    //     border-radius: 5%;
    //     object-fit: cover;
    //     margin: 0 30px;
    // }
}
`;

const Center = styled.div`
    padding: 10px;
    border-radius: 10px;
    background-color: rgb(250, 244, 245);

    p{
        font-family: 'Nanum Pen Script', cursive;
        font-size: 22px;
        text-align: center;
    }
`;

const Bottom = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: 'Nanum Pen Script', cursive;

    h3 {
        margin-bottom: 5px;
        font-size: 25px;
        color: #FE7F9C;
    }

    h4{
        font-size: 23px;
        color: rgb(121, 115, 115);
    }
`;


const ProjectsComponent = () => {
    
    const data = [
        {
          id: 1,
          name: "Smart Park",
          title: "Final Year Project",
          video: smartpark,
          desc:
            "SmartPark is a parking management system for establishing efficiency within parking lots. This consists of an OCR system, a mobile app and BLE beacons",
        },
        {
          id: 2,
          name: <a href="https://uxfol.io/himaja.kakade">UI/UX Portfolio</a>,
          title: "Adobe XD screens",
          video: portfolio,
          desc:
            "Check out my UI screens for various projects I made at University. Portfolio created with Figma & uxifolio. LINK BELOW!",
          featured: true,
        },
        {
          id: 3,
          name: "Websites",
          title: "Design & Development",
          video: website,
          desc:
            "Here is a demo video for the websites I created using html, css, xml, js, react, etc.",
        },
      ];

    return (
        <Project>
            <h1>My Projects</h1>
            <Container>
            {data.map((d) => (
                <Card className={d.featured ? "card featured":"card"}>
                    <Top>
                        {/* <img src={d.img} /> */}
                        <ReactPlayer width='600px'
                            height='140px'
                            margin= '0 30px'
                            object-fit='cover'
                            controls
                            url={d.video}
                            />
                    </Top>
                    <Center>
                        <p>{d.desc}</p>
                    </Center>
                    <Bottom>
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </Bottom>
                </Card>
            ))}
            </Container>
            <span>©2021 Himaja Kakade. All Rights Reserved.</span>
        </Project>
    )
}
const Projects = MotionHoc(ProjectsComponent);

export default Projects;
