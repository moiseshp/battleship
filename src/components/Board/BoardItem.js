import React from 'react'
import PropTypes from 'prop-types'
import GpsFixedIcon from '@material-ui/icons/GpsFixed'
import CloseIcon from '@material-ui/icons/Close'
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat'
import StyledButton from './StyledButton'

const items = [
  { status: 'none', color: 'default', icon: <GpsFixedIcon fontSize="inherit" /> },
  { status: 'error', color: 'primary', icon: <CloseIcon fontSize="inherit" /> },
  { status: 'success', color: 'secondary', icon: <DirectionsBoatIcon fontSize="inherit" /> }
]
const BoardItem = ({ status, onClick }) => {
  const [showIcon, setShowIcon] = React.useState(false)
  const item = items.find(option => option.status === status)

  const handleIcon = (isActive) => {
    if (status === 'none') setShowIcon(isActive)
    else setShowIcon(true)
  }

  return (
    <StyledButton
      color={item.color}
      variant="text"
      onMouseEnter={() => handleIcon(true)}
      onMouseLeave={() => handleIcon(false)}
      onClick={onClick}
      disabled={status !== 'none'}
    >
      {showIcon && item.icon}
    </StyledButton>
  )
}

export default BoardItem

BoardItem.propTypes = {
  onClick: PropTypes.func,
  status: PropTypes.string
}
