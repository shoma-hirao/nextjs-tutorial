import CategoryEvent from "@/src/components/events/categoryEvent";

const EventsCategoryPage = ({ data, pageName }) => (
  <CategoryEvent data={data} pageName={pageName} />
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

  return {
    paths: allPaths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  // console.log(context);
  const id = context?.params.category;
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);

  return {
    props: {
      data,
      pageName: id,
    },
  };
}
