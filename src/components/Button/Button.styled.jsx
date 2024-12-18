import styled from '@emotion/styled';

export const ButtonWrapper = styled.button`
    color:white;
    border:none;
    padding:10px 20px;
    border-radius: 5px;
    transition: transform 0.3s ease;

    &:not([disabled]){
        cursor:pointer;
        background-color:${props => props.theme.colors[props.level]};
    }

    &:hover:not([disabled]) {
        transform: scale(1.1);
    }

    &:active:not([disabled]) {
        transform: scale(0.95);
    }
`;
