import { data } from "@/src/config/constants"
import { Avatar, Box, Typography } from "@mui/material"
import { format } from "date-fns"
import Image from "next/image"


const Content = () => {
  return (
    <Box width={{xs: '100%', sm: '70%'}} >
      {data.map(item => (
        <Box key={item.title} sx={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}} padding={'1rem'} margin={'10px 0'} borderRadius={'8px'} boxShadow={'0px 8px 16px rgba(255, 255, 255, 0.1) '}>
          <Box position={'relative'} width={'100%'} height={'50vh'}>
            <Image src={item.image} alt={item.title} fill style={{objectFit: 'cover', borderRadius: '8px'}} />
          </Box>
          <Box margin={'10px 0'}>
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="body1" color={'grey'}>{item.exerpt}</Typography>
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={'10px'} mt={'1rem'}>
                    <Avatar
                      alt={item.author.name}
                      src={item.author.image}
                      sx={{ width: 48, height: 48 }}
                    />
                    <Box>
                      <Typography variant="body1">{item.author.name}</Typography>
                      <Typography variant="body2" color={'grey'}>{format(new Date(), 'dd MMM yyyy')} &#x2022; 10 min read </Typography>
                    </Box>
                  </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default Content