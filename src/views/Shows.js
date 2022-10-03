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
      text: "dB's, Utrecht, support for Acid Mothers Temple (sold out)",
      ticketLink: "https://www.dbstudio.nl/event/acid-mothers-temple-japan/",
      date: "2022-10-04 20:00",
    },
    {
      text: "dB's, Utrecht, support for Vinyl Williams",
      ticketLink: "https://www.dbstudio.nl/event/vinyl-williams-usa-support/",
      date: "2022-03-25 20:30",
    },
    {
      text: "Living room concert, Utrecht with Coaster (sold out)",
      date: "2021-10-31 15:00",
    },
    {
      text: "Vechtclub XL, Utrecht (sold out)",
      ticketLink:
        "https://www.eventbrite.nl/e/tickets-podiumdorst-5-juli-moonwatch-160727691853",
      date: "2021-07-05 21:00",
    },
    {
      text: "Brewpub De Kromme Haring, Utrecht with Mevrouw Tamara",
      date: "2020-01-25 21:00",
    },
    {
      text: "OPEN @ De Helling, Utrecht with Kittiwake",
      date: "2019-11-27 21:00",
    },
  ];
  const today = dayjs();

  return (
    <>
      {showList.length > 0 && (
        <ViewBox id="shows">
          <ViewHeader name="Shows"></ViewHeader>
          {showList.slice(0.1).map((show, idx) => {
            const showDate = dayjs(show.date, "YYYY-MM-DD HH:MM");
            if (showDate < today) {
              return (
                <PastShow key={idx}>
                  {showDate.format("ddd D MMMM YYYY HH:mm - ")} {show.text}
                </PastShow>
              );
            } else {
              return (
                <Show key={idx}>
                  {showDate.format("ddd D MMMM YYYY HH:mm - ")} {show.text}{" "}
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
