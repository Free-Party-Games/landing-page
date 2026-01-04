import { Users } from 'lucide-react';

interface Game {
  id: string;
  name: string;
  description: string;
  icon: string;
  available: boolean;
  players: string;
  time: string;
}

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div
      className={`doodle-card p-6 ${!game.available ? 'opacity-60' : ''}`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="text-6xl">{game.icon}</div>
        <div className="flex-1">
          <h3 className="text-2xl font-black text-gray-900 mb-1">
            {game.name}
          </h3>
          <div className="h-1 w-20 bg-yellow-400 rounded-full mb-2"></div>
        </div>
      </div>

      <p className="text-gray-700 font-bold mb-4 min-h-[48px]">
        {game.description}
      </p>

      <div className="flex items-center gap-3 mb-4 text-sm text-gray-600 font-bold">
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{game.players}</span>
        </div>
        <div>•</div>
        <div>{game.time}</div>
      </div>

      {game.available ? (
        <a
          href={`/${game.id}`}
          className="doodle-btn bg-green-400 text-gray-900 w-full text-center block"
        >
          Play
        </a>
      ) : (
        <div className="doodle-btn bg-gray-300 text-gray-600 w-full text-center cursor-not-allowed">
          Coming Soon
        </div>
      )}
    </div>
  );
}
