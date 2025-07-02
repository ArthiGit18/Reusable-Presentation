import React from 'react'
import Title1 from './MainbarLayout/Title1'
import Title2 from './MainbarLayout/Title2'

const Mainbar = ({ selectedItem }) => {
  return (
    <>
      {selectedItem === 'Presentation Title' && <Title1 />}
      {selectedItem === 'Presentation Description' && <Title2 />}
    </>
  )
}

export default Mainbar