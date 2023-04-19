import { useEffect, useState } from "react"

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
        {data.map(item => (<img src={item.url} alt={item.thumbnailUrl} title={item.title}/>))}
        </>
    )
}