import styled from "styled-components";

export const ListContainter=styled.main`
display: flex;
flex-direction: column;
text-align: center;
gap: 1.5rem;


table{
  text-align: center; 
}
thead{
  background: gray;
  color:white
}

tr,td,th{
    padding: 1rem;
    min-width: 8rem;
    border: 1px solid;
    border-collapse: collapse;
}


button{
  cursor: pointer;
  padding: 2px 6px;
  border-radius: 8px;
}
button ~ button{
  margin-left: 0.5rem;
}
`