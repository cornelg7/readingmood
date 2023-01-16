import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Home: NextPage = () => {
  const [book, setBook] = useState('');
  const [songs, setSongs] = useState<string[]>([]);
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getSongs = async (event: any, retry = 0) => {
    event.preventDefault();
    if (retry > 1) {
      return;
    }
    if (loading) {
      return;
    }
    if (!book?.length) {
      setError('Book name required. I\'m not a wizard');
      return;
    }
    setLoading(true);
    const response = await fetch('/api/getSongs', {
      method: 'POST',
      body: JSON.stringify({book, retry}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setLoading(false);
    if (response.status === 400) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setError(data.error);
      if (data.unknown && retry === 0) {
        if (retry > 1) {
          return;
        }
        // await getSongs(event, retry + 1);
        return;
      }
      return;
    }
    if (response.status === 500) {
      setError('Uh-oh, you broke it!');
      return;
    }
    setError('');
    const choices: string[] = data.data.choices;
    setSongs(choices);
    const reason: string = data.data.reason;
    setReason(reason);
  }

  const ResultComponent: NextPage = (props) => {
    if (loading) {
      return <h1>Loading...</h1>
    }
    if (error) {
      return <>
        <h3 className="text-md font-bold text-red-200">{error}</h3>
      </>
    }
    if (!songs?.length) {
      return <></>
    }
    return <>
      <h3 className="text-2xl font-bold">You might want to listen to...</h3>
      <div className="text-lg">
        <ul>
          {songs.map((song, i) => (<li key={i}>
            {song}
          </li>))}
        </ul>
      </div>
      <h3 className="text-2xl font-bold">Because (might contain spoilers)...</h3>
      <div className="text-lg blur-sm hover:blur-none">
        {reason}
      </div>
    </>
  }

  return (
    <>
      <Head>
        <title>readingmood</title>
        <meta name="description" content="need something to listen to while reading?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#cecece] to-[#222]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            reading<span className="text-black">mood</span>
          </h1>
          <h3 className="text-2xl font-bold mx-5">Don&#39;t know what to listen to while reading your book? Try these songs!</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 flex-wrap-reverse">
            <div
              className="flex max-w-lg flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 order-2 sm:order-1"
            >
              <img className="rounded-xl" src="/read-and-listen.png"  alt={'read and listen'}/>
            </div>
            <div
              className="flex max-w-lg flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 order-1 sm:order-2"
            >
              <h3 className="text-2xl font-bold">If you&#39;re reading...</h3>
              {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
              <form action="" onSubmit={getSongs}>
                <div className="relative rounded-sm flex">
                  <input type="text" name="book" id="book" disabled={loading}
                         className="block w-full rounded-md border-gray-300 pl-3 pr-3 focus:border-indigo-500 focus:ring-indigo-500 text-md text-black"
                         placeholder="this book"
                         value={book}
                         onChange={(e) => {setBook(e.target.value)}}/>
                  <button type="submit" disabled={loading} className="text-xl ml-3 font-extrabold">→</button>
                </div>
              </form>

              <ResultComponent/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
