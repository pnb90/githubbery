# GitHubbery

GitHubbery is a dashboard that allows users to compare and contrast Angular, Ember, React, and Vue along various GitHub metrics. Information is available in both table and graph form for ease of use. Additionally, users are allowed to vote on their favorite library. Votes are currently limited to one vote per email and one vote per unique session. 

### Installing
Once cloned from GitHub by running

```
git clone https://github.com/pnb90/githubbery.git
```

cd into "githubbery" and run 

```
npm install
```

This will install the necessary elements to begin the app. After that process is completed, you can then enter

```
npm start
```

This command will start the app on localhost:3000/, where it is ready to use! Enjoy!

## Usage
Users are presented with a dashboard with several graphs and tables to review.
 

## Goals
  - Meet the minimum user requirements
  - Present information in a visually appealing way without being overwhelming
  - Incorporate charts with live updates via websockets

## Challenges
  - GitHub API
  - Balancing Information Overload
  - Time
  - New Database (FireBase)
  - Health/Balance

  I think the first challenge was deciding what information was relevant from GitHub's API, as it offers tons and tons of information, most of which is not useful to someone who needs information about activity. Additionally, there were strange gaps in the API, such as the lack of overall commits per repository, that forced me to implement a workaround function. 
  
  Another challenge was simply time allotted. I am currently working a temporary full-time job to support myself and I am usually exhausted after making myself dinner at night, which unfortunately left little time to code. I was able to code tons over the weekend, but I have not been able to dedicate as much time as I would have liked to this project before the due date. 

  Another issue was balancing the time I would have liked to dedicate to this challenge versus my health. I caught a cold from my new temporary coworkers this week, and oftentimes found myself lacking in enough energy to work late nights to make up for lost time. I also was well-aware if I kept on pushing myself, I would become too ill to work my temporary job and thus lose income, which is not an option for me at this time. 

  Lastly, I was having issues deciding on a database to store the unique emails and session IDs. I was leaning towards creating a quick Rails backend, but was weary of that option as it seemed a bit of an overkill as I needed it to simply store two data sets. My former classmates suggested Firebase for a quick database, and I was able to find a good tutorial, and it has been working well thus far. However, this entire process took about two days to figure out, and I am

## Icebox
  - Testing
  - 

While I am familiar with testing via Jest + React-Testing-Library, I
Currently, the animation that displays the book's title, authors, and publisher, grows and then shrinks. Oftentimes, the wordwrap will also change during this grow and shrink process, which can be not the most aesthetically pleasing.

I was able to attend a talk about an 8th Light employee regarding accessibility, which piqued my interest about accessibility for all users. I have not had the opportunity to ensure that my app is accessible.

## Built With

* [React](https://reactjs.org/) - Frontend Framework
* [Material UI](https://material-ui.com/) - React Framework based on Material Design
* [Jest](https://jestjs.io/) - Javascript Testing Framework
* [React-Testing-Library](https://testing-library.com/) - Testing library used for React components
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js used to make the Google Books API call
* [Styled-Components](https://www.styled-components.com/) - CSS styling for the entire app.

## Authors

* **Phuoc Bui** - [pnb90](https://github.com/pnb90)

## Acknowledgments

Thank you to all the insanely helpful online resources I was able to use, including but not limited to: HackerNoon, FreeCodeCamp, V School, Leigh Halliday, Kent C. Dobbs, Ola from 8th Light who showed me React-Testing-Library, Elizabeth Funk, CSS-Tricks, and endless YouTube Tutorials.face
