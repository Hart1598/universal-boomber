import { HeaderPresenter, ListHeadersDto } from '@app/validation';
import { HttpStatus, applyDecorators } from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';


export function ListHeadersDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'List headers',
    }),
    ApiQuery({
      type: ListHeadersDto,
    }),
    ApiResponse({
      status: HttpStatus.OK,
      type: HeaderPresenter,
      isArray: true,
    }),
    ApiBadRequestResponse(),
    ApiNotFoundResponse(),
  );
}
