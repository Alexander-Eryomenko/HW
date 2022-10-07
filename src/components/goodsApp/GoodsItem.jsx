import Grid from '@mui/material/Unstable_Grid2';
import {Box, Typography} from '@mui/material';
import {useCallback} from "react";
import { useNavigate } from "react-router-dom";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import {useDispatch, useSelector} from "react-redux";
import {deleteGoodsThunk} from "../../store/goods/thunks";
import {selectIsDataDeleting, selectIsDataUpdating} from "../../store/goods/selectors";
import Spinner from "../Spinner";


const GoodsItem = ({item}) => {
    const style = {
        deleteBtn: {
            position: 'absolute',
            top: '5px',
            right: '5px',
            cursor: 'pointer',
            transition: 'transform 0.3s ease 0s',
            '&:hover': {
                transform: 'scale(1.07, 1.07)',
            }
        },
        boxContainer: {
            position: 'relative',
            backgroundColor: '#2F4F4F',
            borderRadius: '15px',
            padding: '10px 5px',
            boxShadow: '0px 0px 15px 3px rgba(0,0,0,0.7)',
            transition: 'transform 0.3s ease 0s',
            '&:hover': {
                transform: 'scale(1.05, 1.05)',
                color: '#800000'
            }
        },
        text: {
            fontSize: 20,
            color: '#D2B48C'
        }
    }
    const isDataDeleting = useSelector(selectIsDataDeleting)[item.id]
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const showEditModalHandler = useCallback(() => {
        navigate(`edit-goods/${item.id}`)
    }, [item.id])

    const onDeleteHandler = () => {
        dispatch(deleteGoodsThunk(item.id))
    }
    return (
        <Grid onDoubleClick={showEditModalHandler} xs={2} sm={4} md={4}>
            <Box sx={style.boxContainer}>
                <Typography sx={style.text} align="center" variant="h4" component="div">
                    Title: {item.title}
                </Typography>
                <Typography sx={style.text} align="center" variant="h4" component="div">
                    Description: {item.description}
                </Typography>
                <Typography sx={style.text} align="center" variant="h4" component="div">
                    Weight: {item.weight}
                </Typography>
                {item.category && <Typography sx={style.text} align="center" variant="h6" component="div">
                    Category: {item.category}
                </Typography>}
                <Box sx={style.deleteBtn}>
                    {!isDataDeleting? <DeleteForeverRoundedIcon onClick={onDeleteHandler} sx={style.deleteBtn} /> : <Spinner />}
                </Box>
            </Box>
        </Grid>
    )
}

export default GoodsItem
