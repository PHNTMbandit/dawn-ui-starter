import handler from '@tanstack/react-start/server-entry'

import { paraglideMiddleware } from './paraglide/server.js'

const server = {
  fetch(req: Request): Promise<Response> {
    return paraglideMiddleware(req, () => handler.fetch(req))
  },
}

export default server
