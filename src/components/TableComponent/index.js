import React from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core"

function TableComponent(props) {
  return(
    <Table>
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>React</TableCell>
          <TableCell>Angular</TableCell>
          <TableCell>Ember</TableCell>
          <TableCell>Vue</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell> Watchers </TableCell>
          <TableCell> {props.reactWatchers} </TableCell>
          <TableCell> {props.angularWatchers} </TableCell>
          <TableCell> {props.emberWatchers} </TableCell>
          <TableCell> {props.vueWatchers} </TableCell>
        </TableRow>
        <TableRow>
          <TableCell> Stars </TableCell>
          <TableCell> {props.reactStargazers} </TableCell>
          <TableCell> {props.angularStargazers} </TableCell>
          <TableCell> {props.emberStargazers} </TableCell>
          <TableCell> {props.vueStargazers} </TableCell>
        </TableRow>
        <TableRow>
          <TableCell> Forks </TableCell>
          <TableCell> {props.reactForks} </TableCell>
          <TableCell> {props.angularForks} </TableCell>
          <TableCell> {props.emberForks} </TableCell>
          <TableCell> {props.vueForks} </TableCell>
        </TableRow>
        <TableRow>
          <TableCell> Commits </TableCell>
          <TableCell> {props.reactTotalCommits} </TableCell>
          <TableCell> {props.angularTotalCommits} </TableCell>
          <TableCell> {props.emberTotalCommits} </TableCell>
          <TableCell> {props.vueTotalCommits} </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default TableComponent