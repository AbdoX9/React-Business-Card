import styled from "styled-components";

export const Wrapper = styled.div`
  text-decoration: none;
  color: ${(props) => props.textcolor};
  background-color: ${(props) => props.backgroundcolor};
  box-shadow: rgba(0, 0, 0, 0.42) 0px 0px 3px 0px;
  border-radius: 6px;
  width: 110px;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-weight: 600;
`;
