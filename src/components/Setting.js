import React from 'react'
import { useSetRecoilState } from 'recoil'
import {
  gamePositionsState,
  gameIsActiveState,
  gameMaxShotsNumberState,
  gameShipsState
} from '../store/game/atoms'
import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  FormControl,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@material-ui/core'
import { getPositions, getRandomShips } from '../utils/game'

const levelItems = [
  { label: 'Easy (infinity)', value: '-1' },
  { label: 'Normal (100)', value: '100' },
  { label: 'Hard (50)', value: '50' }
]

const Setting = () => {
  const setGamePositions = useSetRecoilState(gamePositionsState)
  const setGameIsActive = useSetRecoilState(gameIsActiveState)
  const setMaxShotsNumber = useSetRecoilState(gameMaxShotsNumberState)
  const setGameShips = useSetRecoilState(gameShipsState)
  const [attempts, setAttempts] = React.useState('')
  const [level, setLevel] = React.useState('')

  const handleAttempts = (event) => {
    setAttempts(parseFloat(event.target.value) || '')
    setLevel('')
  }

  const handleLevel = (event) => {
    setAttempts('')
    setLevel(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setGamePositions(getPositions())
    setGameIsActive(true)
    setGameShips(getRandomShips())
    setMaxShotsNumber(Number(attempts || level))
  }

  return (
    <Paper>
      <Box p={3} textAlign="center" maxWidth={400}>
        <Typography variant="h6" gutterBottom>SETTING</Typography>
        <Divider />
        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset">
            <TextField
              placeholder="Enter attempts"
              variant="outlined"
              value={attempts}
              onChange={handleAttempts}
            />
            <Box py={3}>
              <FormLabel component="legend">- or -</FormLabel>
              <RadioGroup
                aria-label="level"
                name="level"
                value={level}
                onChange={handleLevel}
              >
                {levelItems.map(item => (
                  <FormControlLabel
                    key={item.value}
                    value={item.value}
                    control={<Radio />}
                    label={item.label}
                  />
                ))}
              </RadioGroup>
            </Box>

            <Button
              type="submit"
              variant="outlined"
              color="primary"
              size="large"
              disabled={!attempts && !level}
            >
              Play Now
            </Button>
          </FormControl>
        </form>
      </Box>
    </Paper>
  )
}

export default Setting
