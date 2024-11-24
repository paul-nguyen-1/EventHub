import { Paper, Text, Title, Button } from "@mantine/core";
import classes from "../../../styles/card.module.css";
import { Image, TicketStartData } from "../../const/interface";
import { formatDate, formatTime } from "../util";

export interface CardProps {
  id: string;
  images: Image[];
  dates: TicketStartData;
  name: string;
  url: string;
}

export function Card(props: CardProps) {
  const { images, name, url, dates } = props;
  const startDate = new Date(
    `${dates.start.localDate}T${dates.start.localTime}`,
  );

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${images[0].url})`, display: "flex" }}
      className={classes.card}
    >
      <div>
        <div className={classes.date} style={{ display: "flex" }}>
          <Text size="sm">{formatDate(startDate)}</Text>
          <Text size="sm">{formatTime(startDate)}</Text>
        </div>
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
