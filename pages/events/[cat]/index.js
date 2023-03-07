import Image from "next/image";
import Link from "next/link";

const Page = ({ events, pageName }) => {
  return (
    <div>
      <h1>Events in {pageName}</h1>
      {events.map((event) => (
        <Link
          key={event.id}
          href={`/events/${event.city}/${event.id}`}
        >
            <Image
              src={event.image}
              alt={event.description}
              height={200}
              width={200}
            />
            <h2>{event.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Page;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data");
  const paths = events_categories.map((cat) => ({
    params: { cat: cat.id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("/data/data");
  const id = context?.params.cat
  const data = allEvents.filter((event) => event.city === id);
  return {
    props: {
      events: data,
      pageName: id
    },
  };
}
