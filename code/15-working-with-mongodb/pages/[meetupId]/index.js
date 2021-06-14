import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>Meetup Detail for {props.meetupData.title}</title>
        <meta
          name="description"
          content={props.meetupData.description}
        />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

//this should also be from the database.
export async function getStaticPaths() {
  // This is secure place to store credentials - not be visible in the client side.
  const client = await MongoClient.connect(process.env.DB_REQ_URL);

  // get a hold of database - if does not exist, it will be created.
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  // collection.find({filter}, {values to be included})
  // if parameters are empty it finds object
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  //Fallback set to true or 'blocking' - List might not be exhaustive
  // It will pregenerate on demand and cache it
  // blocking - use does not see anything until the request page is served. 
  // true - temporary page is shown in between
  return {
    fallback: 'blocking', 
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  // This is secure place to store credentials - not be visible in the client side.
  const client = await MongoClient.connect(process.env.DB_REQ_URL);

  // get a hold of database - if does not exist, it will be created.
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  // collection.find({filter}, {values to be included})
  // if parameters are empty it finds object

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
