export interface Game {
  id: string;
  name: string;
  description: string;
  icon: string;
  available: boolean;
  players: string;
  time: string;
}

export const GAMES: Game[] = [
  {
    id: 'undercover',
    name: 'Undercover',
    description: 'Find the imposter before it\'s too late.',
    icon: '🕵️',
    available: true,
    players: '4-10 players',
    time: '15-30 min'
  },
  {
    id: 'heads-up',
    name: 'Heads Up',
    description: 'Guess the word on your head.',
    icon: '🐕',
    available: false,
    players: '2-10 players',
    time: '10-20 min'
  },
];
