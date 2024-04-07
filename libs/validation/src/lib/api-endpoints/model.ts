import { ApiEndpointType, HTTP_METHOD } from '@app/types'
import { z } from 'nestjs-zod/z'
import { createZodDto } from 'nestjs-zod'

export const model = z.object({
  id: z.number().positive().int(),
  url: z.string().url(),
  method: z.nativeEnum(HTTP_METHOD),
  type: z.nativeEnum(ApiEndpointType),
  createdAt: z.dateString()
})

export type ApiEndpoint = z.infer<typeof model>

export class ApiEndpointPresenter extends createZodDto(model) { }
