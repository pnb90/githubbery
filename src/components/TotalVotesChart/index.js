import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import firebase from '../../firebase'

function TotalVotesChart(props) {
  
  const [emails, setEmails] = useState([])
  const [angularVotes, setAngularVotes] = useState(0)
  const [emberVotes, setEmberVotes] = useState(0)
  const [reactVotes, setReactVotes] = useState(0)
  const [vueVotes, setVueVotes] = useState(0)

  useEffect(() => {
    const votesRef = firebase.database().ref('votes')
    votesRef.on('value', (snapshot) => {
      let votes = snapshot.val()
      for (let vote in votes) {
        let votingEmail = votes[vote].email
        let votingLibrary = votes[vote].vote.jsLibrary
  
        setEmails(oldEmails => [...oldEmails, votingEmail])
        if(votingLibrary === "Angular") {
          setAngularVotes(angularVotes + 1)
        } else if (votingLibrary === "Ember") {
          setEmberVotes(emberVotes + 1)
        } else if (votingLibrary === "React") {
          setReactVotes(reactVotes + 1)
        } else if (votingLibrary === "Vue") {
          setVueVotes(vueVotes + 1)
        }
      }
    })
  }, [])

  const data = () => ({
    labels: [
      'Angular',
      'Ember',
      'React',
      'Vue'
    ],
    datasets: [{
      data: [angularVotes, emberVotes, reactVotes, vueVotes],
      backgroundColor: props.backgroundColors
    }]
  });

  return (
    <div>
      <h2>Dynamicly refreshed Doughnut Example</h2>
      <Doughnut data={data} />
      <div>
      </div>
    </div>
  )
}

export default TotalVotesChart