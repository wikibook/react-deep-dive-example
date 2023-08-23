import { NextPageContext } from 'next'

export default function HelloGreeting({ greeting }: { greeting: string }) {
  return <div>hello {greeting}</div>
}

export const getServerSideProps = (context: NextPageContext) => {
  const {
    query: { greeting },
  } = context

  return {
    props: {
      greeting,
    },
  }
}
