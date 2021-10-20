import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
`;
const ContainerLanguage = styled.div`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;
const Logo = styled.h1`
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <ContainerLanguage>EN</ContainerLanguage>
          <SearchContainer>
            <Input />
            <Search></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MO.</Logo>
        </Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
