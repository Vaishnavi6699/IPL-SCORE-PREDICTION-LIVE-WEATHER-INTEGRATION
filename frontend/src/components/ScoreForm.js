import React, { useState } from 'react';
import axios from 'axios';
import './FormStyle.css';

const teams = [
  { name: "Chennai Super Kings", emoji: "🟡" },
  { name: "Mumbai Indians", emoji: "🔵" },
  { name: "Royal Challengers Bangalore", emoji: "🔴" },
  { name: "Kolkata Knight Riders", emoji: "🟣" },
  { name: "Rajasthan Royals", emoji: "🧿" },
  { name: "Delhi Capitals", emoji: "🔷" },
  { name: "Sunrisers Hyderabad", emoji: "🟠" },
  { name: "Lucknow Super Giants", emoji: "⚡" },
  { name: "Gujarat Titans", emoji: "💎" },
  { name: "Punjab Kings", emoji: "👑" }
];

const venues = [
  "Wankhede Stadium", "Eden Gardens", "Chinnaswamy Stadium",
  "Narendra Modi Stadium", "Arun Jaitley Stadium", "M. A. Chidambaram Stadium"
];

export default function ScoreForm({ setResult }) {
  const [formData, setFormData] = useState({
    batting_team: '',
    bowling_team: '',
    venue: '',
    current_score: '',
    balls_left: '',
    wickets_left: '',
    crr: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/predict", formData);
    setResult(res.data);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <select name="batting_team" onChange={handleChange} required>
        <option value="">Select Batting Team</option>
        {teams.map((team, idx) => (
          <option key={idx} value={team.name}>
            {team.emoji} {team.name}
          </option>
        ))}
      </select>

      <select name="bowling_team" onChange={handleChange} required>
        <option value="">Select Bowling Team</option>
        {teams.map((team, idx) => (
          <option key={idx} value={team.name}>
            {team.emoji} {team.name}
          </option>
        ))}
      </select>

      <select name="venue" onChange={handleChange} required>
        <option value="">Select Venue</option>
        {venues.map((venue, idx) => (
          <option key={idx} value={venue}>{venue}</option>
        ))}
      </select>

      <input type="number" name="current_score" placeholder="Current Score" onChange={handleChange} required />
      <input type="number" name="balls_left" placeholder="Balls Left" onChange={handleChange} required />
      <input type="number" name="wickets_left" placeholder="Wickets Left" onChange={handleChange} required />
      <input type="number" name="crr" step="0.1" placeholder="Current Run Rate" onChange={handleChange} required />

      <button type="submit">Predict Score</button>
    </form>
  );
}
