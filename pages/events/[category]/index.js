import CategoryEvents from "@/src/components/events/categoryEvent";

const EventsCategoryPage = ({ data, pageName }) => (
  <CategoryEvents data={data} pageName={pageName} />
);

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
