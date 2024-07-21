import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    useEffect(() => {
        document.title = "ChessMonitor - Home";
    }, []);

    return (
        <div className="min-h-screen bg-green-100">
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center py-16 sm:py-20 lg:py-24">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Welcome to ChessMonitor!
                        </h1>
                        <img src="https://i.pinimg.com/originals/5e/45/c3/5e45c3f6445fba750c3b4776c7a298fb.gif" className="mx-auto mt-8 mb-12" />

                        {/* Introduction paragraphs */}
                        <div className="max-w-3xl mx-auto text-justify">
                            <p>
                                Welcome to ChessMonitor, your ultimate source for all things related to chess! Whether you're a grandmaster or just starting out, we have something for you. Dive into our articles, rankings, FAQs, and player profiles to elevate your chess game. ChessMonitor is your gateway to the world of chess excellence and learning. Discover and follow your favorite players on Lichess and Chess.com, track their ratings, wins, and losses across different variants. ChessMonitor is where chess enthusiasts connect and thrive!
                            </p>
                        </div>

                    </div>

                    <div className="mb-12 px-20">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center underline">Explore Top Players</h2>
                        <div className="flex justify-between">
                            <div className="w-1/2 px-10">
                                <h3 className="text-lg font-semibold mb-4 text-center">Current World Champion</h3>
                                <a href="https://en.wikipedia.org/wiki/Ding_Liren" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-white rounded-lg shadow-md p-4 flex cursor-pointer">
                                        <div className="ml-4">
                                            <p className="font-semibold">Ding Liren</p>
                                            <p className="text-gray-500">Grandmaster</p>
                                            <p className="text-gray-500">Classical rating: 2745</p>
                                            <p className="text-gray-500">Country: China</p>
                                        </div>
                                    </div>
                                </a>
                                {/* Male leaderboard image */}
                                <div className="mt-4 text-center px-20 py-10">
                                    <a href="https://2700chess.com">
                                        <img src="https://2700chess.com/files/topten.png" alt="Top Ten Players" title="Top Ten Players" />
                                    </a>
                                </div>
                            </div>
                            <div className="w-1/2 px-10">
                                <h3 className="text-lg font-semibold mb-4 text-center">Current Female World Champion</h3>
                                <a href="https://en.wikipedia.org/wiki/Ju_Wenjun" target="_blank" rel="noopener noreferrer">
                                    <div className="bg-white rounded-lg shadow-md p-4 flex cursor-pointer">
                                        
                                        <img src="https://images.chesscomfiles.com/uploads/v1/news/1256143.3bd36cc8.668x375o.aadf9355e5f2@2x.png" alt="Female Player" className="w-24 h-24 mb-2 rounded-full" />
                                        
                                        <div className="ml-4">
                                            <p className="font-semibold">Ju Wenjun</p>
                                            <p className="text-gray-500">Grandmaster</p>
                                            <p className="text-gray-500">Classical rating: 2566</p>
                                            <p className="text-gray-500">Country: China</p>
                                        </div>
                                    </div>
                                </a>
                                
                                <div className="mt-4 text-center px-20 py-10">
                                    <a href="https://2700chess.com/women" target="_blank" rel="noopener noreferrer">
                                        <img src="https://2700chess.com/files/topten_women.png" alt="Top Ten Women Players" title="Top Ten Women Players" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12 px-4 sm:px-6 lg:px-8">
                        <h2 className="py-10 text-3xl font-semibold text-gray-900 mb-4 text-center underline">
                            Discover players and stay updated!
                        </h2>
                        <div className="flex justify-center gap-8">
                            
                            <div className="flex items-center">
                                <img
                                    src="https://avatars.githubusercontent.com/u/577023?s=280&v=4"
                                    alt="Chess.com"
                                    className="w-24 h-24 rounded-full mr-4"
                                />
                                <Link to="/chesscomid"
                                    rel="noopener noreferrer"
                                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-md shadow-md transition duration-300 ease-in-out"
                                >
                                    Chess.com Profile
                                </Link>
                            </div>

                            {/* Lichess Profile Search */}
                            <div className="flex items-center">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/4/47/Lichess_logo_2019.png"
                                    alt="Lichess"
                                    className="w-24 h-24 mr-4"
                                />
                                <Link to="/lichessid"
                                    rel="noopener noreferrer"
                                    className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-md shadow-md transition duration-300 ease-in-out"
                                >
                                    Lichess Profile
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Home;
