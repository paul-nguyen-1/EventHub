import { Container } from "@mantine/core";
import { CardsCarousel } from "./common/carousel/cardsCarousel";
import { useFetchData } from "./common/util";
import { eventBase } from "./const/apiPaths";

export const Hero = () => {
  const { data } = useFetchData(
    `${eventBase}${import.meta.env.VITE_TICKETMASTER_CONSUMER_TOKEN}`,
  );

  return (
    <>
      <Container>
        <CardsCarousel apiData={data?._embedded?.events || null} />
      </Container>
    </>
  );
};
