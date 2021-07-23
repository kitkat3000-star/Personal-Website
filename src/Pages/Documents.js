import React from "react";
import styled from "styled-components";
import MotionHoc from "./MotionHoc";
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Resume from "../assets/Himaja Kakade CV1.pdf";


const Document = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        position:absolute;
        top: 0.5em;
        left:10em;
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

const useStyles = makeStyles({
    root: {
      maxWidth: 280,
      position: "absolute",
      top:190,
      left: 1100,
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
    root1: {
        maxWidth: 280,
        position: "absolute",
        top:190,
        right: 250,
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
      },
    media: {
      height: 130,
    },
    button:{
        left: 90,
        bottom: 8,
        width: 90,
        fontFamily:"'Nanum Pen Script', cursive",
        fontSize: 19,
    },
    heading: {
    fontFamily:"'Amatic SC', cursive",
    fontSize: 38
      },
    para: {
    fontFamily:"'Nanum Pen Script', cursive",
    fontSize: 20
      },
 } );

const DocumentsComponent = () => {
    const classes = useStyles();
    return (
        <div>
            <Document>
                <h1> My Documents </h1>
                <span>©2021 Himaja Kakade. All Rights Reserved.</span>
            </Document>
            
            <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://nz.hudson.com/wp-content/cache/bb-plugin/cache/resume-examples-1024x731-landscape.png"
                        title="My resume"
                        />
                        <CardContent>
                        <Typography className={classes.heading} gutterBottom variant="h5" component="h2" align="center" fontStyle='italic'>
                         Resume
                        </Typography>
                        <Typography className={classes.para} variant="body2" color="textSecondary" component="p" align="center">
                            My resume for Software/UI-UX developer
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" variant="contained" color="primary" className={classes.button} href={Resume}>
                            View
                        </Button>
                    </CardActions>
            </Card>
            <div>
                <img src="https://i.pinimg.com/originals/0e/47/72/0e47720e157806d45d45c736fb2fa920.gif" position="absolute" width="55.5%" height="720px"/>
            </div>
        </div>
    )
}

const Documents = MotionHoc(DocumentsComponent);

export default Documents;
