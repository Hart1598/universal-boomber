import { z } from 'nestjs-zod/z'
import { createZodDto } from 'nestjs-zod'
import { headerId } from './model'

export const deleteHeader = z.object({
  headerId
})

export type DeleteHeader = z.infer<typeof deleteHeader>

export class DeleteHeaderDto extends createZodDto(deleteHeader) { }
