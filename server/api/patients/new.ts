import type { H3Event} from 'h3'

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma
  const body = await readBody(event)
  const data = {
    user: { ...body }
  }

  const patient = await prisma.patient.create({ data })

  if (!patient) {
    throw createError({ statusCode: 404, statusMessage: 'Failed to create patient' })
  }
  return patient
})
