import { Card, CardProps } from "../card/card";
import { motion } from "framer-motion";
import "../../../styles/global.css";

interface cardsCarouselProps {
  apiData: CardProps[] | null;
  reverse?: boolean;
}

export function CardsCarousel(props: cardsCarouselProps) {
  const { apiData, reverse } = props;

  const containerAnimation = {
    animate: {
      y: reverse
        ? [-1300, 0, -1300] // Reverse: Start at the bottom, move to the top, and return back to bottom
        : [0, -1300, 0], // Default: Start at the top, move to the bottom, and return back to top
    },
    transition: {
      duration: 80,
      ease: "linear",
      repeat: Infinity,
    },
  };

  const slides = apiData?.map((item) => (
    <div key={item.id} className="mb-[25px]">
      <Card {...item} />
    </div>
  ));

  return (
    <div className="verticalCarousel">
      <motion.div
        animate={containerAnimation.animate}
        transition={containerAnimation.transition}
      >
        {slides}
      </motion.div>
    </div>
  );
}
