import { Avatar, Button, ButtonGroup, Card, CardContent, Grid, Typography, Modal, Box } from "@mui/material"
import { useContext, useState } from "react"
import TimeAgo from "timeago-react"
import { PostContext } from "../context/post-context"
import { PostFeed } from "./PostFeed";
import { useSelector } from 'react-redux';

const style ={
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50, -50)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const Feed = () => {
    const posts = useSelector(state => state.posts);
    const { deletePosts} = useContext(PostContext)
    const [open, setOpen] = useState(false)
    const [id, setId] = useState(false)
    const handleDeleteModal = (id) => {
        setId(id)
         setOpen(true)
     }

     const handleDelete = async () => {
                 await deletePosts(id)
                 setOpen(false)
             }

    return <div>
        <Modal open={open}>
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Are you sure?
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt:2 }}>
                this action cannot be rolled back
            </Typography>
            <ButtonGroup>
                <Button onClick={handleDelete}>Yes</Button>
                <Button color="error" onClick={() => setOpen(false)}>No</Button>
            </ButtonGroup>
        </Box>
    </Modal>
 {
            posts.map((post) => (
                 <PostFeed post={post} handleDeleteModal={handleDeleteModal}/>   
            ))
        }
    </div>
}
