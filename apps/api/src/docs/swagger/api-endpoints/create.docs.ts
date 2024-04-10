import { ApiEndpointPresenter } from '@app/validation';
import { HttpStatus, applyDecorators } from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';


export function CreateApiEndpointDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Create api endpoint',
    }),
    ApiResponse({
      status: HttpStatus.CREATED,
      type: ApiEndpointPresenter,
    }),
    ApiBadRequestResponse(),
  );
}
