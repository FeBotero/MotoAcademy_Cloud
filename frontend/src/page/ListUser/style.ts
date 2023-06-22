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
    border: 1px solid;
    border-collapse: collapse;
}


button{
  cursor: pointer;
}
`