import { useEffect, useState } from "react";
import "./../styles/App.css";

export default function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="section left">
          <textarea
            type="text"
            className="textarea"
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div className="section right preview">{data}</div>
        )}
      </div>
    </div>
  );
}
