import React from "react";

import "../App.css";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const NavA = styled.a`
  color: white;
  font-weight: 100;
  letter-spacing: 2px;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px 5px;
  display: inline-block;
  width: 100%;
  text-align: center;
`;

const NavUL = styled.ul`
  display: flex;
  border: 1px solid black;
  list-style: none;
  margin: 0;
  padding: 0;

  ${NavA}:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const NavLI = styled.li`
  flex: 1;
`;

function Navigation() {
  return (
    <>
      <Container>
        <NavUL>
          <NavLI>
            <NavA href="#">Home</NavA>
          </NavLI>
          <NavLI>
            <NavA href="#">Nominations</NavA>
          </NavLI>
        </NavUL>
      </Container>
    </>
  );
}

export default Navigation;
