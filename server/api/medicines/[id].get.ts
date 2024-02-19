import type { H3Event} from 'h3'

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma
  const { params } = event.context
  const id = params.id

  const medicine = await prisma.Medicine.findUnique({
    where: { id }
  })

  if (!medicine) {
    throw createError({ statusCode: 404, statusMessage: `Failed to find medicine with id ${params.id}` })
  }
  return medicine
})
