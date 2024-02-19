import type { H3Event} from 'h3'

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma

  const patientsCount = await prisma.Patient.count()

  if (!patientsCount) {
    throw createError({ statusCode: 404, statusMessage: 'Failed to find any patient' })
  }
  return patientsCount
})
