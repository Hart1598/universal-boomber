import { z } from 'nestjs-zod/z'
import { createZodDto } from 'nestjs-zod'
import { apiEndpointId } from './model'

export const deleteEndpoint = z.object({
  id: apiEndpointId,
})

export type DeleteEndpoint = z.infer<typeof deleteEndpoint>

export class DeleteEndpointDto extends createZodDto(deleteEndpoint) { }
