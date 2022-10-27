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
  opacity: 0.4;
`;

const Show = styled.span`
  ${ShowCSS}
`;

const Shows = () => {
  const showList = [
    {
      date: "2022-11-13 13:30",
      location: "Brewpub De Kromme Haring, Utrecht",
      link: "https://leguesswho.com/lineup/celestial-spaces-moonwatch",
    },
    {
      date: "2022-10-22 21:00",
      location: "Moira, Utrecht",
      alsoPlaying: "Hushed Hands",
      link: "https://www.facebook.com/events/1605758329843165",
    },
    {
      date: "2022-10-04 20:00",
      location: "dB's, Utrecht",
      alsoPlaying: "Acid Mothers Temple",
      link: "https://www.dbstudio.nl/event/acid-mothers-temple-japan/",
      soldOut: true,
    },
    {
      date: "2022-03-25 20:30",
      location: "dB's, Utrecht",
      alsoPlaying: "Vinyl Williams",
      link: "https://www.dbstudio.nl/event/vinyl-williams-usa-support/",
    },
    {
      date: "2022-03-05 20:30",
      location: "Vechtclub XL Bunker, Utrecht",
    },
    {
      date: "2021-10-31 15:00",
      location: "Living room concert, Utrecht",
      alsoPlaying: "Coaster",
      soldOut: true,
    },
    {
      date: "2021-07-05 21:00",
      location: "Vechtclub XL, Utrecht",
      link: "https://www.eventbrite.nl/e/tickets-podiumdorst-5-juli-moonwatch-160727691853",
      soldOut: true,
    },
    {
      date: "2020-01-25 21:00",
      location: "Brewpub De Kromme Haring, Utrecht",
      alsoPlaying: "Mevrouw Tamara",
    },
    {
      date: "2019-11-27 21:00",
      location: "De Helling, Utrecht",
      alsoPlaying: "Kittiwake"
    },
  ];
  const today = dayjs();

  return (
    <>
      {showList.length > 0 && (
        <ViewBox id="shows">
          <ViewHeader name="Shows"></ViewHeader>
          {showList.map((show, idx) => {
            const showDate = dayjs(show.date, "YYYY-MM-DD HH:MM");
            if (showDate < today) {
              return (
                <PastShow key={idx}>
                  {showDate.format("ddd D MMMM YYYY HH:mm")} - {show.location}
                  {show.alsoPlaying && (
                    <span> with {show.alsoPlaying}</span>
                  )}
                  {show.soldOut && (
                    <span> (sold out)</span>
                  )}
                </PastShow>
              );
            } else {
              return (
                <Show key={idx}>
                  {showDate.format("ddd D MMMM YYYY HH:mm")} - {show.location}
                  {show.alsoPlaying && (
                    <span> with {show.alsoPlaying}</span>
                  )}
                  {show.soldOut && (
                     <span> (sold out)</span>
                  )}
                  {show.link && (
                    <span> <a href={show.link}>info</a></span>
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
