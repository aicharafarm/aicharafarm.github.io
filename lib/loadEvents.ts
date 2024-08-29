import fs from 'fs';
import path from 'path';
import { parse } from 'yaml';
import { isBefore, parseISO, subDays } from 'date-fns';

interface Event {
  date: string;
  title: string;
  description: string;
}

export const loadEvents = (): Event[] => {
  const filePath = path.join(process.cwd(), 'lib', 'events.yaml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = parse(fileContents);

  const today = new Date();
  const filteredEvents = data.events.filter((event: Event) => {
    const eventDate = parseISO(event.date);
    return isBefore(today, subDays(eventDate, 1));
  });

  return filteredEvents;
};
