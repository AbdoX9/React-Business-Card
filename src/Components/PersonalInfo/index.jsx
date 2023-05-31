import { Wrapper, Text, Image, Buttons } from "./PersonalInfo.style";
import { Link } from "react-router-dom";
import ImageProfile from "../../Images/IMG_4336.jpg";
import { TheButton } from "../TheButton";

export function PersonalInfo() {
  const Linkstyle = { textDecoration: "none" };
  return (
    <Wrapper>
      <Image src={ImageProfile} />
      <Text>
        <h1>Your Name</h1>
        <h2>Your Job Title</h2>
        <h3>YourName.wbsite</h3>
      </Text>
      <Buttons>
        <Link to={"mailto:12bodybo@gmail.com"} style={Linkstyle}>
          <TheButton
            ico="fa-solid fa-envelope"
            buttontext="Email"
            textcolor="#1E1F26"
            backgroundcolor="white"
          />
        </Link>
        <Link
          to={"https://www.linkedin.com/?original_referer="}
          style={Linkstyle}
        >
          <TheButton
            ico="fa-brands fa-linkedin"
            buttontext="Linked-In"
            textcolor="white"
            backgroundcolor="#5093E2"
          />
        </Link>
      </Buttons>
    </Wrapper>
  );
}
