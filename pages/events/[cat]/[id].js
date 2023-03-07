import Image from "next/image";

const Page = ({event}) => {
    return (
        <div>
            <Image src={event.image} alt={event.title} width={1000} height={500}/>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
        </div>
    )
}

export default Page;

export async function getStaticPaths() {
    const {allEvents} = await import("/data/data");
    const paths = allEvents.map((event) => ({
        params: {
            cat: event.city,
            id: event.id.toString()
        }
    }));
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const {allEvents} = await import("/data/data");
    const event = allEvents.find(event => event.id === context.params.id);
    return {
        props: {
            event
        }
    }
}