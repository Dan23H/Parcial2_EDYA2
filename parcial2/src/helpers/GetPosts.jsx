export const GetPosts = async (albumId) => {
    const url = 'https://jsonplaceholder.typicode.com/photos'
    const resp = await fetch(url)
    const { data } = await resp.json()
    const posts = data.map( post => {
        return {
            albumId: post.albumId,
            id: post.id,
            title: post.title,
            url: post.url,
            thumbnailUrl: post.thumbnailUrl
        }
    })
    return posts
}