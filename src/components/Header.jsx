import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { ButtonLink } from "./ButtonLink";
import { IoMdSunny } from "react-icons/io";
import { RiMoonClearLine } from "react-icons/ri";
//import { FiSettings } from "react-icons/fi";

const Header = ({ theme, handleClick }) => (
  <StyledHeader>
    <StyledHeading to="/">GetYourFeeds</StyledHeading>
    <div>
      <ButtonLink data-testid="bookmark-btn" to="/bookmarks" m={"0 10px"}>
        Bookmarks
      </ButtonLink>
      {/* <ButtonLink data-testid="settings-btn" to="/settings" m={"0 5px"}>
        <FiSettings />
      </ButtonLink> */}
      <Button onClick={handleClick} data-testid="theme-btn">
        {theme === "light" ? (
          <IoMdSunny style={{ transition: "0.3s" }} />
        ) : (
          <RiMoonClearLine style={{ color: "white", transition: "0.3s" }} />
        )}
      </Button>
    </div>
  </StyledHeader>
);

const StyledHeading = styled(Link)`
  font-size: 36px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  text-decoration: none;
  :visited,
  :link {
    color: inherit;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;

  @media (max-width: 480px) {
    padding: 20px 15px;
  }
`;

export default Header;
