import React from 'react'
import { useSetRecoilState } from 'recoil'
import {
  gameIsActiveState,
  gameHasInfiniteAttemptsState,
  gameMaxAttemptsState,
  gamePositionsState
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
import { getBoardPositions } from '../utils/game'

const levelItems = [
  { label: 'Easy (infinity)', value: 'infinity' },
  { label: 'Normal (100)', value: '100' },
  { label: 'Hard (50)', value: '50' }
]

const Setting = () => {
  const setGameIsActive = useSetRecoilState(gameIsActiveState)
  const setGameHasInfiniteAttempts = useSetRecoilState(gameHasInfiniteAttemptsState)
  const setGameMaxAttempts = useSetRecoilState(gameMaxAttemptsState)
  const setGamePositions = useSetRecoilState(gamePositionsState)
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
    setGameIsActive(true)
    setGamePositions(getBoardPositions())
    if (level === 'infinity') {
      setGameHasInfiniteAttempts(false)
    } else {
      setGameHasInfiniteAttempts(true)
      setGameMaxAttempts(Number(attempts || level))
    }
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
