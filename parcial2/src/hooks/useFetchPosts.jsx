import { useEffect, useState } from "react";
import { getPosts } from "../helpers/getPosts"

export const useFetchPosts = (albumId) => {
    const [postsList, setPostsList] = useState([]);

    const newFunction = async () => {
        const postsList = await getPosts(albumId)
        setPostsList(postsList)
    }


    useEffect(() => {
        newFunction(); // eslint-disable-next-line
    }, [])
    return {
        posts: postsList,
        isLoading: false,
        error: null
    }
}