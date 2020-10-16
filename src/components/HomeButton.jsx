import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.div`
    background-color: #3298dc;
    border: 1px solid #fff;
    border-radius: 4px;
    margin: 20px auto;
    padding: 10px;
    width: 100px;

    &:hover {
        background-color: #fff;
        border: 1px solid #3298dc;
    }
`;


const HomeButton = props => {
    return (
        <>
            <Link to="/">
                <Button>
                    Home
                </Button>
            </Link>
        </>
    )
}

export default HomeButton;