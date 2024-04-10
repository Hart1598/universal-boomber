import { ApiEndpointPresenter, HeaderPresenter } from '@app/validation';
import { HttpStatus, applyDecorators } from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';


export function CreateHeaderDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Create header',
    }),
    ApiResponse({
      status: HttpStatus.CREATED,
      type: HeaderPresenter,
    }),
    ApiBadRequestResponse(),
  );
}
