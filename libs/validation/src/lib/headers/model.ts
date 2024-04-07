import { z } from 'nestjs-zod/z'
import { apiEndpointId } from '../api-endpoints';
import { createZodDto } from 'nestjs-zod';

export const headerId = z.number().positive().int();

const model = z.object({
  id: headerId,
  endpointId: apiEndpointId,
  key: z.string().trim(),
  value: z.string().trim(),
})

export type Header = z.infer<typeof model>

export class HeaderPresenter extends createZodDto(model) { }
