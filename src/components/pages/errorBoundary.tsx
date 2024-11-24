import "../../styles/errorBoundary.css";

export const ErrorBoundary = () => {
  return (
    <div className="error-page">
      <div className="noise"></div>
      <div className="overlay"></div>
      <div className="terminal">
        <h1>
          Error <span className="errorcode">404</span>
        </h1>
        <p className="output">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <p className="output">
          Please try to <a href="/">go back</a> or{" "}
          <a href="/" style={{textDecoration:"underline"}}>return to the homepage</a>.
        </p>
        <p className="output">Good luck.</p>
      </div>
    </div>
  );
};
