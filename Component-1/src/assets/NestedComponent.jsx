import React from 'react';

function NestedComponent(props) {
    return (
        <>
        <div className="card">
            <h1 className="">This is Nested Component</h1>
            <div>That means it is created and called or used in another component is called as Nested Component. (component inside component)</div>
        </div>
        </>
    );
}

export default NestedComponent;