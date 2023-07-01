import { useEffect, useState } from "react";
import "./App.css";
import Job from "./components/Job";

function App() {
  const [jobData, setJobData] = useState();
  const [jobs, setJobs] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJobs = async () => {
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/jobstories.json"
      );
      const data = await response.json();
      setJobData(data.slice(0, 6));
      console.log(data);
      let detailedJobs = [];
      if (jobData != null) {
        jobData.forEach((id) => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then((res) => res.json())
            .then((data) => detailedJobs.push(data));
        });
        console.log(detailedJobs);
        setJobs(detailedJobs);
        setLoading(false);
      }
    };
    getJobs();
  }, []);

  return (
    <div className="App">
      {loading && <h1>loading</h1>}
      {jobs && jobs.map((job) => <Job job={job} />)}
    </div>
  );
}

export default App;


