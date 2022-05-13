import styled from 'styled-components';

export const Item = styled.li`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media (max-width: 450px) {
    column-gap: 15px;
  }
`;

export const Name = styled.span`
  font-weight: 600;
  font-size: 1em;
`;
export const Phone = styled.a`
  white-space: nowrap;
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  column-gap: 7px;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;

  width: 100%;
  max-width: 100px;
  height: 35px;
  padding: 5px;
  background-color: var(--button-color);
  color: white;
  cursor: pointer;
  user-select: none;
  border: solid 1px black;
  border-radius: 3px;

  justify-self: end;

  @media (max-width: 450px) {
    width: 40px;
    font-size: 22px;
    & span {
      display: none;
    }
  }
`;
