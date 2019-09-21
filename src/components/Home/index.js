import React, { useState, useEffect } from "react";
import axios from "axios";
import BarChart from '../BarChart'
import TableComponent from '../TableComponent'


function Home() {
  const [reactStargazers, setReactStargazers] = useState();
  const [reactWatchers, setReactWatchers] = useState();
  const [reactTotalCommits, setReactTotalCommits] = useState(0)
  const [angularStargazers, setAngularStargazers] = useState();
  const [angularWatchers, setAngularWatchers] = useState();
  const [angularTotalCommits, setAngularTotalCommits] = useState(0)
  const [emberStargazers, setEmberStargazers] = useState();
  const [emberWatchers, setEmberWatchers] = useState();
  const [emberTotalCommits, setEmberTotalCommits] = useState(0)
  const [vueStargazers, setVueStargazers] = useState();
  const [vueWatchers, setVueWatchers] = useState();
  const [vueTotalCommits, setVueTotalCommits] = useState(0);
  const [reactForks, setReactForks] = useState(0)
  const [angularForks, setAngularForks] = useState(0)
  const [emberForks, setEmberForks] = useState(0)
  const [vueForks, setVueForks] = useState(0)
  const [paginationData, setPaginationData] = useState()
  const [superTotal, setSuperTotal] = useState([])

  // const jsLibraries = [
  //   {owner: "facebook",
  //   repo: "react"
  //   },
  //   {owner: "angular",
  //   repo: "angular.js"
  //   },
  //   {owner: "emberjs",
  //   repo: "ember.js"
  //   },
  //   {owner: "vuejs",
  //   repo: "vue"
  //   },
  // ]
  
  var github = "https://api.github.com/repos/"
  var githubHeader = "application/vnd.github.v3+json"

  useEffect(() => {

  })

  useEffect(() => {
    axios
      .all(
        [
        axios.get( github + "facebook/react", {
          headers: { Accept: githubHeader }}),
        axios.get( github + "angular/angular.js", {
          headers: { Accept: githubHeader }}),
        axios.get( github + "emberjs/ember.js", {
          headers: { Accept: githubHeader }}),
        axios.get( github + "vuejs/vue", {
          headers: { Accept: githubHeader }}),
        axios.get( github + "vuejs/vue/contributors?page=1&per_page=100", {
          headers: { Accept: githubHeader }}),
        axios.get( github + "angular/angular.js/contributors?page=1&per_page=100", {
          headers: { Accept: githubHeader }}),
        axios.get( github + "facebook/react/contributors?page=1", {
          headers: { Accept: githubHeader }}),
        axios.get( github + "emberjs/ember.js/contributors?page=1&per_page=100", {
          headers: { Accept: githubHeader }}),
      ])
      .then(axios.spread((reactStats, angularStats, emberStats, vueStats, vueCommits, angularCommits, reactCommits, emberCommits) => {
        setReactStargazers(reactStats.data.stargazers_count)
        setAngularStargazers(angularStats.data.stargazers_count)
        setEmberStargazers(emberStats.data.stargazers_count)
        setVueStargazers(vueStats.data.stargazers_count)
        setReactWatchers(reactStats.data.watchers_count)
        setAngularWatchers(angularStats.data.watchers_count)
        setEmberWatchers(emberStats.data.watchers_count)
        setVueWatchers(vueStats.data.watchers_count)
        setReactForks(reactStats.data.forks_count)
        setAngularForks(angularStats.data.forks_count)
        setEmberForks(emberStats.data.forks_count)
        setVueForks(vueStats.data.forks_count)
        setVueTotalCommits(vueCommits.data.reduce((sum, object) => sum + object.contributions, 0))
        setAngularTotalCommits(angularCommits.data.reduce((sum, object) => sum + object.contributions, 0))
        setReactTotalCommits(reactCommits.data.reduce((sum, object) => sum + object.contributions, 0))
        setEmberTotalCommits(emberCommits.data.reduce((sum, object) => sum + object.contributions, 0))

      })
    )}, [])    

    const watcherData = {
      labels: ["Angular", "Ember", "React", "Vue"],
      datasets: [
        {
          label: 'Watchers',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [angularWatchers, emberWatchers, reactWatchers, vueWatchers]
        }
      ]
    };

    const forkData = {
      labels: ["Angular", "Ember", "React", "Vue"],
      datasets: [
        {
          label: 'Forks',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [angularForks, emberForks, reactForks, vueForks]
        }
      ]
    };

    const commitData = {
      labels: ["Angular", "Ember", "React", "Vue"],
      datasets: [
        {
          label: 'Commits',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [angularTotalCommits, emberTotalCommits, reactTotalCommits, vueTotalCommits]
        }
      ]
    };

    useEffect(() => {
      axios
      .get( github + "facebook/react/contributors")
      .then(response => setPaginationData(response.headers.link))
    }, [])

    const clickHandler = () => {
      var regexPattern = /.\d(?=>; rel="last")/
      var finalPage = parseInt(regexPattern.exec(paginationData)[0])
      var pageTotal = 0 
      
      for(let i = 1; i <= finalPage; i++ ) {
        axios
        .get(github + "facebook/react/contributors?page=" + i)
        .then(response => 
          pageTotal = response.data.reduce((sum, object) => sum + object.contributions, 0))
        .then(console.log(pageTotal))
      }
    }

  return (
    <div>
    <TableComponent
       reactWatchers = { reactWatchers }
       angularWatchers = { angularWatchers }
       emberWatchers = { emberWatchers }
       vueWatchers = { vueWatchers }
       reactStargazers = { reactStargazers }
       angularStargazers = { angularStargazers }
       emberStargazers = { emberStargazers }
       vueStargazers = { vueStargazers }
       reactForks = { reactForks }
       angularForks = { angularForks }
       emberForks = { emberForks }
       vueForks = { vueForks }
       reactTotalCommits = { reactTotalCommits }
       angularTotalCommits = { angularTotalCommits }
       emberTotalCommits = { emberTotalCommits }
       vueTotalCommits = { vueTotalCommits }
    />
      <button onClick={clickHandler}> +++ </button>

      <BarChart 
        data = {watcherData}
        chartLabel = {"Watcher Statistics"}
      />

      <BarChart 
        data = {forkData}
        chartLabel = {"Fork Statistics"}
      />

      <BarChart 
        data = {commitData}
        chartLabel = {"Commit Statistics"}
      />