import handler from '@tanstack/react-start/server-entry'

// #if localization
import { paraglideMiddleware } from './paraglide/server.js'

// Negotiate the request locale before handing each request to TanStack Start.
const server = {
  fetch(req: Request): Promise<Response> {
    return paraglideMiddleware(req, () => handler.fetch(req))
  },
}
// #else
const server = {
  async fetch(req: Request): Promise<Response> {
    return handler.fetch(req)
  },
}
// #endif

export default server
