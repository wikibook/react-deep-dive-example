export default function Hello() {
  console.log(typeof window === 'undefined' ? '서버' : '클라이언트') // eslint-disable-line no-console
  return <>hello</>
}

export const getServerSideProps = () => {
  return {
    props: {},
  }
}
