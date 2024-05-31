
import rehypeShiki from '@shikijs/rehype'
import { defineCollection, defineConfig, s } from 'velite'

const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      keywords: s.string().optional(),
      slug: s.slug('posts'),
      publishDate: s.isodate(),
      updated: s.isodate().optional(),
      imageSrc: s.string().max(99),
      imageAlt: s.string().max(99).optional(),
      video: s.file().optional(),
      draft: s.boolean().default(false),
      category: s.enum(['Tech', 'Leadership', 'Updates', "Product"]), 
      tags: s.array(s.string()).default([]),
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
  mdx: {
    rehypePlugins: [[rehypeShiki as any, { theme: 'vitesse-dark' }]]
  }
})