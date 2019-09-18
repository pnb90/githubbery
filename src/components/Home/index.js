import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {
  const [reactStargazers, setReactStargazers] = useState()
  const [reactWatchers, setReactWatchers] = useState()

  useEffect()
  useEffect(
    axios
      .get("https://api.github.com/repos/facebook/react", {headers: {Accept: "application/vnd.github.v3+json"}})
      .then(response => {
        setReactStargazers(response.data.stargazers_count)
        setReactWatchers(response.data.watchers)
      })
  )
  

  return(
    <div>
      Hey there
      <div>
        React Stargazers: {reactStargazers}
      </div>
      <div>
        React Watchers: {reactWatchers}
      </div>
    </div>
  )
}

export default Home