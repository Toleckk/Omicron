import styled from "styled-components";

const Divider = styled.div`
    height: 75%;
    width: 3px;
    background-color: #133a7a;
    margin-left: 18px;
    margin-right: 18px;
    
    transition: all 0.2s ease;
    
    &:hover {
        transform: scale(1.06);
    }
`;

export default Divider;
