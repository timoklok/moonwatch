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
  color: ${theme.textColor};
  font-size: ${theme.fontSizes.m};
  font-weight: 500;
  font-size: ${theme.fontSizes.xs};
  letter-spacing: 0.1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  input[type="text"],
  input[type="email"] {
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
      action="https://band.us21.list-manage.com/subscribe/post?u=431ab732d5bb32f8b9136efce&amp;id=fd0c7a0a98&amp;f_id=0094e9e6f0"
      method="post"
      className="validate"
      target="_self"
      noValidate=""
    >
      <p>{formText}</p>
      <div>
        <ButtonContainer>
          <input
            type="text"
            name="EMAIL"
            required=""
            defaultValue=""
            placeholder="Your email address..."
          />

          <div
            aria-hidden="true"
            style={{ position: "absolute", left: "-5000px" }}
          >
            {/* real people should not fill this in and expect good things -
                do not remove this or risk form bot signups */}
            <input
              type="text"
              name="b_431ab732d5bb32f8b9136efce_fd0c7a0a98"
              tabIndex="-1"
              defaultValue=""
            />
          </div>
          <input type="submit" name="subscribe" value="Subscribe" />
        </ButtonContainer>
      </div>
    </FormContainer>
  );
};

export default Form;
