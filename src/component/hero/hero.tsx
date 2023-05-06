import { Avatar, Box, Typography } from "@mui/material"
import { format } from "date-fns/esm";
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const Hero = () => {

  return (
    <Box width={'100%'} height={'70vh'}>
      <Carousel 
        responsive={{
          mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
          },
        }}
      >
        {data.map(item => (
          <Box key={item.image}>
           <Box position={'relative'} width={'100%'} height={'70vh'}>
            <Image src={item.image} alt={item.title} fill style={{objectFit: 'cover'}}/>
            <Box sx={{
              position: 'absolute', 
              width: '100%', 
              height: '100%', 
              top: '0', left: '0', 
              backgroundColor: 'rgba(0, 0, 0, 0.3)'
              }}
              >
                <Box 
                  width={{xs: '100%', sm: '70%'}}
                  position={'relative'}  
                  color={'#fff'}
                  sx={{
                    top: '50%',
                    left: {xs: '10px', sm: '50px'},
                    transform: 'translateY(-50%)',
                    zIndex: '99'
                  }}
                > 
                  <Typography variant="h2">{item.title}</Typography>
                  <Typography variant="h5">{item.exerpt}</Typography>
                  <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={'10px'} mt={'1rem'}>
                    <Avatar
                      alt={item.author.name}
                      src={item.author.image}
                      sx={{ width: 56, height: 56 }}
                    />
                    <Box>
                      <Typography variant="body1">{item.author.name}</Typography>
                      <Typography>{format(new Date(), 'dd MMM yyyy')} &#x2022; 10 min read </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
           </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  )
}

export default Hero

const data = [
	{
		image: 'https://media.graphassets.com/MxJZhmooRRuudoErkQ38',
		title: 'Technical SEO with Hygraph',
		exerpt: 'Get started with your SEO implementation when using a Headless CMS',
		author: {
			name: 'Samar Badriddinov',
			image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
		},
	},
	{
		image: 'https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h',
		title: 'Union Types and Sortable Relations with Hygraph',
		exerpt: 'Learn more about Polymorphic Relations and Sortable Relations with Hygraph',
		author: {
			name: 'Samar Badriddinov',
			image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
		},
	},
];