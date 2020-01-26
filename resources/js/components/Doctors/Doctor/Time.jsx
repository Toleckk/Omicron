import styled from "styled-components";

const Time = styled.div`
    width: 80%;
    padding: 5px;
    margin-left: 10px;
    margin-right: 10px;
    
    margin-top: 7px;
    
    border: 0;
    border-radius: 3px;
        
    
    &:first-child { 
        margin-top: 0;
    }
    
    $:last-child {
        margin-bottom: 30px;
    }
    
    &:only-child {
        margin-top: 10px;
    }
        
    text-align: center;
    
    font-size: 14pt;
    
    &:hover { 
        background: #fafafa;
    }
`;

export default Time;
