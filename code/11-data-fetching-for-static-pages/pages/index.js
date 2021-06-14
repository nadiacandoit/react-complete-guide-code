import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  /*
  if we use httmlfetch in useEffect 
   - functions executes after components functions are all executed
  data is fetced after components are already fetched - not be read from the crawler. 
  - to escape from this problem next js provides two forms of prerendering
    (1) static generation > inside the files in page components  
      export getStaticProps - this is called before component functions are called
    (2) server side rendering 
  */
  return <MeetupList meetups={props.meetups} />;
}

// Executes on the build process
// >> data can be outdated! - we can use
// needs always return object
export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
    // + never older than x seconds
    //    it would be evaluted in the server!
  };
}

// alternative - this always learn on the server! for every incomeing request
export async function getServerSideProps(content) {
  const req = context.req;
  const res = contxt.res;

  return {
    props: { meetup: DUMMY_MEETUPS },
  };
}

export default HomePage;
