import { HeaderPresenter, ListHeadersDto, ListPayloadTemplateDto, PayloadTemplatePresenter } from '@app/validation';
import { HttpStatus, applyDecorators } from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';


export function ListPayloadTemplatesDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'List payload templates',
    }),
    ApiQuery({
      type: ListPayloadTemplateDto,
    }),
    ApiResponse({
      status: HttpStatus.OK,
      type: PayloadTemplatePresenter,
      isArray: true,
    }),
    ApiBadRequestResponse(),
    ApiNotFoundResponse(),
  );
}
