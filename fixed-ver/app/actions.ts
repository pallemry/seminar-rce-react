'use server';

export async function doThing(payload: any): Promise<void> {
    console.log('Got payload:', payload);
   return { ok: true, payload };
}
