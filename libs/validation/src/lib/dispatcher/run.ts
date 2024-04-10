import { z } from 'nestjs-zod/z'
import { createZodDto } from 'nestjs-zod'

export const dispatcherRun = z.object({
  rounds: z.number().positive(),
  target: z.string().trim(),
})

export type DispatcherRun = z.infer<typeof dispatcherRun>

export class DispatcherRunDto extends createZodDto(dispatcherRun) { }

export const dispatcherRunOutput = z.object({
  status: z.string(),
  sendCount: z.number(),
})


export type DispatcherRunOutput = z.infer<typeof dispatcherRunOutput>

export class DispatcherRunOutputDto extends createZodDto(dispatcherRunOutput) { }
