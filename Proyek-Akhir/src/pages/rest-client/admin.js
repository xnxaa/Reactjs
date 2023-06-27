import useClient, {prefix} from "./index"
import {useState} from "react"

export const usePostService = () => {
    const collection =`${prefix}_tech`
    const client = useClient()
    const [loading, setLoading] = useState(false)

    const getPosts = async () => {
        if(loading) return
            setLoading(true)
            return client.get(collection,{
                params: {
                sort: '-timestamp'
            }
        }).then((response) => {
                    return response.data
                }).finally(() => {
                setLoading(false)
            })
        }

    const createPosts =  async (nama, user) => {
        if(loading) return
        setLoading(true)
        return client.post(collection, {nama, timestamp: new Date(), user }).then((response) => {
            return response.data
        }).finally(() => {
            setLoading(false)
        })
    }


    return { getPosts, createPosts, loading}
}

export default usePostService
