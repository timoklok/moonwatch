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
      date: "2024-05-11 22:30",
      location: "Popradar Radarcafé, Den Haag",
      details: "with Machina (21:00)",
      link: "https://site.popradar.nl/article/1347/moonwatch-machina",
    },
    {
      date: "2024-01-27 20:00",
      location: "De Nijverheid, Utrecht",
      details: "Myriad Eyes \\ Myriad Other album release show with Thistle Sifter (sold out)",
      link: "https://www.denijverheid.org/agenda/3079-dubbele-album-release-show-thistle-sifter-moonwatch",
    },
    {
      date: "2024-01-13 20:30",
      location: "Vechtclub XL Bunker, Utrecht",
      details: "album release show try-out with NEEF",
    },
    {
      date: "2022-11-13 13:30",
      location: "Brewpub De Kromme Haring, Utrecht",
      details: "with Fuzzy Dreamer, This Leo Sunrise, Holzkohle & Leah Rye",
      link: "https://leguesswho.com/lineup/celestial-spaces-moonwatch",
    },
    {
      date: "2022-10-22 21:00",
      location: "Moira, Utrecht",
      details: "with Hushed Hands",
      link: "https://www.facebook.com/events/1605758329843165",
    },
    {
      date: "2022-10-04 20:00",
      location: "dB's, Utrecht",
      details: "with Acid Mothers Temple",
      link: "https://www.dbstudio.nl/event/acid-mothers-temple-japan/",
      soldOut: true,
    },
    {
      date: "2022-03-25 20:30",
      location: "dB's, Utrecht",
      details: "with Vinyl Williams",
      link: "https://www.dbstudio.nl/event/vinyl-williams-usa-support/",
    },
    {
      date: "2022-03-05 20:30",
      location: "Vechtclub XL Bunker, Utrecht",
    },
    {
      date: "2021-10-31 15:00",
      location: "Living room concert, Utrecht",
      details: "with Coaster",
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
      details: "with Mevrouw Tamara",
    },
    {
      date: "2019-11-27 21:00",
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
          {showList.map((show, idx) => {
            const showDate = dayjs(show.date, "YYYY-MM-DD HH:MM");
            if (showDate < today) {
              return (
                <PastShow key={idx}>
                  {showDate.format("ddd D MMMM YYYY HH:mm")} - {show.location}
                  <br></br>
                  {show.details && <span> {show.details}</span>}
                  {show.soldOut && <span> (sold out)</span>}
                </PastShow>
              );
            } else {
              return (
                <Show key={idx}>
                  {showDate.format("ddd D MMMM YYYY HH:mm")} - {show.location}
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
