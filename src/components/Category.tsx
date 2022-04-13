import { Categories } from "../atoms";
import styled from "styled-components";

interface propsType {
  category: string,
  onInput: (event:React.FormEvent<HTMLSelectElement>) => void,
}

export default function Category({ category, onInput }:propsType) {
  return (
    <Select value={category} onInput={onInput}>
      <option value={Categories.TO_DO}>To Do</option>
      <option value={Categories.DOING}>Doing</option>
      <option value={Categories.DONE}>Done</option>
    </Select>
  );
}

const Select = styled.select`
  width: 140px;
  height: 30px;
  border-radius: 5px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.accentColor};
  padding: 0 5px;
  margin: 10px 0 10px 0;
`
