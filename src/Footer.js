import React from 'react'

const Footer = ({length}) => {
    const today=new Date();
  return (
    //in semantic there is a footer tag so use that
    <footer>
      <p>
        {length} List {length===1?"Item":"Items"} <br></br>
        Copyright &copy; {today.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
