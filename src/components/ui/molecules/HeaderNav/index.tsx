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

const NavListItemLink = styled.a`
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
          <NavListItemLink href="/projects">Проекты</NavListItemLink>
        </NavListItem>
        <NavListItem>
          <NavListItemLink href="/about">О нас</NavListItemLink>
        </NavListItem>
        <NavListItem>
          <NavListItemLink href="/services">Услуги</NavListItemLink>
        </NavListItem>
        <NavListItem>
          <NavListItemLink href="#">Цены</NavListItemLink>
        </NavListItem>
        <NavListItem>
          <NavListItemLink href="/articles">Статьи</NavListItemLink>
        </NavListItem>
        <NavListItem>
          <NavListItemLink href="/vacancies">Вакансии</NavListItemLink>
        </NavListItem>
        <NavListItem>
          <NavListItemLink href="/contacts">Контакты</NavListItemLink>
        </NavListItem>
      </NavList>
    </HeaderWrapper>
  );
};

export default HeaderNav;
