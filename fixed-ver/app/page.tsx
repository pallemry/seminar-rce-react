import { doThing } from "./actions";

export default function Home() {
  return (
    <div>
      <h1>POC App</h1>

      <form action={doThing} method="post">
        <input name="payload" defaultValue="hello world" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}