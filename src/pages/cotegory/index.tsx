import { CotegoriesType } from "@/src/interfaces/cotegories.interface"
import Layout from "@/src/layout/layout"
import { BlogService } from "@/src/services/blog.service"
import { Button, ButtonGroup, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"


const CotegoryBlogs = ({ cotegories }: CotegoryBlogsProps) => {
    const router = useRouter()
    
    
  return (
    <Layout>
        <Box 
            width={{xs: '100%', sm: '80%'}}
            height={{xs: '20vh', sm: '40vh'}}
            sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                margin: '10px auto',
                rowGap: '10px',
                borderRadius: '8px',
            }}
        >
            <Typography marginBottom={'10px'} variant="h2" fontFamily={'cursive'}> All Cotegorys </Typography>
            <ButtonGroup color="primary" variant="contained" aria-label="contained  button group">
                {cotegories.map(item => (
                    <Button key={item.id} onClick={() => router.push(`/cotegory/${item.slug}`) } > # {item.label}</Button>
                ))}
            </ButtonGroup>
        </Box>
    </Layout>
  )
}

export default CotegoryBlogs

export const getServerSideProps: GetServerSideProps<CotegoryBlogsProps> = async () => {
    const cotegories = await BlogService.getCotegories()
  
    return {
      props: {
        cotegories,
      }
    }
  }
  
  interface CotegoryBlogsProps {
    cotegories: CotegoriesType[];
  }