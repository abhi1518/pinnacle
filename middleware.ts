// // middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// const PUBLIC_ROUTES = ['/login', '/signup', '/forgot-password'];

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get('auth-token')?.value;

//   const isPublic = PUBLIC_ROUTES.includes(request.nextUrl.pathname);

//   // ✅ If user is logged in and on public route → redirect to dashboard
//   if (token && isPublic) {
//     return NextResponse.redirect(new URL('/dashboard', request.url));
//   }

//   // 🔒 If user is NOT logged in and tries to access protected page → redirect to login
//   if (!token && !isPublic) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   // ✅ Otherwise allow
//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     '/dashboard/:path*',
//     '/beneficiaries/:path*',
//     '/login',
//     '/signup',
//     '/forgot-password',
//   ],
// };


// // import { cookies } from 'next/headers';

// // export async function POST(req: Request) {
// //   const { email, password } = await req.json();
// //   const isAuthenticated = email === 'test@example.com' && password === '123';

// //   if (isAuthenticated) {
// //     cookies().set('auth-token', 'sample-jwt-or-session-token', {
// //       httpOnly: true,
// //       path: '/',
// //     });

// //     return new Response(JSON.stringify({ success: true }), { status: 200 });
// //   }

// //   return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
// // }


// // 'use client';

// // import { useRouter } from 'next/navigation';

// // export default function LogoutButton() {
// //   const router = useRouter();

// //   const handleLogout = async () => {
// //     await fetch('/api/logout', { method: 'POST' });
// //     router.push('/login');
// //   };

// //   return <button onClick={handleLogout}>Logout</button>;
// // }


// // /app/api/logout/route.ts
// // import { cookies } from 'next/headers';

// // export async function POST() {
// //   cookies().delete('auth-token');
// //   return new Response(null, { status: 200 });
// // }