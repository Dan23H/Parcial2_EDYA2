import { useFetchPosts } from "../hooks/useFetchPosts";
import { PostItem } from "./PostItem";

export const PostGrid = () => {
    const { posts, isLoading } = useFetchPosts()
    return (
        <>
            <h3>posts</h3>
            <div>
                {posts.map((post, key) => {
                    return <PostItem key={key} {...post} />
                })}
            </div>
        </>
    )
}