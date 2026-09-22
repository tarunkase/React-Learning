import React from 'react';
import hero from './assets/hero.png'
import NestedComponent from './assets/NestedComponent';

function NewComponent(props) {
    return (
       <>
       <div>
        <h1>NewComponent</h1>
        <h2>This is New Component file created separately</h2>
        <img src={hero}></img>
        </div>
        <NestedComponent />
       </>
    );
}

export default NewComponent;