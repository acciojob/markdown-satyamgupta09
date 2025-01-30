import { useEffect, useState } from "react";
// import "./../styles/App.css";

export default function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 1000);
  //   return () => clearTimeout(timer);
  // }, []);
  handleChange = (e) => {
    setData(e.target.value);
    // setLoading(false);
  };

  return (
    <div className="app">
      <textarea className="textarea" onChange={handleChange} />
        <div className="preview">{data}</div>
    </div>
  );
}
