import { Content, Sidebar } from '@/src/component'
import { BlogsType } from '@/src/interfaces/blogs.interface'
import { CotegoriesType } from '@/src/interfaces/cotegories.interface'
import Layout from '@/src/layout/layout'
import Seo from '@/src/layout/seo/seo'
import { BlogService } from '@/src/services/blog.service'
import { Box } from '@mui/system'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

const CotegoryBlogs = ({ blogs, latestBlogs, cotegories}: CotegoryBlogsProps) => {
  const router = useRouter()
  
    return (
      <Seo metaTitle={`${router.query.slug}-cotegory`}>
        <Layout>
          <Box>
            <Box display={'flex'} gap={'10px'} padding={'10px'} flexDirection={{xs: 'column', sm: 'row'}} >
              <Sidebar latestBlogs={latestBlogs}  cotegories={cotegories} />
              <Content  blogs={blogs} />
            </Box>
          </Box>
        </Layout>
      </Seo>
  )
}

export default CotegoryBlogs

export const getServerSideProps: GetServerSideProps<CotegoryBlogsProps> = async ({query}) => {
    const blogs = await BlogService.getCotegoriesBlogs(query.slug as string )
    const latestBlogs = await BlogService.getLatestBlogs();
    const cotegories = await BlogService.getCotegories()
    
    
    return {
      props: {
        blogs,
        latestBlogs,
        cotegories
      }
    }
  }
  
  interface CotegoryBlogsProps {
    blogs: BlogsType[],
    latestBlogs: BlogsType[],
    cotegories: CotegoriesType[],
  }