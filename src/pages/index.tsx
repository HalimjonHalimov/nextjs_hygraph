import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import { Content, Hero, Sidebar } from "../component";
import { BlogsType } from "../interfaces/blogs.interface";
import { CotegoriesType } from "../interfaces/cotegories.interface";
import Layout from "../layout/layout";
import { BlogService } from "../services/blog.service";


export default function Home({ blogs, latestBlogs, cotegories }: HomeProps) {
  

  return (
    <Layout>
      <Box>
        <Hero blogs={blogs} />
        <Box display={'flex'} gap={'10px'} padding={'10px'} flexDirection={{xs: 'column', sm: 'row'}} >
          <Sidebar latestBlogs={latestBlogs}  cotegories={cotegories} />
          <Content  blogs={blogs} />
        </Box>
      </Box>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const blogs = await BlogService.getAllBlogs();
  const latestBlogs = await BlogService.getLatestBlogs();
  const cotegories = await BlogService.getCotegories()

  return {
    props: {
      blogs,
      latestBlogs,
      cotegories,
    }
  }
}

interface HomeProps {
  blogs: BlogsType[],
  latestBlogs: BlogsType[],
  cotegories: CotegoriesType[]
}

