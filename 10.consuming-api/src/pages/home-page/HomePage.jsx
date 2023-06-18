// // import { ButtonGoogle } from "../../components/ButtonGoogle";
import {useNavigate} from "react-router-dom";
import { useLocalStorage } from "../../hooks/localStorage";
import { useEffect } from "react";
import {Grid} from "@mui/material";
import { PostForm } from "../../components/PostForm";
 import { Feed } from "../../components/Feed";

export const HomePage = () => {
    const [credentials] = useLocalStorage('credential')
    const navigate = useNavigate()
    useEffect(() => {
        !credentials && navigate('/login')
    }, [credentials])
    return <div>
        <h1>Home Page</h1>
         <div style={{maxWidth:1080, margin: 'auto'}}>
         <Grid container spacing={1}>
            <Grid item md={3} lg={3}>
                <PostForm/>
            </Grid>
            <Grid item md={3} lg={9}>
                <Feed/>
            </Grid>
         </Grid>
  
                {/* <Grid item md={3} lg={3}>


                <h4>Feeds</h4>



             <Grid container spacing={1}>
               <Grid item md={3} lg={3}>
                   <PostForm/>
                </Grid>
            <Grid item md={3} lg={3}>
                <Feed/>
            </Grid>
            </Grid> */}
        </div>
    </div>
}