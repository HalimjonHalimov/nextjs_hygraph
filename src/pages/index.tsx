import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Content, Hero, Sidebar } from "../component";
import Layout from "../layout/layout";
import { BlogService } from "../services/blog.service";


export default function Home() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    BlogService.getAllBlogs().then(data => setBlogs(data.blogs))
  
  }, [])
  

  return (
    <Layout>
      <Box>
        <Hero />
        <Box display={'flex'} gap={'10px'} padding={'10px'} flexDirection={{xs: 'column', sm: 'row'}} >
          <Sidebar />
          <Content />
        </Box>
      </Box>
    </Layout>
  )
}

