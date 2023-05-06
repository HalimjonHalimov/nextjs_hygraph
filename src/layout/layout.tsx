import { Box } from "@mui/material"
import { JsxElement } from "typescript"
import { Footer, Navbar } from "../component"
import { LayoutProps } from "./layout.props"


const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
        <Navbar />
        <Box minHeight={'90vh'}>
          {children}
        </Box>
        <Footer />
    </>
  )
}

export default Layout