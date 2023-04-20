import Link from "next/link";
import Image from "next/image";

const EventsCategoryPage = ({ data, pageName }) => {
  return (
    <div>
      <h1>Events in {pageName}</h1>
      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
            <Image width={300} height={300} alt={ev.title} src={ev.image} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsCategoryPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        category: ev.id.toString(),
      },
    };
  });
  // console.log(allPaths);

  return {
    paths: allPaths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // console.log(context);
  const id = context?.params.category;
  const { allEvents } = await import("/data/data.json");
  // console.log(`id:${id}`);
  const data = allEvents.filter((ev) => ev.city === id);
  // console.log(data);

  return {
    props: {
      data,
      pageName: id,
    },
  };
}
