import { request, gql } from "graphql-request"
import { BlogsType } from "../interfaces/blogs.interface";
import { CotegoriesType } from "../interfaces/cotegories.interface";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const BlogService = {
    async getAllBlogs() {
        const query = gql`
            query GetAllBlogs {
                blogs {
                    title
                    excerp
                    id
                    slug
                    image {
                        url
                    }
                    createdAt
                    cotegory {
                        label
                        slug
                    }
                    author {
                        name
                        id
                        avatar {
                        url
                        }
                    }
                    description {
                        text
                      }
                }
            }
            
        `;
        const result = await request<{blogs: BlogsType[]}>(graphqlAPI, query)
        return result.blogs;
    },
    async getLatestBlogs() {
        const query = gql`
            query GetLatestBlogs {
                blogs(last: 2) {
                    title
                    excerp
                    id
                    slug
                    image {
                        url
                    }
                    createdAt
                    author {
                        name
                        id
                        avatar {
                        url
                        }
                    }
                    description {
                        text
                      }
                }
            }
            
        `;
        const result = await request<{blogs: BlogsType[]}>(graphqlAPI, query)
        return result.blogs;
    },
    async getCotegories() {
        const query = gql`
            query GetCategoris {
                cotegories {
                id
                label
                slug
                }
            }
        `;
        const result = await request<{cotegories: CotegoriesType[]}>(graphqlAPI, query)
        return result.cotegories;
    },  
    async getDetailsBlog(slug: string) {
        const query = gql`
            query GetDetailsBlog($slug: String!) {
                blog(where: {slug: $slug}) {
                    title
                    slug
                    excerp
                    id
                    description {
                        html
                        text
                    }
                    image {
                        url
                    }
                    author {
                        id
                        name
                        avatar {
                            url
                        }
                    }
                    createdAt
                }
            }          
            
        `;
        const result = await request<{blog: BlogsType}>(graphqlAPI, query, { slug })
        return result.blog
    },
    async getCotegoriesBlogs(slug: string) {
        const query = gql`
            query GetCotegoryBlogs($slug: String!) {
                blogs(where: {cotegory: {slug: $slug}}) {
                    title
                    excerp
                    slug
                    id
                    description {
                        html
                        text
                    }
                    image {
                        url
                    }
                    author {
                        id
                        name
                        avatar {
                            url
                        }
                    }
                    createdAt
                }
            }
        `;
        const result = await request<{blogs: BlogsType[]}>(graphqlAPI, query, {slug})
        return result.blogs
    }

}