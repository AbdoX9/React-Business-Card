import { PersonalInfo } from "./PersonalInfo";
import { About } from "./About";
import { Footer } from "./Footer";
const CardStyle = {
  width: "317px",
  hight: "780px",
  borderRadius: "10px",
  overflow: "auto",
};

export function Card() {
  return (
    <div style={CardStyle}>
      <PersonalInfo />
      <About
        Htext="About"
        Ptext="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
      />
      <About
        Htext="Interests"
        Ptext="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
      />
      <Footer />
    </div>
  );
}
