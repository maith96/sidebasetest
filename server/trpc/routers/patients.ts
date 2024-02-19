import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export const patientsRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.patient.findMany()
  })
})

export type PatientsRouter = typeof patientsRouter
