import React from "react";
import styled from "styled-components";
import ViewHeader from "../components/ViewHeader";
import ViewBox from "../components/ViewBox";
import LinkList from "../components/LinkList";
import Form from "../components/Form";
import { baseText, subText } from "../components/Text";
import mq from "../utils/mq";

const links = [
  { name: "Facebook", url: "https://www.facebook.com/moonwatch.band" },
  { name: "Instagram", url: "https://www.instagram.com/moonwatch.band/" },
  { name: "Twitter", url: "https://twitter.com/moonwatchband" },
  { name: "Mail", url: "mailto:hello@moonwatch.band" },
];

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-top: 60px;
  > div {
    width: 100%;
  }

  ${mq.medium`
  flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
      > div {
    width: 40%;
  }
   `}
`;

const MemberContainer = styled.div`
  width: 50%;
`;

const Members = styled.div`
  text-align: right;
  padding: 20px 0;
`;

const MemberImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1em;
  grid-template-areas:
    ". m1 ."
    "l1 m1 r1"
    "l1 m2 r1"
    ". m2 r2"
    ". . r2";
`;

const MemberImage = styled.div`
  background-color: white;
  width: 100%;
  height: 125px;

  &:nth-child(1) {
    grid-area: l1;
  }
  &:nth-child(2) {
    grid-area: m1;
  }
  &:nth-child(3) {
    grid-area: m2;
  }
  &:nth-child(4) {
    grid-area: r1;
  }
  &:nth-child(5) {
    grid-area: r2;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BandName = styled.span`
  ${baseText}
  font-size:1rem;
`;

const BandNames = styled.span`
  ${subText}
`;

const Contact = () => {
  return (
    <ViewBox id="contact">
      <ViewHeader name="Contact"></ViewHeader>
      <ContentContainer>
        <div>
          <LinkList title="Find us on" links={links} />
          <Form />
        </div>
        <MemberContainer>
          <MemberImages>
            <MemberImage>
              <img alt="1" src="images/yvet.jpeg" />
            </MemberImage>
            <MemberImage>
              <img alt="2" src="images/gerben.jpeg" />
            </MemberImage>
            <MemberImage>
              <img alt="3" src="images/hielke.jpeg" />
            </MemberImage>
            <MemberImage>
              <img alt="4" src="images/nils.jpeg" />
            </MemberImage>
            <MemberImage>
              <img alt="5" src="images/timo.jpeg" />
            </MemberImage>
          </MemberImages>
          <Members>
            <BandName>
              MOONWATCH IS AN DREAMPOP BAND
              <br /> FROM UTRECHT, NL, EARTH
            </BandName>
            <br />
            <BandNames>
              Nils Breunese
              <br />
              Yvet Youssef
              <br />
              Gerben van ‘t Hag
              <br />
              Hielke Kortschot
              <br />
              Timo Klok
            </BandNames>
          </Members>
        </MemberContainer>
      </ContentContainer>
    </ViewBox>
  );
};

Contact.propTypes = {};

export default Contact;
