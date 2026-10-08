import handler from '@tanstack/react-start/server-entry'

import { paraglideMiddleware } from './paraglide/server.js'

// Negotiate the request locale before handing each request to TanStack Start.
const server = {
  fetch(req: Request): Promise<Response> {
    return paraglideMiddleware(req, () => handler.fetch(req))
  },
}

export default server
