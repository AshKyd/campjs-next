import React, { PropTypes } from 'react'
import cx from 'classnames'
import { Shader } from './'

export const backgrounds = {
  dirt: 'Bgc(dirt)',
  grass: 'Bgc(grass)',
  water: 'Bgc(water)',
  leaves: 'Bgc(#0a6)',
  tree: 'Bgc(#91cc00)',
  plain: 'Bgc(#fff)',
  sand: 'Bgc(sand)',
  wood: 'Bgc(#8f5250)',
  fire: 'Bgc(#fd9700)',
  fireTop: 'Bgc(#fdd600)'
}

const classes = {
  base: 'Pos(a) Ov(h) Bfv(h) Ff(bit)',
  side: [
    'Trf(faceTop) W(100%)',
    'StretchedBox D(f) Ai(c) Jc(c)',
    'Trf(blockRight) Start(100%) H(100%)',
    'StretchedBox',
    'Trf(faceLeft) H(100%)',
    'W(100%) T(100%) Trf(blockBottom)'
  ]
}

const calcFaceStyle = (side, size) => {
  const [x, y, z] = size
  let style = {}
  switch (side) {
    // Top or bottom
    case 0:
    case 5:
      style.height = ((z / y) * 100) + '%'
      break
    // Left and right
    case 2:
    case 4:
      style.width = ((z / x) * 100) + '%'
      break
  }
  switch (side) {
    // Front
    case 1:
      style.transform = 'rotateY(90deg) translateX(' + ((z / x) / 2) * -100 + '%) rotateY(-90deg)'
      break
    // Back
    case 3:
      style.transform = 'rotateY(90deg) translateX(' + ((z / x) / 2) * 100 + '%) rotateY(90deg)'
      break
  }
  return style
}

const Face = ({
  background = 'plain',
  children,
  className,
  size,
  currentSide = 0,
  side = 0
}) => {
  const faceStyle = calcFaceStyle(side, size)
  const stateClasses = cx(
    classes.base,
    classes.side[side],
    background && backgrounds[background],
    className
  )
  return (
    <div className={stateClasses} style={faceStyle}>
      {(side > 0 || side < 5) && (
        <Shader side={side} currentSide={currentSide}/>
      )}
      {children}
    </div>
  )
}

Face.propTypes = {
  background: PropTypes.oneOf(Object.keys(backgrounds)),
  className: PropTypes.string,
  children: PropTypes.any,
  currentSide: PropTypes.oneOf([0, 1, 2, 3, 4, 5]).isRequired,
  side: PropTypes.oneOf([0, 1, 2, 3, 4, 5]).isRequired,
  size: PropTypes.array
}

export default Face
