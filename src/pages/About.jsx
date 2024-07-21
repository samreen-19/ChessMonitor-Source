import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-5">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Chess</h1>
        <p className="text-gray-600 mb-6">
          Chess is a centuries-old game that combines strategy, skill, and intellect. It's a game that has captivated people around the world and continues to be a popular pastime and competitive sport.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">History of Chess</h2>
            <p className="text-gray-600">
              Chess originated in northern India in the 6th century AD and spread to Persia. It became known as "shatranj" in Arabic and later evolved into the game we know today during the Middle Ages in Europe.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Basic Rules</h2>
            <p className="text-gray-600">
              Chess is played on an 8x8 grid. Each player starts with 16 pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns. The objective is to checkmate the opponent's king.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Chess Notation</h2>
            <p className="text-gray-600">
              Chess notation is a system for recording chess moves. The most common form, algebraic notation, uses letters and numbers to describe each move, making it easy to follow and analyze games.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Famous Players</h2>
            <p className="text-gray-600">
              Some of the most famous chess players include Magnus Carlsen, Garry Kasparov, Bobby Fischer, and Judit Polgar. These players have left an indelible mark on the history of chess with their exceptional skills and achievements.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Modern Chess</h2>
            <p className="text-gray-600">
              Today, chess is played both over-the-board and online. Platforms like Lichess and Chess.com have made it easy for players of all levels to play, learn, and improve their skills from anywhere in the world.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Benefits of Playing Chess</h2>
            <p className="text-gray-600">
              Chess improves cognitive skills such as problem-solving, memory, and critical thinking. It also teaches patience, perseverance, and strategic planning, making it a valuable educational tool.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
