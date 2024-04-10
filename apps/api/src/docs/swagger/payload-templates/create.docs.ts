import { PayloadTemplatePresenter } from '@app/validation';
import { HttpStatus, applyDecorators } from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';


export function CreatePayloadTemplateDocs() {
  return applyDecorators(
    ApiOperation({
      summary: 'Create payload template',
    }),
    ApiResponse({
      status: HttpStatus.CREATED,
      type: PayloadTemplatePresenter,
    }),
    ApiBadRequestResponse(),
  );
}
