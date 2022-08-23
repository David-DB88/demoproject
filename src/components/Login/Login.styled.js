import styled from "styled-components";

const StyledLogin = styled.div`
  height: 100vh;
  font-family: 'open sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: radial-gradient(465.55px at 50% 43.61%, rgba(32, 32, 32, 0.93) 0%, #1F1F1F 100%);

  .MuiFormHelperText-root{
    color: #f44336;
  }
  
  .MuiInputBase-root{
    color: #f2eeeb;
    font-size: 1.5rem;
  }
  .MuiInput-underline:after {
    border-bottom: 1px solid #f2eeeb;
  }

  .MuiFormLabel-root {
    color: #17b3a3;
  }

  .MuiInputLabel-animated {
    transition: color 500ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 500ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  }

  .MuiFormLabel-root.Mui-focused{
    color: #f2eeeb;
  }

  .MuiButton-root{
    max-width: 400px;
    width: 70%;
  }

  .MuiButton-root{
    background-color: #17b3a3;
  }

  .MuiButton-root:hover{
    background-color: #0bb2d4;
  }
 
`;

export const FormContainer = styled.div`
    text-align: center;
    width: 80%;
    max-width: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const Logo = styled.img`
    margin-bottom: 52px;
`;

export const StyledForm = styled.form`
  & > div {
     margin-bottom: 28px;
  }
  & input {
    padding-left: 6px;
  }
`;

export default StyledLogin;
