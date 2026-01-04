import GameCard from './GameCard';

interface Game {
  id: string;
  name: string;
  description: string;
  icon: string;
  available: boolean;
  players: string;
  time: string;
}

interface GamesGridProps {
  games: Game[];
}

export default function GamesGrid({ games }: GamesGridProps) {
  return (
    <section className="relative max-w-7xl mx-auto px-4 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
