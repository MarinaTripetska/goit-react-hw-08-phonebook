import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 50px;
  background-color: rgba(0, 0, 0, 0.466);
`;
export const ModalWindow = styled.div`
  position: absolute;
  width: 100%;
  max-width: 100vw;
  max-height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;
