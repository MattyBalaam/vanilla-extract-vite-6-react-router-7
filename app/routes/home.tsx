import { sprinkles } from "~/theme/sprinkles.css";

export default function Home() {
  return <p className={sprinkles({background: 'test'})}>hello</p>;
}
