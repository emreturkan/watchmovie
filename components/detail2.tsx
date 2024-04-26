import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarIcon } from "./icons";

export default function Component() {
  return (
    <div className="bg-[#191919] min-h-screen text-white">
      <div className="pt-8 px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center">
            <img
              alt="Rebel Moon Part Two: The Scargiver"
              className="w-[300px] h-[400px] mt-4 lg:mt-0"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/400",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="lg:ml-8">
              <p className="text-sm text-gray-400">April 19th, 2024</p>
              <h1 className="text-4xl font-bold mt-1">
                Rebel Moon — Part Two: The Scargiver
              </h1>
              <div className="flex mt-4 space-x-2">
                <Badge variant="secondary">Science Fiction</Badge>
                <Badge variant="secondary">Action</Badge>
                <Badge variant="secondary">Drama</Badge>
                <Badge variant="secondary">Adventure</Badge>
              </div>
              <div className="flex items-center mt-2">
                <StarIcon className="w-5 h-5 text-yellow-400" />
                <p className="ml-2">6.2</p>
              </div>
              <p className="mt-4">
                The rebels gear up for battle against the ruthless forces of the
                Motherworld as unbreakable bonds are forged, heroes emerge — and
                legends are made.
              </p>
              <div className="flex space-x-4 mt-4">
                <Button variant="secondary">Watch Providers</Button>
                <Button variant="ghost">Add to list</Button>
              </div>
            </div>
          </div>
          <img
            alt="Rebel Moon Collection"
            className="w-[300px] h-[200px] lg:ml-8"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
        <div className="mt-8">
          <p className="text-sm">Part of</p>
          <h2 className="text-xl mt-1">Rebel Moon Collection</h2>
          <Button className="mt-2" variant="ghost">
            See collection
          </Button>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8">
        <div className="flex overflow-x-auto space-x-8 py-4 px-8">
          <Button variant="ghost">Reviews</Button>
          <Button variant="ghost">Credits</Button>
          <Button variant="ghost">Recommendations</Button>
          <Button variant="ghost">Similar</Button>
          <Button variant="ghost">Images</Button>
          <Button variant="ghost">Videos</Button>
        </div>
      </div>
      <div className="px-8 mt-4">
        <p>Login or Register to make your first review!</p>
      </div>
    </div>
  );
}
