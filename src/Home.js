
const Home = () =>{
    let name = "Nasim";

    const handleClick = () => {
        name = "Qamar";
    }
    const handleClickAgain = () => {
        console.log('hello' );
    }
    return(
        <div className="home">
          <h1>Home Page</h1>
          <p>{ name }</p>
          <button onClick={handleClick}>Click Me</button>
          <button onClickAgain={handleClickAgain}>Click Me Again</button>

        </div>
    );
}
export default Home;