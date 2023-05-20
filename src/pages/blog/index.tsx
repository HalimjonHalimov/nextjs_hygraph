import { Content } from "@/src/component"
import { BlogsType } from "@/src/interfaces/blogs.interface"
import Layout from "@/src/layout/layout"
import Seo from "@/src/layout/seo/seo"
import { BlogService } from "@/src/services/blog.service"
import { Box, Typography } from "@mui/material"
import { GetServerSideProps } from "next"


const BlogsPage = ({ blogs }: BlogsPageProps) => {
  return (
    <Seo metaTitle="All Blogs">
      <Layout>
        <Box>
          <Box 
            sx={{
                width: '100%',
                height: '20vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                padding: '10px auto', 
                borderRadius: '8px',
            }}
          >
            <Typography marginBottom={'10px'} variant="h2" fontFamily={'cursive'}> All Blogs </Typography>
          </Box>
          <Box display={'flex'} gap={'10px'} padding={'10px'} flexDirection={{xs: 'column', sm: 'row'}} justifyContent={'center'} >
            <Content  blogs={blogs} />
          </Box>
        </Box>
      </Layout>
    </Seo>
  )
}

export default BlogsPage

export const getServerSideProps: GetServerSideProps<BlogsPageProps> = async () => {
    const blogs = await BlogService.getAllBlogs();
  
    return {
      props: {
        blogs,
      }
    }
  }
  
  interface BlogsPageProps {
    blogs: BlogsType[],
  }
  
  