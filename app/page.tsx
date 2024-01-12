import { Avatar, Card, CardBody, CardFooter, CardHeader, Chip, Image } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="grid h-screen place-items-center p-8">
      <Card className="max-w-sm">
        <CardHeader>
          <Image
            alt="NextUI hero Image"
            src="/sky.jpg"
            width={390}
          />
        </CardHeader>
        <CardBody>
          <Chip radius="sm">Learning</Chip>
          <p className="text-sm my-2 opacity-60">Published 21 Dec 2023</p>
          <p className="text-xl font-bold my-2">HTML & CSS foundations</p>
          <p className="text-sm my-2 opacity-60 leading-6">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        </CardBody>
        <CardFooter>
          <div className="flex w-full items-center">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <p className="ml-4">Jedsada Nuanyoi</p>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
