import React, {useState} from 'react'
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, TextField } from '@material-ui/core'
import Cookies from 'js-cookie'
import shortid from 'shortid'
import firebase from '../../firebase'
import axios from 'axios'

function VotingSystem() {
  const [jsLibrary, setjsLibrary] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setjsLibrary(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const votesRef = firebase.database().ref('votes')
    const vote = {
      email: {email},
      vote: {jsLibrary},
      sessionID: shortid.generate()
    }
    votesRef.push(vote)

    axios
      .get("https://githubbery.firebaseio.com/")
      .then(response => console.log(response))

    // console.log("This is the name cookie")
    // Cookies.set("sessionID", shortid.generate())
    // console.log(Cookies.get())
    // Cookies.set("sessionID", shortid.generate())
    // console.log(Cookies.get())
  }

  return(
    <form onSubmit={handleSubmit}>
      <FormControl>
        <RadioGroup 
          aria-label="position" 
          name="position" 
          onChange={handleChange} 
          row
        >
          <FormControlLabel
            value="Angular"
            control={<Radio color="primary" />}
            label="Angular"
            labelPlacement="top"
            onClick={handleChange}
          />
          <FormControlLabel
            value="Ember"
            control={<Radio color="primary" />}
            label="Ember"
            labelPlacement="top"
            onClick={handleChange}
          />
          <FormControlLabel
            value="React"
            control={<Radio color="primary" />}
            label="React"
            labelPlacement="top"
            onClick={handleChange}
          />
          <FormControlLabel
            value="Vue"
            control={<Radio color="primary" />}
            label="Vue"
            labelPlacement="top"
            onClick={handleChange}
          />
        </RadioGroup>
        <TextField
          label="email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          onChange = {(event) => setEmail(event.target.value)}
        />
        <Button color="primary" type="submit">
          Submit
        </Button>
        </FormControl>
    </form>
  )
}

export default VotingSystem