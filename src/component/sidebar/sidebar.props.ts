import { BlogsType } from "@/src/interfaces/blogs.interface";
import { CotegoriesType } from "@/src/interfaces/cotegories.interface";

export interface SideBarProps {
    latestBlogs: BlogsType[],
    cotegories: CotegoriesType[],
}

