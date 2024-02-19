import type { H3Event} from 'h3'

export default eventHandler(async (event: H3Event) => {
  const prisma = event.context.prisma

  const medicinesCount = await prisma.Medicine.count()

  if (!medicinesCount) {
    throw createError({ statusCode: 404, statusMessage: 'Failed to find any Medicine' })
  }
  return medicinesCount
})
