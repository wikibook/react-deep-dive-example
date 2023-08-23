import { GetServerSideProps, GetServerSidePropsContext } from 'next'

export class NotFoundError extends Error {
  public constructor(private resourceId: unknown) {
    super()
  }

  public get message() {
    return `${this.resourceId} not found`
  }
}

export default function withGetServerSideProps(
  getServerSideProps: GetServerSideProps,
): GetServerSideProps {
  return async (context: GetServerSidePropsContext) => {
    try {
      return await getServerSideProps(context)
    } catch (error) {
      if (error instanceof NotFoundError) {
        return {
          notFound: true,
        }
      }

      throw error
    }
  }
}
