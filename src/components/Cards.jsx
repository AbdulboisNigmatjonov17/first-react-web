import Data from "./Data";
import "./Cards.css"
const Cards = () => {


return (
    <div className='container'>
        <div className="cards">
            {Data.map((post, index)=>{
                return(
                    <div className="card" key={index} >
                        <img src={post.url} alt="image" />
                        <h1>{post.title}</h1>
                        <p>{post.P}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Cards;

