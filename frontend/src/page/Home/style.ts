import styled from "styled-components";

export const HomeContainer=styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  form{
    display: flex;
    flex-direction: column;
    width: 40%;
    background: gray;
    padding: 2rem;
    border-radius: 8px;
    gap: 0.3rem;
    height: 10rem;
  }
  input{
    height: 1.5rem;
  }
  button{
    padding: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
  }

`