import { Card, CardProps } from "../card/card";
import { motion } from "framer-motion";
import "../../../styles/global.css";

interface cardsCarouselProps {
  apiData: CardProps[] | null;
}

export function CardsCarousel(props: cardsCarouselProps) {
  const { apiData } = props;
  const containerAnimation = {
    animate: {
      y: [0, -1300, 0],
    },
    transition: {
      duration: 80,
      ease: "linear",
      repeat: Infinity,
    },
  };

  const slides = apiData?.map((item) => (
    <div key={item.id}>
      <Card {...item} />
    </div>
  ));

  return (
    <div
      className="verticalCarousel"
      style={{
        overflow: "hidden",
      }}
    >
      <motion.div
        animate={containerAnimation.animate}
        transition={containerAnimation.transition}
      >
        {slides}
      </motion.div>
    </div>
  );
}
