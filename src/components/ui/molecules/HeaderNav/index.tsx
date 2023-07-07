import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.nav``;

const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 2.33rem;

  list-style-type: none;
`;

const NavListItem = styled.li``;

const NavListItemLink = styled(Link)`
  color: ${(props) => props.theme.palette.textColor};

  font-family: Montserrat;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;

const HeaderNav = () => {
  return (
    <HeaderWrapper>
      <NavList>
        <NavListItem>
          <NavListItemLink to="/projects">Проекты</NavListItemLink>
        </NavListItem>
        <NavListItem>
          <NavListItemLink to="/about">О нас</NavListItemLink>
        </NavListItem>
        <NavListItem>
          <NavListItemLink to="/services">Услуги</NavListItemLink>
        </NavListItem>
        <NavListItem>
          <NavListItemLink to="/prices">Цены</NavListItemLink>
        </NavListItem>
        <NavListItem>
          <NavListItemLink to="/articles">Статьи</NavListItemLink>
        </NavListItem>
        <NavListItem>
          <NavListItemLink to="/vacancies">Вакансии</NavListItemLink>
        </NavListItem>
        <NavListItem>
          <NavListItemLink to="/contacts">Контакты</NavListItemLink>
        </NavListItem>
      </NavList>
    </HeaderWrapper>
  );
};

export default HeaderNav;
