import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'

const rows = [
  { downedShips: '6/10', score: 870, date: '2021.05.01 08:23' },
  { downedShips: '10/10', score: 1000, date: '2021.05.01 10:21' },
  { downedShips: '3/10', score: 250, date: '2021.05.01 12:23' }
]

const Games = () => {
  return (
    <Box maxWidth={980}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Downed ships</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">{index + 1}</TableCell>
                <TableCell align="right">{row.downedShips}</TableCell>
                <TableCell align="right">{row.score}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Games
