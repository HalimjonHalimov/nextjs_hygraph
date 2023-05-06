import { Box, Button, ButtonGroup, Typography } from "@mui/material"
import { format } from "date-fns"
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
   <Box  sx={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: {xs: 'column', sm: 'row'},
    padding: '10px 20px',
    color: 'white',
    gap: {xs: '10px', sm: '0'},
    backgroundColor: 'primary.main'
   }}>
      <Typography variant="body2">Copyright ©  {format(new Date(), 'yyyy')}, All Right Reserved</Typography> 
      <ButtonGroup
        orientation="horizontal"
        aria-label="horizontal contained button group"
        variant="contained"
      >
        <Button key="one"><TelegramIcon /></Button>
        <Button key="two"><InstagramIcon /></Button>
        <Button key="three"><YouTubeIcon /></Button>
      </ButtonGroup>
   </Box>
  )
}

export default Footer