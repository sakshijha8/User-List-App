import styled from "styled-components";

export const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  text-align: center;

  .MuiPagination-ul {
    justify-content: center;
  }

  .MuiTableHead-root {
    background: #e6f0ff;
  }

  @media (max-width: 768px) {
    padding: 10px;
    text-align: left;
  }
`;

export const TableContainer = styled.div`
  margin: 40px auto;
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px auto;
    overflow-x: auto;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 40%;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const InputWrapper = styled.div`
  input {
    border-radius: 8px;
    outline: none;
    padding: 0 12px;
    height: 40px;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom:1px solid #DEDFE0;
`;
