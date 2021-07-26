import React, {useState} from 'react';

function ExampleFunctional() {
    // const initialValue = () => {
    //     let total = 0;
    //     for(let i = 0; i <= 1000000; i++) {
    //         total += i;
    //     }
    //     console.log("initialValue");
    //     return total;
    // }

    // const [count, setCount] = useState(initialValue()); // return array

    // const [count, setCount] = useState(() => {
    //     return initialValue();
    // }); // return array

    const [count, setCount] = useState(0); // return array
    const [user, setUser] = useState({ // update state trong func component là ghi đè
        name: "Hieu",
        age: 21
    });


    const handleClick = () => {
        setCount(count + 1);
        // setCount(count + 1); // not update pineline

        // setCount((prevState) => {
        //     return prevState + 1;
        // });
        // setCount((prevState) => {
        //     return prevState + 1;
        // });

        setUser({
            name: "Mai"
        })
    };




    return (
        <div>
            <pre>Functional Component</pre>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>Click me</button>
            <p>{JSON.stringify(user)}</p>
        </div>
    );
}

export default ExampleFunctional;