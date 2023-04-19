import { useEffect, useState } from "react"
import "../pages/App.css"

export const GetPosts = ({album}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(posts => setPosts(posts))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <div className="row">
                {
                    posts.filter((x,y) => x.albumId === album).map(
                        item => (
                            
                            <div className="card-container">
                                <div>
                                    <img className="card-img" src={item.url} alt={item.thumbnailUrl} />
                                </div>
                                <div className="card-text">
                                    <p>{item.title}</p>
                                    {item.albumId}
                                </div>

                            </div>

                        )
                    )
                }
            </div>
        </>
    )
}