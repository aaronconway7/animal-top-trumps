import styled from 'styled-components'

export const StyledCard = styled.div`
    display: grid;
    position: relative;
    border: 2px solid #eeeeee;
    border-radius: 5px;
    padding: 25px;
    min-height: 300px;
    min-width: 200px;
    justify-items: center;
    text-align: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .type {
        opacity: 0.5;
        font-size: 0.8em;
    }

    .extinct-status {
        position: absolute;
        top: 5px;
        right: 5px;
        border: 1px solid red;
        padding: 0.25em 0.5em;
        border-radius: 5px;
        font-size: 0.8em;
        color: red;
        background-color: #ff000038;
    }

    .buttons {
        display: grid;
        grid-auto-flow: column;
        grid-gap: 5px;
    }

    button {
        width: 100%;
        background-color: white;
        border: 2px solid black;
        border-radius: 100%;
        outline: none;
        height: 30px;
        width: 30px;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            background-color: #eeeeee;
        }
    }
`