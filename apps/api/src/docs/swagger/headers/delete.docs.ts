import { HttpStatus, applyDecorators } from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';


export function DeleteHeaderDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Delete header',
    }),
    ApiResponse({
      status: HttpStatus.OK,
    }),
    ApiBadRequestResponse(),
    ApiNotFoundResponse(),
  );
}
