import { useContext, useEffect, useState } from "react"
import Post from "./Post"
import { PostLists as PostListData } from "../store/post-list-store"
import WelcomeMsg from "./WelcomeMsg"
import LoadingSpinner from "./LoadingSpinner"

const PostList = () => {
    const { postList, fetching } = useContext(PostListData)

    

    


    const handlePostClick = () => {}

    return (
        <>
            {fetching && <LoadingSpinner/>}
            {!fetching && postList.length === 0 && <WelcomeMsg getPostbyClick={handlePostClick} />}
            {!fetching && postList.map((post) => (
                <  Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default PostList