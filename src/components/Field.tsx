import { useRecoilState } from "recoil";
import {
  addFieldState,
  showfieldInputState,
  fieldsState,
  fieldState,
} from "../atoms";
import styled from "styled-components";

export default function Field() {
  const [field, setField] = useRecoilState(fieldState);
  const [addField, setAddField] = useRecoilState(addFieldState);
  const [fields, setFields] = useRecoilState(fieldsState);
  const [showInput, setShowInput] = useRecoilState(showfieldInputState);

  const onFieldInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setField(event.currentTarget.value as any);
  };

  const handleShowInput = () => {
    setShowInput((prev) => !prev);
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setAddField(event.currentTarget.value as any);
  };

  const handleAddCategory = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (addField === "") return;
    if (fields.includes(addField)) {
      alert("이미 등록된 카테고리입니다. 새로운 카테고리를 등록해주세요.");
      return;
    }
    if (addField) {
      setFields([addField, ...fields] as any);
      alert("할 일 카테고리로 등록되었습니다.");
      setAddField("");
      setShowInput(false);
      setField(addField);
    }
  };

  return (
    <Container>
      <Select value={field} onChange={onFieldInput}>
        {fields.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </Select>
      {showInput ? (
        <AddCategory onSubmit={handleAddCategory}>
          <Bubble />
          <input
            type="text"
            placeholder="당신만의 할 일 카테고리를 추가해보세요."
            onChange={onChange}
            value={addField}
          />
          <button>Add</button>
        </AddCategory>
      ) : (
        <p onClick={handleShowInput}>➕카테고리 추가하기</p>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  p {
    font-size: 12px;
    font-weight: 700;
    color: #727272;
    margin: 5px;
    word-spacing: -3px;
    cursor: pointer;
  }
`;

const Bubble = styled.div`
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  background-color: ${(props) => props.theme.boxColor};
  position: absolute;
  top: -5px;
  left: 40px;
`;

const AddCategory = styled.form`
  position: relative;
  border-radius: 10px;
  background-color: ${(props) => props.theme.boxColor};
  margin: 5px 0;
  padding: 4px 8px;
  display: flex;
  justify-content: space-between;
  input {
    background-color: ${(props) => props.theme.boxColor};
    width: 80%;
    height: 30px;
    border: none;
    border-bottom: 1px solid #aaa;
    font-size: 14px;
    &:focus {
      outline: none;
    }
  }
  button {
    height: 30px;
    width: 15%;
    margin-left: 15px;
    border: 1px solid #aaa;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const Select = styled.select`
  width: fit-content;
  padding: 5px;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 700;
  background: ${(props) => props.theme.boxColor};
  border-radius: 5px;
  border: 1px solid #aaa;
  &:focus {
    outline: none;
  }
`;
