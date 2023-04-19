import { useEffect, useState } from "react"
import "../pages/App.css"

export const GetPosts = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error))
    }, [])
    
    return (
        <>
            <div className="container">
                {
                    data.map(
                        item => (
                            <div className="img-container">
                                <div>
                                    <img className="img-card" src={item.url} alt={item.thumbnailUrl} />
                                </div>
                                <div className="img-body">
                                    <span>{item.title}</span>
                                </div>

                            </div>

                        )
                    )
                }
            </div>
        </>
    )
}