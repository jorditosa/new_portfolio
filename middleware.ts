import { NextResponse } from "next/server";

const locales = ['en', 'ca'];

// Función para obtener el idioma preferido (puedes usar una librería o configurar según tus necesidades)
function getLocale(request: string) {
  return 'en';
}

export function middleware(request: any) {
  const { pathname } = request.nextUrl;

  // Verificar si el pathname ya contiene un idioma soportado
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Si ya contiene el prefijo del idioma, no hacer nada
  if (pathnameHasLocale) {
    return NextResponse.next();  // Continúa sin hacer nada
  }

  // Si no contiene el idioma, redirigir a la URL correcta con el idioma predeterminado
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Excluir todas las rutas internas de Next.js
    '/((?!_next).*)',
  ],
};
