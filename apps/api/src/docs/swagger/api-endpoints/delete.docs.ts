import { HttpStatus, applyDecorators } from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';


export function DeleteApiEndpointDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Delete api endpoint',
    }),
    ApiResponse({
      status: HttpStatus.OK,
    }),
    ApiBadRequestResponse(),
    ApiNotFoundResponse(),
  );
}
