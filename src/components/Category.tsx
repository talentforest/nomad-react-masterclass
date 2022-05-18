import { Categories } from "../atoms";
import styled from "styled-components";

interface propsType {
  category: string;
  onInput: (event: React.FormEvent<HTMLSelectElement>) => void;
}

export default function Category({ category, onInput }: propsType) {
  return (
    <Select id="select" value={category} onInput={onInput}>
      <option selected value={Categories.TO_DO}>
        To Do
      </option>
      <option value={Categories.DOING}>Doing</option>
      <option value={Categories.DONE}>Done</option>
    </Select>
  );
}

const Select = styled.select`
  height: 35px;
  padding: 0 10px;
  font-weight: 700;
  background: ${(props) => props.theme.boxColor};
  border-radius: 5px;
  border: 1px solid #aaa;
  &:focus {
    outline: none;
  }
`;
