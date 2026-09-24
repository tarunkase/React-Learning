import React from 'react'

function  ButtonComponent(){            //here it is ButtonComponent is parent function 
    const handleClick=()=>alert("Ooops! Something went wrong");
    return(
        <Child onclick={handleClick} label="Click me" />
    )
}



function Child({onclick, label}) {
  return (<button onClick={onclick}>{label}</button>  )
}




export default ButtonComponent