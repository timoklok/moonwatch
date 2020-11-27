import React from "react";
import styled from "styled-components";
import ViewHeader from "../components/ViewHeader";
import ViewBox from "../components/ViewBox";
import LinkList from "../components/LinkList";
import { baseText, subText } from "../components/Text";

const links = [
  { name: "Facebook", url: "https://www.facebook.com/moonwatch.band" },
  { name: "Instagram", url: "https://www.instagram.com/moonwatch.band/" },
  { name: "Twitter", url: "https://twitter.com/moonwatchband" },
  { name: "Mail", url: "mailto:hello@moonwatch.band" },
];

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MemberContainer = styled.div`
  width: max(430px, 60%);
`;

const Members = styled.div``;

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
  height: 200px;

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
`;

const Contact = () => {
  return (
    <ViewBox id="contact">
      <ViewHeader name="Contact"></ViewHeader>
      <ContentContainer>
        <LinkList title="Find us via" links={links} />
        <MemberContainer>
          <MemberImages>
            <MemberImage>a</MemberImage>
            <MemberImage>b</MemberImage>
            <MemberImage>c</MemberImage>
            <MemberImage>d</MemberImage>
            <MemberImage>e</MemberImage>
          </MemberImages>
          <Members>
            <span>MOONWATCH IS</span>
            Nils Breunese {`\n`} Yvet Yousef{`\n`} Gerben ‘t Hag{`\n`} Hielke
            Kortshot{`\n`} Timo Klok
          </Members>
        </MemberContainer>
      </ContentContainer>
    </ViewBox>
  );
};

Contact.propTypes = {};

export default Contact;
