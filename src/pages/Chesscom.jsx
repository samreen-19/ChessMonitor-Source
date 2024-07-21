import React, { useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Chesscom = () => {
    const [profileId, setProfileId] = useState('');
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`https://api.chess.com/pub/player/${profileId}/stats`);
            setProfileData(response.data);
        } catch (err) {
            setError('Profile not found or an error occurred.');
            setProfileData(null);
        } finally {
            setLoading(false);
        }
    };

    const calculateStats = () => {
        if (!profileData) return { wins: 0, losses: 0, draws: 0, games: 0 };

        const chessDaily = profileData.chess_daily?.record;
        const chessRapid = profileData.chess_rapid?.record;
        const chessBlitz = profileData.chess_blitz?.record;
        const chessBullet = profileData.chess_bullet?.record;

        const wins = (chessDaily?.win || 0) + (chessRapid?.win || 0) + (chessBlitz?.win || 0) + (chessBullet?.win || 0);
        const losses = (chessDaily?.loss || 0) + (chessRapid?.loss || 0) + (chessBlitz?.loss || 0) + (chessBullet?.loss || 0);
        const draws = (chessDaily?.draw || 0) + (chessRapid?.draw || 0) + (chessBlitz?.draw || 0) + (chessBullet?.draw || 0);
        const games = wins + losses + draws;

        return { wins, losses, draws, games };
    };

    const getChartData = () => {
        const { wins, losses, draws } = calculateStats();

        return {
            labels: ['Wins', 'Losses', 'Draws'],
            datasets: [
                {
                    label: 'Games',
                    data: [wins, losses, draws],
                    backgroundColor: ['#00FF00', '#FF0000', '#FFFF00'],
                    borderColor: ['#00FF00', '#FF0000', '#FFFF00'],
                    borderWidth: 1,
                },
            ],
        };
    };

    return (
        <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-white">
                <h1 className="text-4xl font-bold text-center mb-6">Chess.com Profile Search</h1>
                <div className="flex justify-center mb-8">
                    <img
                        src="https://s.cafebazaar.ir/images/icons/com.chess-53657073-da4c-4a66-bfcd-1deaa29d7cd9_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize"
                        alt="Chess.com"
                        className="w-24 h-24"
                    />
                </div>
                <div className="max-w-md mx-auto mb-12">
                    <input
                        type="text"
                        placeholder="Enter Chess.com Profile ID"
                        value={profileId}
                        onChange={(e) => setProfileId(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                        onClick={handleSearch}
                        className="w-full mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 transition duration-300"
                    >
                        Search
                    </button>
                </div>
                {loading && <p className="text-center">Loading...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
                {profileData && (
                    <div className="bg-gray-900 shadow-md rounded-lg p-8">
                        <h2 className="text-3xl font-semibold text-center mb-4">
                            Profile: {profileData.username}
                        </h2>
                        <div className="flex flex-col items-center mb-6">
                            <div className="w-full sm:w-1/2 px-4 mb-6">
                                <h3 className="text-lg font-semibold mb-2 text-center">Ratings</h3>
                                <ul className="list-disc list-inside text-center">
                                    <li>Rapid: {profileData.chess_rapid?.last?.rating || 'N/A'}</li>
                                    <li>Blitz: {profileData.chess_blitz?.last?.rating || 'N/A'}</li>
                                    <li>Bullet: {profileData.chess_bullet?.last?.rating || 'N/A'}</li>
                                    <li>Daily: {profileData.chess_daily?.last?.rating || 'N/A'}</li>
                                </ul>
                            </div>
                            <div className="w-full sm:w-1/2 px-4 mb-6">
                                <h3 className="text-lg font-semibold mb-2 text-center">Games</h3>
                                <ul className="list-disc list-inside text-center">
                                    <li>Played: {calculateStats().games || 'N/A'}</li>
                                    <li>Wins: {calculateStats().wins || 'N/A'}</li>
                                    <li>Losses: {calculateStats().losses || 'N/A'}</li>
                                    <li>Draws: {calculateStats().draws || 'N/A'}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="max-w-sm mx-auto">
                                <Bar data={getChartData()} options={{ responsive: true, plugins: { legend: { display: false } } }} />
                            </div>
                        </div>
                        <div className="text-center">
                            <Link to={`https://www.chess.com/member/${profileId}`} className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 transition duration-300">
                                View Detailed Stats
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chesscom;
