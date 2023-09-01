function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <p>Welcome to The React Quiz!</p>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui">Let's Start</button>
    </div>
  );
}

export default StartScreen;
