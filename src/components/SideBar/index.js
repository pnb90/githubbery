import React from 'react'
import { Drawer, List, ListItem, Divider } from '@material-ui/core'

function SideBar() {
  let reactIcon = <img src = "https://cdn.auth0.com/blog/react-js/react.png" height="25" width="25"/>
  
  let emberIcon = <img src = "https://emberjs.com/images/brand/ember_Tomster-Lockup-b368131eb80ecbcbaf2d23fd4cb27295.png" height="25" width="25"/>

  let vueIcon = <img src = "https://vuejs.org/images/logo.png" height="25" width="25"/>

  let angularIcon = <img src = "https://angular.io/assets/images/logos/angular/angular.svg" height="25" width="25"/>

  return(
    <div> 
      <Drawer variant = "permanent">
        <h1>Githubbery</h1>
        <List>
          <ListItem><a href="/angular"> {angularIcon}  Angular</a> </ListItem>
          <ListItem><a href="/ember"> {emberIcon}  Ember </a></ListItem>
          <ListItem><a href="/react"> {reactIcon}  React </a></ListItem>
          <ListItem><a href="/vue"> {vueIcon}  Vue </a></ListItem>
          <Divider />
          <ListItem><a href="/watchers"> Watchers </a> </ListItem>
          <ListItem><a href="/forks"> Forks </a> </ListItem>
          <ListItem><a href="/commits"> Commits </a> </ListItem>

        </List>
      </Drawer>
    </div>
  )
}

export default SideBar