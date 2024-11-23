import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, rem } from "@mantine/core";
import { Card, CardProps } from "../card/card";

interface cardsCarouselProps {
  apiData: CardProps[] | null;
}

export function CardsCarousel(props: cardsCarouselProps) {
  const { apiData } = props;
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = apiData?.map((item) => (
    <Carousel.Slide key={item.id}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: "100%", sm: "33.33333%" }}
      slideGap={{ base: rem(2), sm: "xl" }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      loop
      withIndicators
      px={{ base: 0, md: 50 }}
    >
      {slides}
    </Carousel>
  );
}
