import { ApiEndpointType, HTTP_METHOD } from '@app/types'
import { z } from 'nestjs-zod/z'
import { createZodDto } from 'nestjs-zod'

export const apiEndpointId = z.number().positive().int();

const model = z.object({
  id: apiEndpointId,
  url: z.string().url(),
  method: z.nativeEnum(HTTP_METHOD),
  type: z.nativeEnum(ApiEndpointType),
  createdAt: z.dateString()
})

export type ApiEndpoint = z.infer<typeof model>

export class ApiEndpointPresenter extends createZodDto(model) { }
