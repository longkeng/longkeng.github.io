import { allProjects } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = allProjects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="prose dark:prose-invert mx-auto py-8">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <MDXLayoutRenderer code={project.body.code} components={components} toc={project.toc} />
    </article>
  )
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}
