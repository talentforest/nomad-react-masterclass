import { useSetRecoilState } from 'recoil';
import styled from "styled-components";
import { isDarkAtom } from '../data/atoms';

export default function DarkModeBtn() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);

  return (
    <ToggleBtn onClick={toggleDarkAtom}>
      Dark Mode Button
    </ToggleBtn>
  )
}

const ToggleBtn = styled.button`
  margin: 40px 40px 0;
  padding: 7px 10px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.accentColor};
  color: #fff;
`
