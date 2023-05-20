import { Content } from "@/src/component"
import { BlogsType } from "@/src/interfaces/blogs.interface"
import Layout from "@/src/layout/layout"
import { BlogService } from "@/src/services/blog.service"
import { Box, Typography } from "@mui/material"
import { GetServerSideProps } from "next"


const BlogsPage = ({ blogs }: BlogsPageProps) => {
  return (
    <Layout>
    <Box>
        <Typography variant={'h4'} textAlign={'center'}> All Blogs </Typography>
      <Box display={'flex'} gap={'10px'} padding={'10px'} flexDirection={{xs: 'column', sm: 'row'}} justifyContent={'center'} >
        <Content  blogs={blogs} />
      </Box>
    </Box>
  </Layout>
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
  
  