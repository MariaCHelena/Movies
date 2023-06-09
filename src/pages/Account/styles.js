import styled from "styled-components";

export const Container = styled.div`
    width: 500px;
    height: 500px;
    margin: auto;
    background-color: white;
    color: black;
`

export const MovieList = styled.ul`
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        column-gap: 3rem;
        row-gap: 4rem;   
`

export const Movie = styled.li`
        display: flex;
        flex-direction: column;
        align-items: center;

    a{
        transition: all 0.3s;
    }

    a:hover{
        transform: scale(1.1);
    }

    span {
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }

    img {
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
`