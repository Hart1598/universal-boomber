import { z } from 'nestjs-zod/z'
import { apiEndpointId } from '../api-endpoints';
import { createZodDto } from 'nestjs-zod';
import { PayloadTemplateTarget } from '@app/types';

export const payloadTemplateId = z.number().positive().int();

const model = z.object({
  id: payloadTemplateId,
  endpointId: apiEndpointId,
  template: z.string().trim(),
  target: z.nativeEnum(PayloadTemplateTarget),
  valueTarget: z.string().trim(),
})

export type PayloadTemplate = z.infer<typeof model>

export class PayloadTemplatePresenter extends createZodDto(model) { }
