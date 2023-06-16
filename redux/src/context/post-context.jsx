import {createContext, useEffect, useState} from 'react'
import { usePostService } from '../services/post'
import { useLocalStorage } from '../hooks/localStorage'
import { createPost } from '../store/actions';


export const PostContext = createContext()

export const PostContextProvider = ({ children }) => {
    const { getPosts, deletePosts, updatePosts} = usePostService()
    const [posts, setPosts] = useState([])
    const fetchPosts = async () => {
        const _posts = await getPosts()
        setPosts(_posts)
    }

    const _deletePosts = async(id) => {
        await deletePosts(id)
        await fetchPosts()
    }

    const _updatePosts = async(id, post) => {
        await updatePosts(id, post)
        await fetchPosts()
    }

    useEffect(() => {
       // credentials && fetchPosts().then()
        fetchPosts().then()
    }, [])

    return <PostContext.Provider value={
        {
            posts, 
            fetchPosts, 
            deletePosts: _deletePosts,
            updatePosts: _updatePosts}
            }>
        { children }
    </PostContext.Provider>
}


 