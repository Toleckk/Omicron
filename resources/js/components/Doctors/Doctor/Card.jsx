import styled from 'styled-components';

export default styled.div`
    border: 3px solid #a5d8f7;
    border-radius: 80px;
    width: 580px;
    margin: 30px;
    padding 20px;
    
    transition: all 0.3s ease;
    
    transform: scale(${({selected, hovered}) => (selected || hovered) ? 1.06 : 1});
    
    display: flex;
    flex-direction: ${({selected}) => selected ? 'column' : 'row'};
    ${({selected}) => selected && 'align-items: center;'}
    
    cursor: pointer;
`;
