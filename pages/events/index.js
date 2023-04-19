import Link from "next/link";

const EventsPage = () => {
  return (
    <div>
      <h1>Events us Page</h1>
      <div>
        <Link href="">
          <h2> Events in London</h2>
        </Link>
        <Link href="">
          <h2> Events in San Francisco</h2>
        </Link>
        <Link href="">
          <h2> Events in Barcelona</h2>
        </Link>
      </div>
    </div>
  );
};

export default EventsPage;