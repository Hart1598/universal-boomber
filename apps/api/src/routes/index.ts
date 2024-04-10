import { HTTP_METHOD } from '@app/types';

export const routes = {
  'api-endpoints': {
    basePath: 'api-endpoints',
    routes: {
      list: {
        path: '/',
        method: HTTP_METHOD.GET,
      },
      create: {
        path: '/',
        method: HTTP_METHOD.POST,
      },
      delete: {
        path: '/:id',
        method: HTTP_METHOD.DELETE,
      }
    }
  },
  headers: {
    basePath: 'api-endpoints/:id/headers',
    routes: {
      list: {
        path: '/',
        method: HTTP_METHOD.GET,
      },
      create: {
        path: '/',
        method: HTTP_METHOD.POST,
      },
      delete: {
        path: '/:id',
        method: HTTP_METHOD.DELETE,
      }
    }
  },
  'payload-templates': {
    basePath: 'api-endpoints/:id/payload-templates',
    routes: {
      list: {
        path: '/',
        method: HTTP_METHOD.GET,
      },
      create: {
        path: '/',
        method: HTTP_METHOD.POST,
      },
      delete: {
        path: '/:id',
        method: HTTP_METHOD.DELETE,
      }
    }
  },
  dispatcher: {
    basePath: 'dispatcher',
    routes: {
      run: {
        path: '/run',
        method: HTTP_METHOD.POST,
      }
    }
  }
}
