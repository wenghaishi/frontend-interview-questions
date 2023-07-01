# Frontend-interview-questions

## Nested API challenge:

Build a job board that displays the latest job postings fetched from the Hacker News API, with each posting displaying the job title, poster, and date posted.

<br/>
<img width="300" alt="job-board-example" src="https://github.com/wenghaishi/frontend-interview-questions/assets/74546450/d8684d2f-a296-4f2c-9ddc-6bbea847eda9">
<br />
<br />

Requirements:
The page should show 6 jobs on initial load with a button to load more postings.
Clicking on the "Load more" button will load the next page of 6 postings. The button does not appear if there aren't any more postings to load.
If there's a url field returned for the job details, make the job title a link that opens the job details page in a new window when clicked.
The timestamp can be formatted in any way you like.
API
Hacker News has a public API to fetch jobs by Y Combinator companies:
<br/>
<br/>
First, fetch a list of job posting IDs.
<br/>
URL: https://hacker-news.firebaseio.com/v0/jobstories.json
<br/>
Sample response:
```json
[35908337, 35904973, 35900922, 35893439, 35890114, 35880345]
```
<br/>
Then, fetch job posting details given its ID.

URL: https://hacker-news.firebaseio.com/v0/item/{id}.json
<br />
Sample response:
```json
{
  "by": "jamilbk",
  "id": 35908337,
  "score": 1,
  "time": 1683838872,
  "title": "Firezone (YC W22) is hiring Elixir and Rust engineers",
  "type": "job",
  "url": "https://www.ycombinator.com/companies/firezone/jobs"
}
```
