import { Box, Typography } from "@mui/material";
import { Content, Hero, Sidebar } from "../component";
import Layout from "../layout/layout";


export default function Home() {
  return (
    <Layout>
      <Box>
        <Hero />
        <Box display={'flex'} gap={'10px'} padding={'10px'} >
          <Sidebar />
          <Content />
        </Box>
      </Box>
    </Layout>
  )
}
