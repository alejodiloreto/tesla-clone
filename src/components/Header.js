import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlices';
import { useSelector } from 'react-redux';

function Header() {
  const [burger, setBurger] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href="#home">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#shop">Shop</a>
        <a href="#account">Account</a>
        <a href="#menu" onClick={() => setBurger(true)}>
          Menu
        </a>
      </RightMenu>
      <BurgerNav show={burger}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurger(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#">{car}</a>
            </li>
          ))}
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-size: 14px;
    font-weight: 600;
    padding: 8px 18px;
    flex-wrap: nowrap;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    margin-right: 10px;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
