// if this is used in the staticProps it would not be included in the client side bundle
// which is good for security and size of the bundles.
import { Fragment } from 'react';
import Head from 'next/head';
import {MongoClient} from 'mongodb'; 

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  return (<Fragment>
    <Head>
      <title>React Meetups</title>
      <meta name="description" content="Browse a huge list of highly active React meetups"/>
    </Head>
    <MeetupList meetups={props.meetups} />
  </Fragment>);

}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  
  // This is secure place to store credentials - not be visible in the client side. 
  const client = await MongoClient.connect(process.env.DB_REQ_URL);

  // get a hold of database - if does not exist, it will be created. 
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      }))
    },
    revalidate: 1
  }; 
}

export default HomePage;
