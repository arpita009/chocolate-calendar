import { styled } from '@mui/system';
import {Paper} from '@mui/material';

const PaperStyled = styled(Paper,{})({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
    maxHeight: '100%',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 900,
});
export default PaperStyled; 
