import Link from "next/link";

const EventsCategoryPage = () => {
  return (
    <div>
      <h1>Events in London</h1>

      <Link href="/event/event1"> Event 1 </Link>
      <Link href="/event/event2"> Event 2 </Link>
      <Link href="/event/event3"> Event 3 </Link>
      <Link href="/event/event4"> Event 4 </Link>
      <Link href="/event/event5"> Event 5 </Link>
      <Link href="/event/event6"> Event 6 </Link>
    </div>
  );
};

export default EventsCategoryPage;
