import styled from 'styled-components'

export const Form = styled.form`
  padding: 5px;

  display: grid;
  grid-template-areas:
    'rowName buttonSubmit'
    'rowNumber buttonSubmit';

  grid-gap: 20px;

  @media (max-width: 480px) {
    grid-gap: 10px;
    grid-template-areas:
      'rowName '
      'rowNumber'
      'buttonSubmit';
  }
`
const Area = styled.label`
  display: inline-flex;
  justify-content: space-between;
  column-gap: 20px;

  font-weight: 700;
  font-size: 1.5em;

  & input {
    width: 100%;
    max-width: 300px;
    min-width: 175px;
  }
`

export const AreaName = styled(Area)`
  grid-area: rowName;
`
export const AreaNumber = styled(Area)`
  grid-area: rowNumber;
`

export const SubmitBtn = styled.button`
  grid-area: buttonSubmit;
  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;

  padding: 5px 15px;
  width: 100%;
  max-width: 200px;

  font-size: 20px;
  color: white;
  background-color: var(--button-color);

  user-select: none;
  border: solid 1px black;
  border-radius: 3px;
  cursor: pointer;

  & svg {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    column-gap: 10px;
  }

  @media (max-width: 550px) {
    & span {
      display: none;
    }
  }

  @media (max-width: 480px) {
    font-size: 16px;
    width: 60px;
    height: 60px;
  }
`
