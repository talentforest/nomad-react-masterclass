import styled from "styled-components";
import { Fields } from "../atoms";

interface propsType {
  field: string;
  onFieldInput: (event: React.FormEvent<HTMLSelectElement>) => void;
}

export default function Field({ field, onFieldInput }: propsType) {
  return (
    <Container>
      <Select value={field} onInput={onFieldInput}>
        <option value={Fields["코딩 🖥"]}>코딩 🖥</option>
        <option value={Fields["집안일 🏠"]}>집안일 🏠</option>
        <option value={Fields["기타 ⚙️"]}>기타 ⚙️</option>
      </Select>
      <p>할 일의 분야를 선택해주세요.</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 8px;
  p {
    font-size: 12px;
    font-weight: 700;
    color: #727272;
    margin-left: 5px;
    word-spacing: -3px;
  }
`;

const Select = styled.select`
  width: fit-content;
  height: 25px;
  padding: 0 3px;
  font-size: 10px;
  font-weight: 700;
  background: ${(props) => props.theme.boxColor};
  border-radius: 5px;
  border: 1px solid #aaa;
  &:focus {
    outline: none;
  }
`;
