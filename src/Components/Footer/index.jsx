import { Link } from "react-router-dom";
import { Wrapper } from "./Footer.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <Wrapper>
      <Link to="https://twitter.com/home">
        <FontAwesomeIcon icon="fa-brands fa-square-twitter" />{" "}
      </Link>
      <Link to="https://www.facebook.com/">
        <FontAwesomeIcon icon="fa-brands fa-square-facebook" />{" "}
      </Link>
      <Link to="https://www.instagram.com/">
        <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
      </Link>
      <Link to="https://github.com/">
        <FontAwesomeIcon icon="fa-brands fa-square-github" />{" "}
      </Link>
    </Wrapper>
  );
}
