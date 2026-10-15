import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'

// Register additional TanStack Devtools panels alongside the Query inspector here.
const tanstackQueryDevtools = {
  name: 'Tanstack Query',
  render: <ReactQueryDevtoolsPanel />,
}

export default tanstackQueryDevtools
