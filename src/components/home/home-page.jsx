import Link from "next/link";
import Image from "next/image";

export const HomePage = ({data}) => {
    return (
        <main>
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
      </main>
    )
}