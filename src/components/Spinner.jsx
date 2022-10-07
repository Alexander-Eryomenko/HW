import {CircularProgress, Box} from '@mui/material';

const Spinner = () => {
    const style = {
        circularContainer: {
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto'
        }
    }
    return (
        <Box sx={style.circularContainer}>
            <CircularProgress />
        </Box>
    );
}

export default Spinner
