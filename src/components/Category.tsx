import { Categories } from "../atoms";
import styled from "styled-components";

interface propsType {
  category: string;
  onCategoryInput: (event: React.FormEvent<HTMLSelectElement>) => void;
}

const Category = ({ category, onCategoryInput }: propsType) => {
  return (
    <Select value={category} onInput={onCategoryInput}>
      <option value={Categories.TO_DO}>할 일 보기</option>
      <option value={Categories.DOING}>진행 중인 일 보기</option>
      <option value={Categories.DONE}>완료한 일 보기</option>
    </Select>
  );
};

const Select = styled.select`
  width: 100px;
  height: 25px;
  padding: 0 3px;
  font-weight: 700;
  font-size: 14px;
  background: ${(props) => props.theme.boxColor};
  border-radius: 5px;
  border: 1px solid #aaa;
  word-spacing: -3px;
  &:focus {
    outline: none;
  }
`;

export default Category;
