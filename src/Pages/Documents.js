import styled from "styled-components";
import MotionHoc from "./MotionHoc";
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const Document = styled.div`
    width:100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFD1E0;

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

const File = styled.div`
    position:absolute;
    display: flex;
    top: 150px;
    left: 700px;
`;


const DocumentsComponent = () => {
    return (
        // <Document>
            <h1> My Documents </h1>
        //     <File>
        //         <input type="file" class="form-control" multiple></input>
        //         {/* <Button variant="contained" color="primary" startIcon={<CloudUploadIcon />}>Upload</Button>  */}
        //     </File>
        //     <span>©2021 Himaja Kakade. All Rights Reserved.</span>
        // </Document>
    )
}

const Documents = MotionHoc(DocumentsComponent);

export default Documents;
