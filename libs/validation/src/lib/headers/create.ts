import { z } from 'nestjs-zod/z'
import { createZodDto } from 'nestjs-zod'
import { apiEndpointId } from '../api-endpoints'

export const createHeader = z.object({
  endpointId: apiEndpointId,
  key: z.string().trim(),
  value: z.string().trim(),
})

export type CreateHeader = z.infer<typeof createHeader>

export class CreateHeaderDto extends createZodDto(createHeader) { }
