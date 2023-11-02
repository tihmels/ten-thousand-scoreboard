import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const StyledTypography = styled(Typography)({
    fontSize: '3em',
    color: '#ffffff',
    background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 215, 0, .3)',
    padding: '20px 30px',
    borderRadius: '15px',
    margin: '20px',
    textShadow: '2px 2px #000000',
    fontFamily: 'Comic Sans MS',
});

const GameHeader = () => {
    return (
        <StyledTypography align={'center'} variant={'h2'}>
            10.000
        </StyledTypography>
    );
};

export default GameHeader;