import {Typography, Button} from "@mui/material";
import {useCallback} from "react";
import { useNavigate } from 'react-router-dom'


const WelcomePage = () => {
    const navigate = useNavigate()
    const onClickTodoAppHandler = useCallback(() => {
        navigate('/todo-app')
    }, [navigate])

    const onClickGoodsAppHandler = useCallback(() => {
        navigate('/goods-app')
    }, [navigate])

    return (
        <>
            <Typography sx={{marginBottom: 2}} align="center" variant="h6" component="div">Welcome</Typography>
            <Button variant="contained" sx={{maxWidth: 200, margin: '0 auto 20px'}} onClick={onClickTodoAppHandler}>Go to todo app</Button>
            <Button variant="contained" sx={{maxWidth: 200, margin: '0 auto'}} onClick={onClickGoodsAppHandler}>Go to goods app</Button>
        </>
    )
}

export default WelcomePage
