import GoodsItem from "./GoodsItem";
import Spinner from "../Spinner";
import Grid from '@mui/material/Unstable_Grid2';
import { useEffect, useMemo } from "react";
import { fetchGoodsThunk } from "../../store/goods/thunks";
import { useDispatch, useSelector } from "react-redux";
import {selectAllGoods, selectGoodsError, selectIsDataLoading} from "../../store/goods/selectors";
import {useSearchParams} from "react-router-dom";
import {Typography} from "@mui/material";

const GoodsList = () => {
    const dispatch = useDispatch()
    const goods = useSelector(selectAllGoods)
    const isDataLoading = useSelector(selectIsDataLoading)
    const goodsError = useSelector(selectGoodsError)
    const [searchParams, setSearchParams] = useSearchParams();
    const sortType = searchParams.get('sort')

    useEffect(() => {
        dispatch(fetchGoodsThunk())
    }, [])


    const dataToDisplay = useMemo(() => {
        if(!sortType) {
            return goods
        }

        return [...goods].sort((a,b) => {
            if(a[sortType] > b[sortType]) {
                return 1
            }
            if(a[sortType] < b[sortType]) {
                return -1
            }
            if(a[sortType] === b[sortType]) {
                return 0
            }
        })
    }, [goods, sortType, dispatch])

    if(goodsError) {
        return (<Typography align="center" variant="h4" component="div">
            {goodsError}
        </Typography>)
    }
    if(isDataLoading) {
        return <Spinner />
    }

    return (
        <Grid marginBottom={2} container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            {dataToDisplay.map(item => {
                return <GoodsItem item={item} key={item.key}/>
            })}
        </Grid>
    )
}

export default GoodsList
