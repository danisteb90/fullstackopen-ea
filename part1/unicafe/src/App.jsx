import { useState } from "react";

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positiveFeedback = (good / total) * 100;

  return (
    <>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <h2>Statics</h2>
          <table>
            <tbody>
              <StatisticsLine text="Good" value={good} />
              <StatisticsLine text="Neutral" value={neutral} />
              <StatisticsLine text="Bad" value={bad} />
              <StatisticsLine text="Total" value={total} />
              <StatisticsLine
                text="Average"
                value={total === 0 ? 0 : average.toFixed(2)}
              />
              <StatisticsLine
                text="Positive Feedback"
                value={total === 0 ? 0 : positiveFeedback.toFixed(2)}
              />
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Anecdotes = ({ anecdotes, selected, handleRandom, handleVote }) => {
  return (
    <>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <Button onClick={handleRandom} text="Next Anecdote" />
      <Button onClick={handleVote} text="Vote" />
    </>
  );
};

const FavoriteAnecdote = ({ anecdotes, votes }) => {
  const maxVote = Math.max(...votes);
  console.log(maxVote);
  const maxVoteAnecdoteIndex = votes.indexOf(maxVote);
  console.log(maxVoteAnecdoteIndex);
  return (
    <>
      <h2>Favorite Anecdote</h2>
      <p>
        {anecdotes[maxVoteAnecdoteIndex]} <strong>with {maxVote} votes</strong>
      </p>
    </>
  );
};

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  console.log(votes);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  const handleRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  return (
    <>
      <h1>Please Give us a Feedback</h1>
      <div>
        <Button onClick={handleGood} text="Good" />
        <Button onClick={handleNeutral} text="Neutral" />
        <Button onClick={handleBad} text="Bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
      <Anecdotes
        anecdotes={anecdotes}
        selected={selected}
        handleRandom={handleRandom}
        handleVote={handleVote}
      />
      <FavoriteAnecdote anecdotes={anecdotes} votes={votes} />
    </>
  );
}

export default App;
