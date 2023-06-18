import { Button, Card, CardActions, CardContent, CircularProgress, TextField, Typography } from '@mui/material'
import { useState,  useContext } from 'react'
import usePostService from '../services/post/index'
import {useJwt} from 'react-jwt';
import { useLocalStorage } from '../hooks/localStorage';
import { PostContext } from '../context/post-context';

export const PostForm = () => {
    const[credential] = useLocalStorage('credential')
    const { fetchPosts } =useContext(PostContext)
    const { decodedToken } = useJwt(credential);
    
    const [post, setPost] = useState('');
    const {createPosts, loading} = usePostService()
    const [errorText, setErrorText] = useState('')
        const handleCreatePost = async () => {
            setErrorText('')
            if (post === '') {
                setErrorText('Post should not be empty')
                return
            }
            await createPosts(post, decodedToken)
            await fetchPosts()
            setPost('')
        }
    
    return <Card>
        <CardContent>
        <Typography variant='h6'>
            Post new Feed
        </Typography>
            <TextField 
            multiline 
            placeholder='post' 
            value={post} 
            onChange={({ target: { value } }) => setPost(value)} 
            error={ errorText && true || false}
            helperText={errorText}
            />
            </CardContent>
        <CardActions>
            <Button variant='contained' onClick={handleCreatePost}>
                { loading && <CircularProgress/> }
                Post
                </Button>
        </CardActions>
    </Card>
}