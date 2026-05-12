export async function onRequestPost(context) {
  try {
    const { request } = context;
    
    // Cloudflare Pages Functions require cloning the request if it's read multiple times
    // or using it directly.
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Valid email is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // In a real application, you would connect to a database here.
    // e.g., Supabase, Turso (D1), etc.
    console.log(`New waitlist signup: ${email}`);

    return new Response(JSON.stringify({ message: 'Successfully joined the waitlist!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
