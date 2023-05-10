export interface BlogsType {
    title: string
    excerp: string
    id: string
    slug: string
    image: {
        url: string
    }
    cotegory: {
        label: string
        slug: string
    }
    author: {
        name: string
        id: string
        avatar: {
        url: string
        }
    }
}