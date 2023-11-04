//rafce=es7 snippet searchimport React from 'react'
//react functionnal comonent extended

//style={{}} two braces because one is object and other is jsx expression


const Header = (props) => {

// const Header=({title})=>{ **destructuring 



// const headerStyle={

//            backgroundColor:'lightblue',
//            color:'#fff'
// }



  return (
//     <header style={{
//      backgroundColor:'lightblue',
//      color:'#fff'
// // style is an object of javascript
//use camel case
//style can be used directly like this as well
//     }}>


// <header style={headerStyle}> or can be used like this


<header>
<h1>{props.title}</h1>

    </header>
  )
}

Header.defaultProps={
  title:"Default"
}

export default Header