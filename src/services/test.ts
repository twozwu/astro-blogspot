export async function get({ request }) {
  // process the URL into a more usable format
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);

  // set up a response object
  const data = {
    hello: params.get("hello"),
  };

  // this will yield { hello: 'meow' } on your Astro server console
  console.log(data);

  // return the response
  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
