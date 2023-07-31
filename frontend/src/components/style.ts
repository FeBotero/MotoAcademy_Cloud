import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  background-color: #363636;
  height: 5rem;
  align-items: center;
  padding-inline: 1rem;

  img{
    width: 10rem;
  }
  button{
    background: #C0C0C0;
    font-size: larger;
    padding: 3px 6px;
    border-radius: 8px;
    border: 0;
  }
  button:hover{
    background:#4F4F4F;
    color: white;
    cursor: pointer;
  }
`