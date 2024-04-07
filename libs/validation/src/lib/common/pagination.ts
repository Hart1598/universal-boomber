import { z } from 'nestjs-zod/z'
import { createZodDto } from 'nestjs-zod'

export const pagination = z.object({
  take: z.number().int().positive().default(10),
  skip: z.number().int().default(0),
})

export type Pagination = z.infer<typeof pagination>

export class PaginationDto extends createZodDto(pagination) { }
