import styled from 'styled-components'

export const About  = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

export const Description = styled.div`
    flex: 2;
    padding-right: 5rem;
    z-index: 2;
    h2 {
        font-weight: lighter;
        color: #23d997;
    }
`;

export const Image = styled.div`
    z-index: 2;
    flex: 1;
    overflow: hidden;
    text-align: center;
    img {
        width: 75%;
        height: 75;
        object-fit: cover;
        border-radius: 30px;
    }
`;