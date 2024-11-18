import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./hello/header";
import Hero from "./hello/hero";


export default function Home() {
  return (
    <div>
      <Header /> 
      <Hero />
    </div>
  );
}
