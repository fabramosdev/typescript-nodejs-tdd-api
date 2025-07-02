/* eslint-disable @typescript-eslint/no-explicit-any */
interface HttpResponse {
  statusCode: number,
  body: any,
}

interface HttpRequest {
  body?: any,
}

export { HttpRequest, HttpResponse }