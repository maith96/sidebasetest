import type { H3Event} from 'h3'

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma
  const { params } = event.context
  const id = params.id

  const patient = await prisma.Patient.findUnique({
    where: { id }
  })

  if (!patient) {
    throw createError({ statusCode: 404, statusMessage: `Failed to find patient with id ${params.id}` })
  }
  return patient
})
