//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [homeTeamName, setHomeTeamName] = useState("Lions");
  const [awayTeamName, setAwayTeamName] = useState("Tigers");
  const homeTouchdown = event => setHomeScore(homeScore + 7);
  const homeFieldGoal = event => setHomeScore(homeScore + 3);
  const awayTouchDown = event => setAwayScore(awayScore + 7);
  const awayFieldGoal = event => setAwayScore(awayScore + 3);
  const homeName = event => setHomeTeamName(window.prompt("Enter Home Team Name:"));
  const awayName = event => setAwayTeamName(window.prompt("Enter Away Team Name:"));
  const homeStartScore = event => setHomeScore(Number(window.prompt("Enter Home Team Score:")));
  const awayStartScore = event => setAwayScore(Number(window.prompt("Enter Away Team Score:")));
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeTeamName}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{awayTeamName}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__teamName" onClick={homeName}>Home Team Name</button>
          <button className="homeButtons__teamScore" onClick={homeStartScore}>Home Starting Score</button>
          <button className="homeButtons__touchdown" onClick={homeTouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeFieldGoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__teamName" onClick={awayName}>Away Team Name</button>
          <button className="awayButtons__teamScore" onClick={awayStartScore}>Away Starting Score</button>
          <button className="awayButtons__touchdown" onClick={awayTouchDown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayFieldGoal}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}


export default App;
