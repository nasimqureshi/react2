
import { useState } from 'react';

const Home = () =>{
    // let name = "Nasim";
    const [name, setName] = useState("Nasim");
    const [age, setAge] = useState(68)

    const handleClick = () => {
       setName('Qamar');
       setAge(65);
    }
    
    return(
        <div className="home">
          <h1>Home Page</h1>
          <p>{ name } is {age}</p>
          <button onClick={handleClick}>Click Me</button>
          

        </div>
    );
}
export default Home;