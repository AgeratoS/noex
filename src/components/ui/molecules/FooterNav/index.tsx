import { Link } from "react-router-dom";
import { styled } from "styled-components";

const FooterNavList = styled.ul`
  list-style-type: none;

  display: inline-flex;
  justify-content: space-between;
`;

const FooterNavListPartition = styled.li`
  padding: 0 3.86rem;

  border-right: 1px solid
    ${(props) => props.theme.palette.common.white["400_20"]};

  &:last-child {
    border-right: none;
    padding-right: 0;
  }

  &:first-child {
    padding-left: 0;
  }
`;

const FooterMenu = styled.ul`
  list-style-type: none;

  display: flex;
  flex-direction: column;
  gap: 1.88rem;
`;

const FooterMenuItem = styled.li``;

const FooterMenuLink = styled(Link)`
  color: ${(props) => props.theme.palette.common.grey[400]};

  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const FooterNav = () => {
  return (
    <FooterNavList>
      <FooterNavListPartition>
        <FooterMenu>
          <FooterMenuItem>
            <FooterMenuLink to="/projects">Проекты</FooterMenuLink>
          </FooterMenuItem>
          <FooterMenuItem>
            <FooterMenuLink to="/about">О нас</FooterMenuLink>
          </FooterMenuItem>
          <FooterMenuItem>
            <FooterMenuLink to="/services">Услуги</FooterMenuLink>
          </FooterMenuItem>
        </FooterMenu>
      </FooterNavListPartition>
      <FooterNavListPartition>
        <FooterMenu>
          <FooterMenuItem>
            <FooterMenuLink to="/">Цены</FooterMenuLink>
          </FooterMenuItem>
          <FooterMenuItem>
            <FooterMenuLink to="/articles">Статьи</FooterMenuLink>
          </FooterMenuItem>
          <FooterMenuItem>
            <FooterMenuLink to="/vacancies">Вакансии</FooterMenuLink>
          </FooterMenuItem>
        </FooterMenu>
      </FooterNavListPartition>
      <FooterNavListPartition>
        <FooterMenu>
          <FooterMenuItem>
            <FooterMenuLink to="/contacts">Контакты</FooterMenuLink>
          </FooterMenuItem>
        </FooterMenu>
      </FooterNavListPartition>
    </FooterNavList>
  );
};

export default FooterNav;
