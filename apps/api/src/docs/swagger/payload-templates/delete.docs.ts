import { HttpStatus, applyDecorators } from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';


export function DeletePayloadTemplateDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Delete payload template',
    }),
    ApiResponse({
      status: HttpStatus.OK,
    }),
    ApiBadRequestResponse(),
    ApiNotFoundResponse(),
  );
}
