import Image from "next/image";
import Link from "next/link";

const EventsPage = ({data}) => {
  return (
    <>
      {data.map(event => (
        <>
        <Link href={`/events/${event.id}`} key={event.id}>
          <div>
            <Image src={event.image} alt={event.description} height={400} width={600} />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        </Link>
        </>
      ))}
    </>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const data = await import("../../data/data");
  const {events_categories} = data;
  return {
    props: {
data: events_categories
    }
  }
}