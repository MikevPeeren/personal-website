import * as runtime from 'react/jsx-runtime'

const sharedComponents = {
  // Add your global components here
}

// parse the Velite generated MDX code into a React component function
const useMDXComponent = (body: string) => {
  const fn = new Function(body)
  return fn({ ...runtime }).default
}

interface MDXProps {
  body: string
  components?: Record<string, React.ComponentType>
}

// MDXContent component
export const MDXContent = ({ body, components }: MDXProps) => {
  const Component = useMDXComponent(body)
  return <Component components={{ ...sharedComponents, ...components }} />
}