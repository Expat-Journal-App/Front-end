import styled from "styled-components";
// Forms, inputs, buttons
export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;
export const Button = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  border: 2px solid black;
  text-decoration: none;
  padding: 6px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  align-self: right;
  height: 2.8rem;
  font-size: 1.4rem;
`;
// Text
export const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;
export const Title2 = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  color: #4d4d4d;
  font-size: 1.8em;
`;
export const Text = styled.p`
  font-family: "Raleway", sans-serif;
  color: ${props => props.color || "#4d4d4d"};
`;
