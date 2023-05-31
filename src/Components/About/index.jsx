import { Text } from "./About.style";
import PropTypes from "prop-types";

export function About({ Ptext, Htext }) {
  return (
    <Text>
      <h3>{Htext}</h3>
      <p>{Ptext}</p>
    </Text>
  );
}

About.propTypes = {
  Ptext: PropTypes.string,
  Htext: PropTypes.string,
};
