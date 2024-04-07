import { ApiEndpointType, HTTP_METHOD } from '@app/types'
import { z } from 'nestjs-zod/z'
import { createZodDto } from 'nestjs-zod'

export const createEndpoint = z.object({
  url: z.string().url(),
  method: z.nativeEnum(HTTP_METHOD),
  type: z.nativeEnum(ApiEndpointType),
})

export type CreateEndpoint = z.infer<typeof createEndpoint>

export class CreateEndpointDto extends createZodDto(createEndpoint) { }
