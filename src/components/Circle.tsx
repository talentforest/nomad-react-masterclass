import styled from "styled-components";

//components props interface
interface CircleProps {
  bgColor: string;
  // optional props
  borderColor?: string;
}
//styled-comoponent interface
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

export const Circle = ({ bgColor, borderColor }: CircleProps) => {
  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? bgColor}
    />
  )
};

const Container = styled.div<ContainerProps>`
    box-sizing: border-box;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    border: 3px solid ${props => props.borderColor};
    background-color: ${props => props.bgColor};
  `;

export default Circle;
