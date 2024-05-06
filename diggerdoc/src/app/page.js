import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Welcome to DiggerDoc</h1>
      <p>
        The App for all your heavy machine service needs.
      </p>
      <Image
        src="/diggerdoc.png"
        alt="DiggerDoc Logo"
        width={200}
        height={200}
      />
    </div>
  );
}
