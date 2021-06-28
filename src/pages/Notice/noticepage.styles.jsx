import styled from 'styled-components';
import CustomButton from '../../components/custom-button/custom-button.component';


export const CollectionPageContainer = styled.div`
  
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: 1550px;
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

export const CollectionItemsContainer = styled.div`
  
  display: grid;
  // grid-template-columns: 1fr 1fr 1fr;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // grid-gap: 10px;
  // grid-template-rows: 50px 50px
  grid-gap: 10px;  
    grid-template-columns: repeat(auto-fit, 300px);
    grid-template-rows: repeat(2, 300px); 
  & > div {
    margin-bottom: 30px;
    margin-top: 30px;
    margin-left: 30px;

  }
`;

export const TableItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 550px;
  align-items: center;
  position: relative;

`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;


export const CollectionItemContainer = styled.div`
  width: 80%;
  display: flex;
  -webkit-box-shadow: 5px 6px 15px 5px rgba(0,0,0,0.37); 
  box-shadow: 5px 6px 15px 5px rgba(0,0,0,0.37);
  flex-direction: column;
  height: 250px;
  align-items: center;
  position: relative;
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

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 155px;
  display: none;
`;




export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

