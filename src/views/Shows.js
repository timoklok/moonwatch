import React from "react";
import ViewHeader from "../components/ViewHeader";
import ViewBox from "../components/ViewBox";
import dayjs from "dayjs";
import styled, { css } from "styled-components";
import { mediumText } from "../components/Text";

const ShowCSS = css`
  ${mediumText};
  display: block;
  margin-bottom: 16px;
  text-align: center;
`;
const PastShow = styled.span`
  ${ShowCSS}
  opacity: 0.4;
  font-size: 1em;
`;

const Show = styled.span`
  ${ShowCSS}
`;

const Shows = () => {
  const showList = [
    {
      date: "2024-05-24",
      time: "20:00",
      location: "De Superette, Wageningen",
      link: "https://desuperette.nl/event/live-moonwatch",
    },
    {
      date: "2024-05-11",
      time: "22:30",
      location: "Popradar Radarcafé, Den Haag",
      details: "with Machina (21:00)",
      link: "https://site.popradar.nl/article/1347/moonwatch-machina",
    },
    {
      date: "2024-05-10",
      time: "20:30",
      location: "Moira, Utrecht",
      details: "with Zilaida",
      link: "https://moira-utrecht.nl/news/events/zilaida-moonwatch/",
    },
    {
      date: "2024-01-27",
      time: "20:00",
      location: "De Nijverheid, Utrecht",
      details: "Myriad Eyes \\ Myriad Other album release show with Thistle Sifter (sold out)",
      link: "https://www.denijverheid.org/agenda/3079-dubbele-album-release-show-thistle-sifter-moonwatch",
    },
    {
      date: "2024-01-13",
      time: "20:30",
      location: "Vechtclub XL Bunker, Utrecht",
      details: "album release show try-out with NEEF",
    },
    {
      date: "2022-11-13",
      time: "13:30",
      location: "Brewpub De Kromme Haring, Utrecht",
      details: "with Fuzzy Dreamer, This Leo Sunrise, Holzkohle & Leah Rye",
      link: "https://leguesswho.com/lineup/celestial-spaces-moonwatch",
    },
    {
      date: "2022-10-22",
      time: "21:00",
      location: "Moira, Utrecht",
      details: "with Hushed Hands",
      link: "https://www.facebook.com/events/1605758329843165",
    },
    {
      date: "2022-10-04",
      time: "20:00",
      location: "dB's, Utrecht",
      details: "with Acid Mothers Temple",
      link: "https://www.dbstudio.nl/event/acid-mothers-temple-japan/",
      soldOut: true,
    },
    {
      date: "2022-03-25",
      time: "20:30",
      location: "dB's, Utrecht",
      details: "with Vinyl Williams",
      link: "https://www.dbstudio.nl/event/vinyl-williams-usa-support/",
    },
    {
      date: "2022-03-05",
      time: "20:30",
      location: "Vechtclub XL Bunker, Utrecht",
    },
    {
      date: "2021-10-31",
      time: "15:00",
      location: "Living room concert, Utrecht",
      details: "with Coaster",
      soldOut: true,
    },
    {
      date: "2021-07-05",
      time: "21:00",
      location: "Vechtclub XL, Utrecht",
      link: "https://www.eventbrite.nl/e/tickets-podiumdorst-5-juli-moonwatch-160727691853",
      soldOut: true,
    },
    {
      date: "2020-01-25",
      time: "21:00",
      location: "Brewpub De Kromme Haring, Utrecht",
      details: "with Mevrouw Tamara",
    },
    {
      date: "2019-11-27",
      time: "21:00",
      location: "De Helling, Utrecht",
      details: "with Kittiwake",
    },
  ];
  const today = dayjs();

  return (
    <>
      {showList.length > 0 && (
        <ViewBox id="shows">
          <ViewHeader name="Shows"></ViewHeader>
          {/* Upcoming shows */}
          {showList
            .filter(show => dayjs(show.date, "YYYY-MM-DD") >= today)
            .sort((showA, showB) => dayjs(showA.date, "YYYY-MM-DD") > dayjs(showB.date, "YYYY-MM-DD") ? 1 : -1) // soonest upcoming show first, furthest away last
            .map(show =>
              <Show>
                {dayjs(show.date, "YYYY-MM-DD").format("ddd D MMMM YYYY")}{show.time && (<span>{" "}{show.time}</span>)} - {show.location}
                <br></br>
                {show.details && <span> {show.details}</span>}
                {show.soldOut && <span> (sold out)</span>}
                {show.link && (
                  <span>
                    {" "}
                    - <a href={show.link}>info</a>
                  </span>
                )}
              </Show>
            )
          }
          {/* Past shows */}
          {showList
            .filter(show => dayjs(show.date, "YYYY-MM-DD") < today)
            .sort((showA, showB) => dayjs(showA.date, "YYYY-MM-DD") < dayjs(showB.date, "YYYY-MM-DD") ? 1 : -1) // most recent past show first, oldest show last
            .map(show =>
              <PastShow>
                {dayjs(show.date, "YYYY-MM-DD").format("ddd D MMMM YYYY")}{show.time && (<span>{" "}{show.time}</span>)} - {show.location}
                <br></br>
                {show.details && <span> {show.details}</span>}
                {show.soldOut && <span> (sold out)</span>}
              </PastShow>
            )
          }
        </ViewBox>
      )}
    </>
  );
};

Shows.propTypes = {};

export default Shows;
