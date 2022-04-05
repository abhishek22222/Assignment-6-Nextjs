// our-domain.com/new-meetup
import Head  from "next/head";
import router, { useRouter } from "next/router";
import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetupPage() {
  const Router = useRouter();
  async function addMeetupHandler(enteredMeetupdata) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  }
  return <Fragment>
    <Head>
        <title>New Meetup</title>
        <meta
          name="description"
          content="Add yous own meetups"
        />
      </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </Fragment>  ;
}
export default NewMeetupPage;
