import {createContext, useEffect, useState} from 'react'
import { usePostService } from '../rest-client/post'


export const RegisContext = createContext()

export const RegisContextProvider = ({ children }) => {
    const { getData} = usePostService()
    const [posts, setPosts] = useState([])
    const fetchPosts = async () => {
        const _posts = await getData()
        setPosts(_posts)
    }


    useEffect(() => {
        fetchPosts().then()
    }, [])

    return <RegisContext.Provider value={
        {
            posts, 
            fetchPosts}
            }>
        { children }
    </RegisContext.Provider>
}
