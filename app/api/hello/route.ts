/**
 * Api Endpoint for /api/hello
 *
 * @param request
 * @returns
 */

export async function GET(request: Request) {
  return new Response("Hello!");
}
