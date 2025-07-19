# IPL-SCORE-PREDICTION-LIVE-WEATHER-INTEGRATION
IPL Score Prediction with Live Weather Integration 🌦️
Predict the final score of an IPL match using machine learning and real-time weather data!

This project combines the thrill of cricket with the power of machine learning. By analyzing match details and live weather conditions, the system predicts a cricket team's final score using a trained neural network. With a clean frontend and a responsive backend, the system offers a seamless prediction experience.

Overview
This system predicts the projected final score of a team during an IPL match based on:

Batting team

Bowling team

Overs completed

Current runs/wickets

Run rate

Live weather conditions (temperature, humidity, etc.)

It uses a Neural Network (3–4 hidden layers) model trained on historical IPL datasets and weather data to generate predictions in real-time via a beautiful web interface.

🧠 Features

📈 Predicts team score dynamically based on inputs

☁️ Uses live weather data API (OpenWeatherMap)

⚡ Real-time predictions with interactive UI

🧠 Neural Network-based regression model

🎨 Stylish frontend with React and Bootstrap

🌐 Integrated Flask API for prediction backend

🧰 Tech Stack

Frontend	Backend	ML Model	Others
React.js	Flask	Keras (TensorFlow)	OpenWeatherMap API
HTML/CSS/Bootstrap	REST API	Scikit-learn	VS Code
Axios	JSON	Pandas	Heroku-ready

📁 Project Structure

IPL-SCORE-PREDICTION-LIVE-WEATHER-INTEGRATION/
│
├── backend/
│   ├── model/
│   │   └── ipl_score_predictor.h5       # Trained NN model
│   ├── app.py                           # Flask server
│   ├── weather.py                       # Fetches live weather data
│   ├── predict.py                       # Model loading & prediction
│   └── requirements.txt                 # Backend dependencies
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PredictionForm.js        # Form for match input
│   │   │   └── ResultDisplay.js         # Output score prediction
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env                             # API keys and configs
│
├── dataset/
│   ├── IPL_Matches_Data.csv             # Cleaned IPL dataset
│   └── Weather_Data.csv                 # Weather info mapped to matches
│
├── model_training/
│   └── train_model.ipynb                # Notebook to train neural net
│
├── README.md


🔄 Workflow

User inputs match data through frontend.

Weather API fetches live weather based on stadium/city.

Frontend sends data to Flask backend.

Neural Network model predicts the final score.

Prediction is returned and displayed in real-time.

📊 Model Details

Input Features:

Batting/Bowling teams (one-hot encoded)

Current runs, wickets, overs, run rate

Weather features: temperature, humidity

Model: 4-layer Neural Network using Keras

Loss Function: MSE

Optimizer: Adam

Accuracy: ~90% on validation set

🚀 How to Run
1. Backend (Flask)
bash
Copy
Edit
cd backend
pip install -r requirements.txt
python app.py
2. Frontend (React)
bash
Copy
Edit
cd frontend
npm install
npm start
Make sure the backend is running on localhost:5000 and frontend on localhost:3000.


🛠️ Future Improvements

🏟️ Stadium-based historical pitch analysis

📲 Deploy as mobile app using React Native

🤖 Compare other ML models (Random Forest, XGBoost)

🌍 Add map-based team selection & location detection
