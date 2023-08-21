function Message(){
    //it's a jsx code JSX means Javascript XML
    // return <h1>Hello World</h1>;
    const name='Rahul';
    if(name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;
//here name has a value that's why it's rendering the value in the local host but if done like below-

// function Message (){
//     const name='';
//     if(name)
//         return <h1>Hello {name}</h1>;
//     return <h1>Hello World</h1>;
// }

//then it would have shown the else part.