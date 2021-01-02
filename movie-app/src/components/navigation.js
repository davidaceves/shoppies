import React from "react";

import "../App.css";
import styled from "styled-components";

const Container = styled.div`
  ${"" /* max-width: 1000px; */}
  ${"" /* margin: 0 auto; */}
  padding: 50px;
`;

const NavUL = styled.ul`
  display: flex;
  border: 1px solid black;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavA = styled.a`
  color: white;
  font-weight: 100;
  letter-spacing: 2px;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px, 5px;
  display: inline-block;
  width: 100%;
  text-align: center;
`;

function Navigation() {
  return (
    <>
      <Container>
        <NavUL>
          <li>
            <NavA href="#">Home</NavA>
          </li>
          <li>
            <NavA href="#">Nominations</NavA>
          </li>
        </NavUL>
      </Container>
    </>
  );
}

export default Navigation;
