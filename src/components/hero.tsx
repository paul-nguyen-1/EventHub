import { Container, Flex, Text } from "@mantine/core";
import { CardsCarousel } from "./common/carousel/cardsCarousel";
import { useFetchData } from "./common/util";
import { eventBase } from "./const/apiPaths";

export const Hero = () => {
  const { data } = useFetchData(
    `${eventBase}${import.meta.env.VITE_TICKETMASTER_CONSUMER_TOKEN}`,
  );

  return (
    <>
      <Container className="flex min-w-full">
        <div className="flex justify-center flex-col justify-center">
          <Text>Discover the best</Text>
          <Text>Live Events</Text>
          <Text>
            Use it to create cards, dropdowns, modals and other components that
            require background with shadow
          </Text>
        </div>
        <Flex direction="row">
          <CardsCarousel apiData={data?._embedded?.events} />
          <CardsCarousel apiData={data?._embedded?.events} reverse={true} />
        </Flex>
      </Container>
    </>
  );
};
