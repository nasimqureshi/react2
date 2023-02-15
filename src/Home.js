
import { useState } from 'react';

const Home = () =>{
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum....', author: 'Nasim', id: 1},
        {title: 'Welcome Party', body: 'lorem ipsum....', author: 'Nida', id: 2},
        {title: 'Web dev to tips', body: 'lorem ipsum....', author: 'Qamar', id: 3},
    ])
   
    
    return(
        <div className="home">
            {blogs.map((blog) =>(
                <div className='blog-preview' key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>written by { blog.author }</p>
                </div>

            ))}
         </div>
    );
}
export default Home;