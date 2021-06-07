import { useRecoilValue } from 'recoil'
import { gameGamesState } from '../store/game/atoms'
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

const Games = () => {
  const games = useRecoilValue(gameGamesState)

  return (
    <Box maxWidth={980}>
      <TableContainer component={Paper}>
        <Table aria-label="games">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Shots allowed</TableCell>
              <TableCell align="right">Shots played</TableCell>
              <TableCell align="right">Hits</TableCell>
              <TableCell align="right">Downed ships</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {games.map((game, index) => (
              <TableRow key={game.id}>
                <TableCell component="th" scope="row">{index + 1}</TableCell>
                <TableCell align="right">{game.maxShotsNumber}</TableCell>
                <TableCell align="right">{game.numberOfShotsPlayed}</TableCell>
                <TableCell align="right">{game.hits}</TableCell>
                <TableCell align="right">{game.downedShipsNumber}</TableCell>
                <TableCell align="right">{game.date.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Games
