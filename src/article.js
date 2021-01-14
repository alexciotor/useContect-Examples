import { useContext } from "react"
import {PersonContext} from './App'
 
const Article = ()=>{
    const data = useContext(PersonContext)
    console.log(data);
    return <div className="content">
    <article className='article'>
    {data.map(item=>{
        const {id,img,price,title}=item
        return (
            <>
            <header className="header">
            <img className='img' src={img} alt=""/>
            </header>
            <footer className="footer">
            <h4>{title}</h4>
            <p>{price}</p>
            </footer>
</>
        )
    })}
    
    </article>
    </div>
}

export {Article}