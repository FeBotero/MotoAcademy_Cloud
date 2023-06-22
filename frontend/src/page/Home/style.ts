import styled from "styled-components";

export const HomeContainer=styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h1{
    margin-top: 2rem;
    padding: 2rem;
  }

  form{
    display: flex;
    justify-content:center;
    flex-direction: column;
    width: 40%;
    background: gray;
    padding: 2rem;
    border-radius: 0 32px;
    gap: 0.3rem;
    height: 10rem;
  }
  input{
    height: 2rem;
    padding: 0.5rem;
    border-radius: 8px;
  }
  button{
    padding: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
  }

`