import { data, NavItems } from "@/src/config/constants"
import { Avatar, Box, Button, Typography } from "@mui/material"
import { format } from "date-fns"
import Image from "next/image"
import { Fragment } from "react"


const Sidebar = () => {
  return (
    <Box width={'30%'}>
        <Box position={'sticky'} top={'100px'} sx={{transition: 'all 0.4s easy-in-out'}}>
        <Box border={'1px solid grey'} borderRadius={'8px'} padding={'10px'} >
            <Typography variant="h5">Latest Blogs</Typography>
            <Box sx={{display: 'flex',  flexDirection: 'column', margin: '10px 0'}}>
                {data.map(item => (
                    <Fragment key={item.title}>
                        <Box display={'flex'} gap={'1rem'} margin={'10px 0'}>
                        <Image 
                            src={item.image} 
                            alt={item.title} 
                            width={120}
                            height={100}
                            style={{objectFit: 'cover'}}
                        />
                        <Box >
                            <Typography variant="body1">{item.title}</Typography>
                            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={'10px'} mt={'1rem'}>
                                <Avatar
                                alt={item.author.name}
                                src={item.author.image}
                                sx={{ width: 36, height: 36 }}
                                />
                                <Box sx={{opacity: '.4'}}>
                                    <Typography variant="body1">{item.author.name}</Typography>
                                    <Typography variant="body2">{format(new Date(), 'dd MMM yyyy')} &#x2022; 10 min read </Typography>
                                </Box>
                            </Box>
                        </Box>
                        </Box>
                    </Fragment>
                ))}
            </Box>
        </Box>
        <Box border={'1px solid grey'} borderRadius={'8px'} padding={'10px'} marginY={'10px'}>
            <Typography variant="h5">Category</Typography>
            <Box sx={{display: 'flex',  flexDirection: 'column', margin: '10px 0'}}>
                {NavItems.map(nav => (
                    <Fragment key={nav.route}>
                        <Button fullWidth sx={{paddingLeft: '1rem', color: '#fff', justifyContent: 'flex-start', backgroundColor: '#010120d7', border: '1px solid rgba(255, 255, 255, 0.4)', margin: '4px 0', fontSize: '14px', textTransform: 'capitalize'}} > {nav.label}</Button>
                    </Fragment>
                ))}
            </Box>
        </Box>
        </Box>
    </Box>
  )
}

export default Sidebar