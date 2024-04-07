import { z } from 'nestjs-zod/z'
import { createZodDto } from 'nestjs-zod'
import { payloadTemplateId } from './model'

export const deletePayloadTemplate = z.object({
  id: payloadTemplateId,
})

export type DeletePayloadTemplate = z.infer<typeof deletePayloadTemplate>

export class DeletePayloadTemplateDto extends createZodDto(deletePayloadTemplate) { }
