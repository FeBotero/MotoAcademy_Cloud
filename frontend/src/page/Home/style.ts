import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ContentLogin = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;

h1{
    margin-top: 2rem;
    padding: 2rem;
  }

  form{
    display: flex;
    justify-content:center;
    flex-direction: column;   
    padding: 2rem;
    gap: 0.3rem;
  }
  input{
    height: 3rem;
    padding: 0.5rem;
    width: 30vw;
    border: 1px solid black;
    background: white;
  }
  input:focus{
    outline: 0;
    border: 1px solid #92bdca;
    background: #e4f2f7;
  }

  button{
    padding: 0.5rem;
    background:#1C1C1C ;
    width: 30vw;
    height: 3rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
  }
  button:hover{
    opacity: 0.7;
    
  }
`
export const ContentBrand = styled.div`
  background: #363636;
  height: 100vh;
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;


  img{
    height: 10rem;
  }
`