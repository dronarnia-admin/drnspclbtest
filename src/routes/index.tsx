import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Drone Space Lab</Title>
      <h1>Drone Space Lab</h1>
      <h2>Contact Us</h2>
    <p>If you have any questions, feel free to contact us at: <a href="mailto:drnfactory@gmail.com">drnfactory@gmail.com</a> </p>
       <style>
        body {
            background-color: black;
            color: white; /* Optionally, you can set the text color to white for better readability */
        }
    </style>
    </main>
  );
}
