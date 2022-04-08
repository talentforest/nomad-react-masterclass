import styled from "styled-components";

interface DarkModeBtnProps {
  toggleDark: () => void;
}

export default function DarkModeBtn({ toggleDark }: DarkModeBtnProps) {
  return (
    <ToggleBtn onClick={toggleDark}>
      Dark Mode Button
    </ToggleBtn>
  )
}

const ToggleBtn = styled.button`
  margin: 40px 0;
  padding: 7px 10px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.accentColor};
  color: #fff;
`
