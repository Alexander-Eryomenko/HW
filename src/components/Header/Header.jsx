import PropTypes from "prop-types";
import {Button, Typography, Box} from "@mui/material";
import './Header.css'
import {useSearchParams} from "react-router-dom";
import {useCallback} from "react";

const Header = ({headerText, textBtn}) => {
    const styleBox = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    const [searchParams, setSearchParams] = useSearchParams()

    const onSortByStatus = useCallback(() => {
        setSearchParams('sort=status')
    }, [setSearchParams])
    const onSortByWeight = useCallback(() => {
        setSearchParams('sort=weight')
    }, [setSearchParams])
    const onSortByDescription = useCallback(() => {
        setSearchParams('sort=description')
    }, [setSearchParams])
    const onSortByTitle = useCallback(() => {
        setSearchParams('sort=title')
    }, [setSearchParams])

    return (
        <header className="header">
            <Typography marginBottom="20px" align="center" variant="h3" component="div">{headerText}</Typography>
            <Box component="div" sx={styleBox}>
                {textBtn.status && <Button sx={{display: 'block'}} onClick={onSortByStatus} variant="contained">{textBtn.status}</Button>}
                {textBtn.weight && <Button sx={{display: 'block'}} onClick={onSortByWeight} variant="contained">{textBtn.weight}</Button>}
                {textBtn.description && <Button sx={{display: 'block'}} onClick={onSortByDescription} variant="contained">{textBtn.description}</Button>}
                {textBtn.title && <Button sx={{display: 'block'}} onClick={onSortByTitle} variant="contained">{textBtn.title}</Button>}
            </Box>
        </header>
    )
}

export default Header

Header.propTypes = {
    headerText: PropTypes.string.isRequired
}
