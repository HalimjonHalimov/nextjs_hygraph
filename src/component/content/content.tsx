import { CalculateEstimateTimeReading } from "@/src/helpers/timeFormat"
import { Avatar, Box, Typography } from "@mui/material"
import { format } from "date-fns"
import Image from "next/image"
import { useRouter } from "next/router"
import { ContentProps } from "./content.props"


const Content = ({ blogs }: ContentProps) => {
  const router = useRouter()
  
  return (
    <Box width={{xs: '100%', sm: '70%'}} >
      {blogs.map(item => (
        <Box key={item.id} onClick={() => router.push(`/blog/${item.slug}`)} sx={{backgroundColor: 'rgba(0, 0, 0, 0.4)', cursor: 'pointer'}} padding={'1rem'} margin={'10px 0'} borderRadius={'8px'} boxShadow={'0px 8px 16px rgba(255, 255, 255, 0.1) '}>
          <Box position={'relative'} width={'100%'} height={'50vh'}>
            <Image src={item.image.url} alt={item.title} fill style={{objectFit: 'cover', borderRadius: '8px'}} />
          </Box>
          <Box margin={'10px 0'}>
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="body1" color={'grey'}>{item.excerp}</Typography>
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={'10px'} mt={'1rem'}>
                    <Avatar
                      alt={item.author.name}
                      src={item.author.avatar.url}
                      sx={{ width: 48, height: 48 }}
                    />
                    <Box>
                      <Typography variant="body1">{item.author.name}</Typography>
                      <Typography variant="body2" color={'grey'}>{format(new Date(item.createdAt), 'dd MMM yyyy')} &#x2022; {CalculateEstimateTimeReading(item.description.text)} min read </Typography>
                    </Box>
                  </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default Content