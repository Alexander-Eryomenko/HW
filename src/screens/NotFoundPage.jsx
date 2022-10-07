import {Button, Typography} from "@mui/material";
import {useCallback} from "react";
import { useNavigate } from 'react-router-dom'
const NotFoundPage = () => {
    const navigate = useNavigate()

    const onClickReturnToWelcomePageHandler = useCallback(() => {
        navigate('/')
    }, [navigate])

    return (
        <>
            <Typography sx={{marginBottom: 2}} align="center" variant="h6" component="div">Page not found</Typography>
            <Button variant="contained" sx={{maxWidth: 200, margin: '0 auto'}} onClick={onClickReturnToWelcomePageHandler}>Return to welcome page</Button>
        </>
    )
}

export default NotFoundPage
