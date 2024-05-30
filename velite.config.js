import rehypePrettyCode from 'rehype-pretty-code'
import { defineCollection, defineConfig, s } from 'velite'

const meta = s
  .object({
    title: s.string().optional(),
    description: s.string().optional(),
    keywords: s.array(s.string()).optional()
  }).default({})

const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.slug('posts'),
      publishDate: s.isodate(),
      updated: s.isodate().optional(),
      imageSrc: s.string().max(99),
      video: s.file().optional(),
      description: s.string().max(999).optional(),
      draft: s.boolean().default(false),
      category: s.enum(['Tech', 'Leadership', 'Updates', "Product"]), 
      tags: s.array(s.string()).default([]),
      meta: meta,
      toc: s.toc(),
      metadata: s.metadata(),
      excerpt: s.excerpt(),
      body: s.mdx()
    })
    .transform(data => ({ ...data, permalink: `/blog/${data.slug}` }))
})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true
  },
  collections: { posts },
  markdown: {
    // https://rehype-pretty-code.netlify.app/
    rehypePlugins: [rehypePrettyCode]
  }
})