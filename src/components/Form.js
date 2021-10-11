import theme from "../theme/theme";
import styled from "styled-components";
import mq from "../utils/mq";
import { baseText } from "../components/Text";

const FormContainer = styled.form`
  margin-bottom: 40px;

  ${mq.medium`
    margin-top:0;
    padding: 0 40px;
   `}

  font-family: ${theme.fonts.mainFont};
  text-transform: uppercase;
  color: ${theme.textColor};
  font-size: ${theme.fontSizes.m};
  font-weight: 500;
  font-size: ${theme.fontSizes.xs};
  letter-spacing: 0.3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  input[type="text"] {
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.8);
    margin-right: 10px;
    height: 24px;
    flex-grow: 1;
    padding-left: 4px;
    padding-right: 4px;
    margin-bottom: 10px;
    color: white;
    ::placeholder {
      color: white !important;
    }
  }

  input[type="submit"] {
    color: #ffffff;
    height: 28px;
    text-transform: uppercase;
    text-decoration: none;
    background: transparent;
    padding: 6px 16px;
    border: 1px solid #ffffff;
    display: inline-block;
    transition: all 0.4s ease 0s;
    cursor: pointer;
    ${baseText}
    font-size:0.7rem;
    &:hover {
      background-color: white;
      color: black;
    }
  }
`;

const Form = ({
  formText = "Or leave your email to occasionally receive emails about new releases and live shows:",
}) => {
  return (
    <FormContainer
      action="https://tinyletter.com/moonwatch"
      method="post"
      target="popupwindow"
      onsubmit="window.open('https://tinyletter.com/moonwatch', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
    >
      <p>
        <label labelfor="tlemail">{formText}</label>
      </p>
      <ButtonContainer>
        <input
          type="text"
          name="email"
          id="tlemail"
          placeholder="Your email address..."
        />
        <input type="hidden" value="1" name="embed" />
        <input type="submit" value="Subscribe" />
      </ButtonContainer>
    </FormContainer>
  );
};

export default Form;
