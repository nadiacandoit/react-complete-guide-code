// our-domain.com/new-meetup
import {Fragment} from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {

  const router = useRouter(); 

  // should be async
  async function addMeetupHandler(enteredMeetupData) {
    // Here we can send a request to internal api route 
    // - with either built in fetch function 
    // - or using 3rd party library

    // same server but different path 
    // therefore, you new-meetup page in api. 
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);

    // Go back to the starting point
    // replace method would make sure that you cannot go back with the back button. 
    router.push('/');
  }

  return (
  <Fragment>
    <Head>
      <title>Add a New Meetup</title>
      <meta 
      name="description" 
      content="Add your own meetups and create amazing networking opportunities"/>    
    </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </Fragment>
  )
}

export default NewMeetupPage;