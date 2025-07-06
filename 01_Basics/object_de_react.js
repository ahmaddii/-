const User = {

    name: "Ahmad Malik",
    age: 25,
    occupation: "Software Engineer"

}

// How Object Destructring Helps in React

function UserCard(props) {
    
    return (         
        <div>   
           <h1>{props.User.name}</h1>
           <p>{props.User.age}</p>
           <p>{props.User.occupation}</p>
        </div>
    );
 // ye khrabi ha kunke yahan per bar bar jb tak object ko accees krna hoga props. bar bar use krna hoga
}

// Object Destructering perform karian ge

function UserCard()

{
    const {name, age, occupation} = User; // ye object destructring ki

    return (

        <div>

            <h1>{name}</h1>
            <p>{age}</p>
            <p>{occupation}</p>

        </div>
           // ab wo khach krne ki zaroorat ni ha props. props. kunke humne object ko decentralized krliya
    );
}