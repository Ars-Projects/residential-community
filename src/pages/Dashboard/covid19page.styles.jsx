import styled from 'styled-components';

export const Covid19PageContainer = styled.div `
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
background-color: #EBEBEB;
&:hover {
  .image {
    opacity: 0.8;
  }
  button {
    opacity: 0.85;
    display: flex;
  }
}
`;


export const Covid19CardContainer = styled.div `
width: 100%;
display: flex;
flex-direction: column;
height: 200px;
borderTop: 10px;
border: 10px;
align-items: center;
position: relative;
background-color: #EBEBEB;
&:hover {
  .image {
    opacity: 0.8;
  }
  button {
    opacity: 0.85;
    display: flex;
  }
}
`;

export const Covid19GraphContainer = styled.div `
width: 100%;
display: flex;
flex-direction: column;
height: 200px;
borderTop: 50px;
border: 100px;
align-items: center;
position: relative;
background-color: #EBEBEB;
&:hover {
  .image {
    opacity: 0.8;
  }
  button {
    opacity: 0.85;
    display: flex;
  }
}
`;

export const Covid19TableContainer = styled.div `
width: 100%;
display: flex;
flex-direction: column;
height: 200px;
borderTop: 10px;
border: 10px;
align-items: center;
position: relative;
background-color: #EBEBEB;
&:hover {
  .image {
    opacity: 0.8;
  }
  button {
    opacity: 0.85;
    display: flex;
  }
}
`;

export const BackgroundImage = styled.div `
  width: 100%;
  height: 35%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `
url($ {
  imageUrl
})
`};
  `;