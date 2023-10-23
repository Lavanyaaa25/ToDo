import React from 'react'
import { useState } from 'react';
import ItemList from './ItemList'

const Content = ({items,handleCheck,handleDelete}) => {

// const [name,setName]=useState('Dave');
//Dave is the default value
//name is the statename, setName is the function used to change the name 

// const [count,setCount]=useState(0);


//returns a new name every time page loads
    // const handleNameChange=()=>{
    //     const names=['Bob','Dave','Millie'];
    //     const num=Math.floor(Math.random()*3);
    //     //function to generate random numbers between 0 and 2 Math.random gives decimal values
    //     // return names[num];
    //     //anonymous function
    //     setName(names[num]);
      
    //   }
      
    //    const handleClick=()=>{
    // console.log('You clicked')
    //   }


    //   //highlight the text and alt+shift+down arrow to make a copy downward
    //    const handleClick2=(name)=>{
    // console.log(`${name} was clicked`)
    // //template literal to combine so use back tick
    //   }

    //   const handleClick3=(e)=>{
    //     console.log(e.target.innerText)
    //     //target=<button>Click it</button>
    //     //e.innerText=Click it
    //     //e refers to event
    //       }

    //       const handleClick4=()=>{
    //         //here initial value of count will be printed first i.e 0 and then incremented
    //         //despite incrementing count and then printing
    //         setCount(count+1);
    //         //setCount(count+1); it wont add one more time because count value is same before i.e 0 intially 
    //         //so it would be 0+1 i.e use the current state not new state
    //         console.log(count);
    //       }
    



// console.log(`key:${id}`)//template literal

 //for check and uncheck
// ... for all elements ternary operator

//retains the change even after reloading
//shoppinglist is a varibale in local storage



  return (
    <>
      {/* <p onDoubleClick={handleClick}>Welcome {handleNameChange()}</p>

      <p onDoubleClick={handleClick}>Welcome {name}</p>
      <button onClick={handleClick}>Click it </button>
      not handleClick() because it would call immediately
      use {handleClick} as a refernce to a function
      
     

         <button onClick={handleNameChange}>Name change </button>

         <button onClick={()=>{handleClick2('Dave')}}>Click it </button>
         use anonymous function
         <button onClick={(e)=>{handleClick3(e)}}>Click it </button>
         <button onClick={handleClick4}>Count </button> */}


{items.length?(

<ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
):(
  <p style={{marginTop:'2rem'}}>Your list is  empty </p>
)}
    </>
  )
}

export default Content
