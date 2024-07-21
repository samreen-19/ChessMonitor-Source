import React, { useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Lichess = () => {
  const [profileId, setProfileId] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://lichess.org/api/user/${profileId}`);
      setProfileData(response.data);
    } catch (err) {
      setError('Profile not found or an error occurred.');
      setProfileData(null);
    } finally {
      setLoading(false);
    }
  };

  const getChartData = () => {
    if (!profileData) return {};

    const wins = profileData.count.win;
    const losses = profileData.count.loss;
    const draws = profileData.count.draw;

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
        <h1 className="text-4xl font-bold text-center mb-6">
          Lichess Profile Search
        </h1>
        <div className="flex justify-center mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/47/Lichess_logo_2019.png"
            alt="Lichess"
            className="w-24 h-24"
          />
        </div>
        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="Enter Lichess Profile ID"
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
                  <li>Bullet: {profileData.perfs.bullet.rating}</li>
                  <li>Blitz: {profileData.perfs.blitz.rating}</li>
                  <li>Rapid: {profileData.perfs.rapid.rating}</li>
                  <li>Classical: {profileData.perfs.classical.rating}</li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 px-4 mb-6">
                <h3 className="text-lg font-semibold mb-2 text-center">Games</h3>
                <ul className="list-disc list-inside text-center">
                  <li>Played: {profileData.count.all}</li>
                  <li>Won: {profileData.count.win}</li>
                  <li>Lost: {profileData.count.loss}</li>
                  <li>Draw: {profileData.count.draw}</li>
                </ul>
              </div>
            </div>
            <div className="mb-6">
              <div className="max-w-sm mx-auto">
                <Bar data={getChartData()} options={{ responsive: true, plugins: { legend: { display: false } } }} />
              </div>
            </div>
            <div className="text-center">
              <Link to={`https://lichess.org/@/${profileId}`} className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 transition duration-300">
                View Detailed Stats
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lichess;
