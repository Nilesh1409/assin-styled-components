import React from "react";
import styled from "styled-components";

let Button = styled.button`
  border: ${({ border }) => (border ? border : "1px solid black")};
  background-color: ${({ background }) => (background ? background : "white")};
  color: ${({ color }) => (color ? color : "black")};
  padding: ${({ padding }) => (padding ? padding : "10px 15px")};
  border-radius: ${({ radius }) => (radius ? radius : "3px")};
  margin: ${({ margin }) => (margin ? margin : "10px")};
`;
let A = styled.a`
  href: ${(prop) => prop.href};
  color: ${({ color }) => color};
  text-decoration: ${({ decoration }) => decoration};
`;
export { A, Button };
