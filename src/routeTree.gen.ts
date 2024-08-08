/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TarjetaDebitoImport } from './routes/tarjetaDebito'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as TasksIndexImport } from './routes/tasks.index'
import { Route as TarjetaCreditoIndexImport } from './routes/tarjetaCredito.index'
import { Route as PagoIndexImport } from './routes/pago.index'
import { Route as MercadoPagoIndexImport } from './routes/mercadoPago.index'
import { Route as LocalIndexImport } from './routes/local.index'
import { Route as InicioIndexImport } from './routes/inicio.index'
import { Route as FranquiciaIndexImport } from './routes/franquicia.index'
import { Route as CarritoIndexImport } from './routes/carrito.index'
import { Route as TasksIdImport } from './routes/tasks.$id'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const TarjetaDebitoRoute = TarjetaDebitoImport.update({
  path: '/tarjetaDebito',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const TasksIndexRoute = TasksIndexImport.update({
  path: '/tasks/',
  getParentRoute: () => rootRoute,
} as any)

const TarjetaCreditoIndexRoute = TarjetaCreditoIndexImport.update({
  path: '/tarjetaCredito/',
  getParentRoute: () => rootRoute,
} as any)

const PagoIndexRoute = PagoIndexImport.update({
  path: '/pago/',
  getParentRoute: () => rootRoute,
} as any)

const MercadoPagoIndexRoute = MercadoPagoIndexImport.update({
  path: '/mercadoPago/',
  getParentRoute: () => rootRoute,
} as any)

const LocalIndexRoute = LocalIndexImport.update({
  path: '/local/',
  getParentRoute: () => rootRoute,
} as any)

const InicioIndexRoute = InicioIndexImport.update({
  path: '/inicio/',
  getParentRoute: () => rootRoute,
} as any)

const FranquiciaIndexRoute = FranquiciaIndexImport.update({
  path: '/franquicia/',
  getParentRoute: () => rootRoute,
} as any)

const CarritoIndexRoute = CarritoIndexImport.update({
  path: '/carrito/',
  getParentRoute: () => rootRoute,
} as any)

const TasksIdRoute = TasksIdImport.update({
  path: '/tasks/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/tarjetaDebito': {
      id: '/tarjetaDebito'
      path: '/tarjetaDebito'
      fullPath: '/tarjetaDebito'
      preLoaderRoute: typeof TarjetaDebitoImport
      parentRoute: typeof rootRoute
    }
    '/tasks/$id': {
      id: '/tasks/$id'
      path: '/tasks/$id'
      fullPath: '/tasks/$id'
      preLoaderRoute: typeof TasksIdImport
      parentRoute: typeof rootRoute
    }
    '/carrito/': {
      id: '/carrito/'
      path: '/carrito'
      fullPath: '/carrito'
      preLoaderRoute: typeof CarritoIndexImport
      parentRoute: typeof rootRoute
    }
    '/franquicia/': {
      id: '/franquicia/'
      path: '/franquicia'
      fullPath: '/franquicia'
      preLoaderRoute: typeof FranquiciaIndexImport
      parentRoute: typeof rootRoute
    }
    '/inicio/': {
      id: '/inicio/'
      path: '/inicio'
      fullPath: '/inicio'
      preLoaderRoute: typeof InicioIndexImport
      parentRoute: typeof rootRoute
    }
    '/local/': {
      id: '/local/'
      path: '/local'
      fullPath: '/local'
      preLoaderRoute: typeof LocalIndexImport
      parentRoute: typeof rootRoute
    }
    '/mercadoPago/': {
      id: '/mercadoPago/'
      path: '/mercadoPago'
      fullPath: '/mercadoPago'
      preLoaderRoute: typeof MercadoPagoIndexImport
      parentRoute: typeof rootRoute
    }
    '/pago/': {
      id: '/pago/'
      path: '/pago'
      fullPath: '/pago'
      preLoaderRoute: typeof PagoIndexImport
      parentRoute: typeof rootRoute
    }
    '/tarjetaCredito/': {
      id: '/tarjetaCredito/'
      path: '/tarjetaCredito'
      fullPath: '/tarjetaCredito'
      preLoaderRoute: typeof TarjetaCreditoIndexImport
      parentRoute: typeof rootRoute
    }
    '/tasks/': {
      id: '/tasks/'
      path: '/tasks'
      fullPath: '/tasks'
      preLoaderRoute: typeof TasksIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  DashboardRoute,
  TarjetaDebitoRoute,
  TasksIdRoute,
  CarritoIndexRoute,
  FranquiciaIndexRoute,
  InicioIndexRoute,
  LocalIndexRoute,
  MercadoPagoIndexRoute,
  PagoIndexRoute,
  TarjetaCreditoIndexRoute,
  TasksIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard",
        "/tarjetaDebito",
        "/tasks/$id",
        "/carrito/",
        "/franquicia/",
        "/inicio/",
        "/local/",
        "/mercadoPago/",
        "/pago/",
        "/tarjetaCredito/",
        "/tasks/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.tsx"
    },
    "/tarjetaDebito": {
      "filePath": "tarjetaDebito.tsx"
    },
    "/tasks/$id": {
      "filePath": "tasks.$id.tsx"
    },
    "/carrito/": {
      "filePath": "carrito.index.tsx"
    },
    "/franquicia/": {
      "filePath": "franquicia.index.tsx"
    },
    "/inicio/": {
      "filePath": "inicio.index.tsx"
    },
    "/local/": {
      "filePath": "local.index.tsx"
    },
    "/mercadoPago/": {
      "filePath": "mercadoPago.index.tsx"
    },
    "/pago/": {
      "filePath": "pago.index.tsx"
    },
    "/tarjetaCredito/": {
      "filePath": "tarjetaCredito.index.tsx"
    },
    "/tasks/": {
      "filePath": "tasks.index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
