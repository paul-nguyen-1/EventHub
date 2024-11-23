import { CardsCarousel } from "../common/carousel/cardsCarousel";
import { useFetchData } from "../common/util";
import { eventBase } from "../const/apiPaths";

export const Home = () => {
  const { data } = useFetchData(
    `${eventBase}${import.meta.env.VITE_TICKETMASTER_CONSUMER_TOKEN}`,
  );
  
  return (
    <>
      <CardsCarousel apiData={data?._embedded?.events || null}/>
    </>
  );
};
