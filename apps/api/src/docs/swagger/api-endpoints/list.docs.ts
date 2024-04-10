import { ApiEndpointPresenter, ListEndpointsDto } from '@app/validation';
import { HttpStatus, applyDecorators } from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';


export function ListApiEndpointDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'List api endpoints',
    }),
    ApiQuery({
      type: ListEndpointsDto,
    }),
    ApiResponse({
      status: HttpStatus.OK,
      type: ApiEndpointPresenter,
      isArray: true,
    }),
    ApiBadRequestResponse(),
    ApiNotFoundResponse(),
  );
}
