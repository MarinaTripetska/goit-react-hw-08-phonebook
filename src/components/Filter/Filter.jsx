import { useSelector, useDispatch } from 'react-redux';
import { filterValue } from '../../redux/app';
import styled from 'styled-components';

const Label = styled.label`
  margin-bottom: 50px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  font-weight: 600;
  & input {
    margin-left: 15px;
  }
`;

const Filter = () => {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const changeFilter = e => dispatch(filterValue(e.target.value));

  return (
    <Label>
      Find contacts by name
      <input type="text" onChange={changeFilter} value={value} />
    </Label>
  );
};

export default Filter;
