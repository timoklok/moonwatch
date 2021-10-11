import React from "react";
import ViewHeader from "../components/ViewHeader";
import ViewBox from "../components/ViewBox";
import dayjs from "dayjs";
import styled, { css } from "styled-components";
import { baseText } from "../components/Text";

const ShowCSS = css`
  ${baseText};
  display: block;
  margin-bottom: 16px;
  text-align: center;
`;
const PastShow = styled.span`
  ${ShowCSS}
  text-decoration: line-through;
  opacity: 0.4;
`;

const Show = styled.span`
  ${ShowCSS}
`;

const Shows = () => {
  const showList = [
    {
      text: "Living room concert, Utrecht with Coaster",
      date: "20211031 15:00",
    },
    {
      text: "@Vechtclub, Utrecht",
      ticketLink:
        "https://www.eventbrite.nl/e/tickets-podiumdorst-5-juli-moonwatch-160727691853",
      date: "20210705 21:00",
    },
    {
      text: "@Brewpub De Kromme Haring, Utrecht with Mevrouw Tamara",
      date: "20200125 21:00",
    },
    {
      text: "OPEN @De Helling, Utrecht with Kittiwake",
      date: "20191127 21:00",
    },
  ];
  const today = dayjs();

  return (
    <>
      {showList.length > 0 && (
        <ViewBox id="shows">
          <ViewHeader name="Shows"></ViewHeader>
          {showList.slice(0.1).map((show, idx) => {
            const showDate = dayjs(show.date, "YYYYMMDD HH:MM");
            if (showDate < today) {
              return (
                <PastShow key={idx}>
                  {showDate.format("ddd, MMMM DD YYYY")} {show.text}
                </PastShow>
              );
            } else {
              return (
                <Show key={idx}>
                  {showDate.format("ddd, MMMM DD YYYY -  HH:mm")} {show.text}{" "}
                  {show.ticketLink && (
                    <a title="tickets" href={show.ticketLink}>
                      tickets
                    </a>
                  )}
                </Show>
              );
            }
          })}
        </ViewBox>
      )}
    </>
  );
};

Shows.propTypes = {};

export default Shows;
