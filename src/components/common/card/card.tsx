import { Paper, Text, Title, Button } from "@mantine/core";
import classes from "./card.module.css";
import { Image } from "../../const/interface";

export interface CardProps {
  id: string;
  images: Image[];
  date: string;
  name: string;
  url: string;
}

export function Card(props: CardProps) {
  const { images, name, url } = props;

  console.log(props);
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${images[0].url})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          test
        </Text>
        <Title order={3} className={classes.title}>
          {name}
        </Title>
      </div>
      <Button
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        variant="white"
        color="dark"
      >
        Ticket
      </Button>
    </Paper>
  );
}
