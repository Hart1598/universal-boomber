import { DispatcherRunOutputDto } from '@app/validation';
import { HttpStatus, applyDecorators } from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';


export function DispatcherRunDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Dispatch run',
    }),
    ApiResponse({
      status: HttpStatus.OK,
      type: DispatcherRunOutputDto,
    }),
    ApiBadRequestResponse(),
  );
}
