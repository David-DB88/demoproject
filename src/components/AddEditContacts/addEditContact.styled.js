import styled from "styled-components";

const StyledComponent = styled.div`
  form{
    display: flex;
    flex-direction: column;
    .MuiTextField-root{
      margin-bottom: 15px;
    }
    .MuiInputBase-input{
      padding-top: 3px;
    }
    .MuiFormControlLabel-label {
      margin-left: 7px;
    }
    .MuiDialogActions-root {
        justify-content: center;
        padding: 8px 0;
    }
    .select_form .MuiFormLabel-root{
      margin-bottom: 5px;
      display: block;
      font-size: 12px;      
    }
    .error-texts{
        color: red;
    }
  }

  
   
  
`;


export default StyledComponent;
