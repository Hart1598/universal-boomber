import { z } from 'nestjs-zod/z'
import { createZodDto } from 'nestjs-zod'

export const pagination = z.object({
  take: z.string().default('10').transform(value => parseInt(value, 10)),
  skip: z.string().default('0').transform(value => parseInt(value, 10)),
})

export type Pagination = z.infer<typeof pagination>

export class PaginationDto extends createZodDto(pagination) { }
