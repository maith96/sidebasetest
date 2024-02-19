import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import {patientsRouter} from "~/server/trpc/routers/patients";

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish()
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
        time: new Date()
      }
    }),
  patients: patientsRouter
}
)

// export type definition of API
export type AppRouter = typeof appRouter
