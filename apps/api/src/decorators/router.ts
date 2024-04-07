import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { routes } from "../routes";
import { HTTP_METHOD } from "@app/types";

export const ModuleRoute = (moduleName: string, apiVersion?: string) => {
  const module = routes[moduleName];

  if (!module) {
    throw new Error(`Module ${moduleName} not found in router.`);
  }

  return Controller({
    path: module.basePath,
    version: apiVersion,
  });
};

export const routeFactory = (method: HTTP_METHOD, path: string) => {
  switch (method) {
    case HTTP_METHOD.GET:
      return Get(path);
    case HTTP_METHOD.POST:
      return Post(path);
    case HTTP_METHOD.PUT:
      return Put(path);
    case HTTP_METHOD.DELETE:
      return Delete(path);
    case HTTP_METHOD.PATCH:
      return Patch(path);
    default:
      throw new Error(`HTTP method ${method} not supported.`);
  }
};

export function Route(moduleName: string, routeName: string): MethodDecorator {
  const module = routes[moduleName];
  if (!module) {
    throw new Error(`Module ${moduleName} not found in router.`);
  }

  const route = module.routes[routeName];
  if (!route) {
    throw new Error(`Route ${routeName} not found in module ${moduleName}.`);
  }

  return routeFactory(route.method, route.path);
}
