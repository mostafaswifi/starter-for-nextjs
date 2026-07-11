export function middleware(request) {
  const token = request.cookies.get('authToken')?.value;
  const { pathname } = request.nextUrl;

  // Protect everything inside (protected) folder
  if (pathname.startsWith('/admin'))  {
    if (!token) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}