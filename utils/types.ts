export interface SportCardProps {
  name: string;
  img: string;
  total_events: number;
  sport_name: string;
  lightMode: boolean;
}

export interface TicketProps {
  img: string;
  name: string;
  date: string;
  day: string;
  time: string;
  address: string;
  button_name: string;
  lightMode: boolean;
}