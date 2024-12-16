// Mock MongoDB collection
const mockCollection = {
  insertOne: async () => {}
}

// Mock MongoDB instance
const mockMongo = {
  db: {
    collection: () => mockCollection
  }
}

// Create mock Fastify instance with route handlers storage
export function createMockFastify () {
  return {
    routes: {},
    get (path, options) {
      this.routes[path] = options.handler
    },
    mongo: mockMongo
  }
}

// Create mock reply object
export function createMockReply () {
  return {
    sent: false,
    payload: null,
    send (response) {
      this.sent = true
      this.payload = response
    }
  }
}

// Create mock request object
export function createMockRequest (options = {}) {
  return {
    query: options.query || {},
    params: options.params || {},
    headers: options.headers || {}
  }
}
