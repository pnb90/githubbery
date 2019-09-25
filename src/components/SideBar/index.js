import React from 'react'
import { Drawer, List, ListItem, Divider } from '@material-ui/core'

function SideBar() {
  let reactIcon = <img src = "https://cdn.auth0.com/blog/react-js/react.png" height="25" width="25"/>
  
  let emberIcon = <img src = "https://emberjs.com/images/brand/ember_Tomster-Lockup-b368131eb80ecbcbaf2d23fd4cb27295.png" height="25" width="25"/>

  let vueIcon = <img src = "https://vuejs.org/images/logo.png" height="25" width="25"/>

  let angularIcon = <img src = "https://angular.io/assets/images/logos/angular/angular.svg" height="25" width="25"/>




  return(
    <div> 
      <Drawer
        variant = "permanent"
      >
        <h1>Githubbery</h1>
        <List>
          <ListItem> {angularIcon}  Angular</ListItem>
          <ListItem> {emberIcon}  Ember</ListItem>
          <ListItem> {reactIcon}  React</ListItem>
          <ListItem> {vueIcon}  Vue</ListItem>
          <Divider />
          <ListItem> Watchers </ListItem>
          <ListItem> Forks </ListItem>
          <ListItem> Commits </ListItem>

        </List>
      </Drawer>
    </div>
  )
}

export default SideBar