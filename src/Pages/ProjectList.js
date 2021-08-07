import styled from "styled-components";

const Projectlist = styled.li`
    font-size:25px;
    margin-right: 50px;
    padding: 7px;
    border-radius: 10px;
    cursor: pointer;
    font-family: 'Nanum Pen Script', cursive;

    &.active{
       background-color: #24305E;
        color: white;
    }
`;

export default function ProjectList({title, active, setSelected, id}) {
    return (
        <Projectlist 
        className={active ? "ProjectList active" : "ProjectList"}
        onClick={()=> setSelected(id)}>
            {title}
        </Projectlist>
    )
}
