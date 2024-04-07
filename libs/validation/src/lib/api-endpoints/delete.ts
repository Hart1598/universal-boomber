import { z } from 'nestjs-zod/z'
import { createZodDto } from 'nestjs-zod'

export const deleteEndpoint = z.object({
  id: z.number().positive().int(),
})

export type DeleteEndpoint = z.infer<typeof deleteEndpoint>

export class DeleteEndpointDto extends createZodDto(deleteEndpoint) { }
