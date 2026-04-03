import React from "react";
import { WritableStream, ReadableStream, TransformStream } from 'stream/web';

if (!global.WritableStream) {
  global.WritableStream = WritableStream;
  global.ReadableStream = ReadableStream;
  global.TransformStream = TransformStream;
}

// ... rest of your existing layout.js code

const MainLayout = ({ children }) => {
  return <div className="container mx-auto my-32">{children}</div>;
};

export default MainLayout;