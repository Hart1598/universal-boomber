import { z } from 'nestjs-zod/z'
import { createZodDto } from 'nestjs-zod'
import { apiEndpointId } from '../api-endpoints'
import { PayloadTemplateTarget } from '@app/types'

export const createPayloadTemplate = z.object({
  endpointId: apiEndpointId,
  template: z.string().trim(),
  target: z.nativeEnum(PayloadTemplateTarget),
  valueTarget: z.string().trim(),
})

export type CreatePayloadTemplate = z.infer<typeof createPayloadTemplate>

export class CreatePayloadTemplateDto extends createZodDto(createPayloadTemplate) { }
