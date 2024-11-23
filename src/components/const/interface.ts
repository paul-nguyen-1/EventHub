export interface Image {
  url?: string;
}

export interface TicketStartData {
  start: TicketDates;
}

export interface TicketDates {
  localDate: string;
  localTime: string;
}
