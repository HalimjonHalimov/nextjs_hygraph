import { Sidebar } from "@/src/component";
import { CalculateEstimateTimeReading } from "@/src/helpers/timeFormat";
import { BlogsType } from "@/src/interfaces/blogs.interface";
import { CotegoriesType } from "@/src/interfaces/cotegories.interface";
import Layout from "@/src/layout/layout";
import { BlogService } from "@/src/services/blog.service";
import { Avatar, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { format } from "date-fns";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";


const DetailsBlog = ({ blog, latestBlogs, cotegories }: DetailsBlogProps) => {

  
  
  return (
    <Layout>
      <Box>
        <Box display={'flex'} gap={'10px'} padding={'10px'} flexDirection={{xs: 'column', sm: 'row'}} >
          <Box  width={{xs: '100%', sm: '70%'}} boxShadow={'0px 8px 16px rgba(255, 255, 255, 0.1) '} sx={{backgroundColor: '#010110', padding: '10px', borderRadius: '8px'}}>
            <Box  sx={{backgroundColor: 'rgba(0, 0, 0, 0.4)', cursor: 'pointer'}} padding={'1rem'} margin={'10px 0'} borderRadius={'8px'}>
              <Box position={'relative'} width={'100%'} height={'50vh'}>
                <Image src={blog.image.url} alt={blog.title} fill style={{objectFit: 'cover', borderRadius: '8px'}} />
              </Box>
              <Box margin={'10px 0'}>
                <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={'10px'} my={'1rem'}>
                  <Avatar
                    alt={blog.author.name}
                    src={blog.author.avatar.url}
                    sx={{ width: 48, height: 48 }}
                  />
                  <Box>
                    <Typography variant="body1">{blog.author.name}</Typography>
                    <Typography variant="body2" color={'grey'}>{format(new Date(blog.createdAt), 'dd MMM yyyy')} &#x2022; {CalculateEstimateTimeReading(blog.description.text)} min read </Typography>
                  </Box>
                </Box>
                <Typography variant="h5">{blog.title}</Typography>
                <Typography variant="body1" color={'grey'}>{blog.excerp}</Typography>
                <Divider color={'#f9f9f9'} sx={{marginTop: '10px'}}/>
                <Typography  dangerouslySetInnerHTML={{__html: blog.description.html}} />
              </Box>
            </Box>
          </Box>
          <Sidebar latestBlogs={latestBlogs}  cotegories={cotegories} />
        </Box>
      </Box>
    </Layout>
  )
}

export default DetailsBlog

export const getServerSideProps: GetServerSideProps<DetailsBlogProps> = async ({query}) => {
  const blog = await BlogService.getDetailsBlog(query.slug as string )
  const latestBlogs = await BlogService.getLatestBlogs();
  const cotegories = await BlogService.getCotegories()
  
  
  return {
    props: {
      blog,
      latestBlogs,
      cotegories
    }
  }
}

interface DetailsBlogProps {
  blog: BlogsType,
  latestBlogs: BlogsType[],
  cotegories: CotegoriesType[],
}