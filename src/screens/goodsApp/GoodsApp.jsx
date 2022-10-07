import {
    addTodoButton,
    goodsHeaderTitle,
    sortByDescriptionBtn,
    sortByStatusBtn,
    sortByTitleBtn, sortByWeightBtn
} from "../../constants/constants";
import Header from "../../components/Header/Header";
import GoodsList from "../../components/goodsApp/GoodsList";
import Spinner from "../../components/Spinner";
import { Button } from "@mui/material";
import {useCallback} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsDataAdding, selectIsDataLoading} from "../../store/goods/selectors";

const GoodsApp = () => {
    const textBtn = {
        description: sortByDescriptionBtn,
        title: sortByTitleBtn,
        weight: sortByWeightBtn
    }

    const navigate = useNavigate()
    const isDataAdding = useSelector(selectIsDataAdding)
    const isDataloading = useSelector(selectIsDataLoading)

    const showModalAddHandler = useCallback(() => {
        navigate('add-goods')
    }, [navigate])


    return (
        <>
            <Header textBtn={textBtn} headerText={goodsHeaderTitle} />
            <GoodsList />
            {!isDataloading ? <Button
                sx={{display: 'block', margin: '0 auto'}}
                onClick={showModalAddHandler}
                variant="contained"
                disabled={isDataAdding}
            >
                {addTodoButton}
            </Button> : null}
            <Outlet />
        </>
    )

}

export default GoodsApp
