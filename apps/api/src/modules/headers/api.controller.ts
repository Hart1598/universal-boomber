import { ModuleRoute, Route } from "../../decorators";

const MODULE_NAME = "headers";

@ModuleRoute(MODULE_NAME)
export class HeadersApiController {
  constructor() { }

  @Route(MODULE_NAME, 'list')
  list() {
    return null
  }

  @Route(MODULE_NAME, 'create')
  create() {
    return null
  }

  @Route(MODULE_NAME, 'delete')
  delete() {
    return null
  }
}
