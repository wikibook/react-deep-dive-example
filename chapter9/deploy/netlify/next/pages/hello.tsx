import { GetServerSideProps } from "next"

export default function Hello({hello}: {hello: string}) {
    return <>Hello {hello}!</>
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            hello:'world'
        }
    }
}