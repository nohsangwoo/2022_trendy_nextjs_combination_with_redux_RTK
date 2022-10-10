import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import requestIp from 'request-ip'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // const detectedIp = requestIp.getClientIp(request)
  // console.log('detectedIp: ', detectedIp)
  // const forwarded = request.headers['x-forwarded-for']
  // console.log('forwarded: ', forwarded)
  // console.log('all connected middleware activated!!')
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about',
// }
