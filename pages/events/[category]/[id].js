import Image from "next/image";

const EventsDetailPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>{data.title}</h1>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <p>{data.description}</p>
    </div>
  );
};

export default EventsDetailPage;

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        category: path.city,
        id: path.id,
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const { allEvents } = await import("/data/data.json");
  const id = context?.params.id;
  const eventData = allEvents.find((ev) => ev.id === id);
  return {
    props: { data: eventData },
  };
}
