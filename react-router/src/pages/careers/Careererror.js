import { Link, useRouteError } from "react-router-dom";

export default function Careererror() {
  const error = useRouteError();
  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.massage}</p>
      <Link to="/">Back to homepage</Link>
    </div>
  );
}
