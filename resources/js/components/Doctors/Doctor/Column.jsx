import styled from "styled-components";

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &:last-child {
        margin-right: ${props => props.hovered ? 0 : '30px'};
    }
`;

export default Column;
