import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá Edson</h2>
        <p>Segunda-Feira, 05 de agosto.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..."/>
          <Button>
            <SearchIcon/>
          </Button>
        </div>

        <div className="relative h-[150px] w-full">
          <Image alt="Agende nas melhores" src="/banner-01.png" fill className="object-cover rounded-xl"/>
        </div>
      </div>
    </div>
  );
}
