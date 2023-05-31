import { Wrapper } from "./TheButton.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export function TheButton({ ico, buttontext, textcolor, backgroundcolor }) {
  return (
    <Wrapper textcolor={textcolor} backgroundcolor={backgroundcolor}>
      <FontAwesomeIcon icon={ico} />
      <span>{buttontext}</span>
    </Wrapper>
  );
}

TheButton.propTypes = {
  ico: PropTypes.string,
  buttontext: PropTypes.string,
  textcolor: PropTypes.string,
  backgroundcolor: PropTypes.string,
};
