export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { WritableStream, ReadableStream, TransformStream } = await import('stream/web');

    if (!global.WritableStream) {
      global.WritableStream = WritableStream;
      global.ReadableStream = ReadableStream;
      global.TransformStream = TransformStream;
    }
  }
}