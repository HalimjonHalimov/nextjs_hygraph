import { request, gql } from "graphql-request"

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
                }
            }
            
        `;
        const result = await request(graphqlAPI, query)
        return result
    },
}