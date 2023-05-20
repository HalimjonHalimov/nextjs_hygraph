import { seoConfig } from '@/src/config/seo.config'
import Head from 'next/head'
import { SeoProps } from './seo.props'

const Seo = ({children, metaTitle = seoConfig.metaTitle, metaKeywords = seoConfig.metaKeywords, author = seoConfig.author, metaDescription = seoConfig.metaDescription}: SeoProps) => {
  return (
    <>
        <Head>
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=5' />
            <title>{metaTitle}</title>

            <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
            <meta name='keyword' content={metaKeywords} />
            <meta name='author' content={author} />
            <meta name='description' content={metaDescription} />
            <link rel='shortcut icon' href={'/next.svg'} type='image/x-icon' />
        </Head>
        {children}
    </>
  )
}

export default Seo