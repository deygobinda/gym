import {
  CalendarDays,
  Earth,
  FileText,
  Bike,
  Package,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
} from "lucide-react";
import Navbar from "./components/Navbar";
import RightLine from "./components/RightLine";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useState, useEffect, useCallback, ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

export default function ZomatoPartner() {
  const [searchLocation, setSearchLocation] = useState("Delhi NCR");
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const products = [
    {
      title: "Advertise",
      description:
        "For every marketing dollar spent, GymPass returns over 8x the investment",
      image: "/placeholder.svg?height=200&width=300",
      learnMoreLink: "#",
    },
    {
      title: "Events",
      description:
        'Partner with us for India\'s biggest fitness and health events - "GymFest"',
      image: "/placeholder.svg?height=200&width=300",
      learnMoreLink: "#",
    },
    {
      title: "HyperFit",
      description:
        "Get high-quality gym equipment and supplies to ensure a top-tier fitness experience",
      image: "/placeholder.svg?height=200&width=300",
      learnMoreLink: "#",
    },
    {
      title: "GymPass Pro",
      description:
        "Offer exclusive benefits and discounts to frequent gym-goers",
      image: "/placeholder.svg?height=200&width=300",
      learnMoreLink: "#",
    },
    {
      title: "GymPass for Work",
      description:
        "Streamlined fitness solutions for corporates and businesses",
      image: "/placeholder.svg?height=200&width=300",
      learnMoreLink: "#",
    },
  ];

  const nextProduct = useCallback(() => {
    setCurrentProductIndex(
      (prevIndex) => (prevIndex + 1) % (products.length - itemsPerPage + 1)
    );
  }, [products.length, itemsPerPage]);

  const prevProduct = useCallback(() => {
    setCurrentProductIndex(
      (prevIndex) =>
        (prevIndex - 1 + (products.length - itemsPerPage + 1)) %
        (products.length - itemsPerPage + 1)
    );
  }, [products.length, itemsPerPage]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextProduct();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextProduct]);

  return (
    <div className="font-sans">
      <div className="w-full bg-yellow-400">
        <Navbar />
        <div className="container mx-auto px-4 py-8 md:py-16 text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold tracking-wider mb-4 md:mb-6">
              Partner with GymPass at
              <br />
              0% commission for the 1st month!
            </h1>
            <p className="text-base md:text-lg mb-6 md:mb-8">
              And get access to a wider customer base with promotional ads worth
              INR 1500. Offer valid for new gym partners in select cities.
            </p>
            <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <Button className="bg-blue-500 hover:bg-blue-700 text-white text-base md:text-lg px-4 md:px-6 py-2 md:py-3 w-full sm:w-auto">
                Register your gym
              </Button>
              <Button
                variant="outline"
                className="bg-white text-black hover:bg-gray-100 text-base md:text-lg px-4 md:px-6 py-2 md:py-3 w-full sm:w-auto"
              >
                Login to view existing gym
              </Button>
            </div>
            <p className="text-base md:text-lg">
              Need help? Contact +91 97-38-38-38-38
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f4f4] py-8 md:py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto -mt-12 md:-mt-24 shadow-lg">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl md:text-3xl font-bold mb-2">
                Get started with gym registration
              </CardTitle>
              <p className="text-sm md:text-base text-gray-600">
                Please keep the following documents ready for a smooth signup
                process:
              </p>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2 md:space-y-4">
                  <RightLine value="Fitness Center License" />
                  <RightLine value="GSTIN Certificate" />
                  <RightLine value="Your Gym/Club Pricing and Services List" />
                </div>
                <div className="space-y-2 md:space-y-4">
                  <RightLine value="PAN Card Copy" />
                  <RightLine value="Bank Account Details" />
                  <RightLine value="Images of top 5 Facilities or Equipment" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10 md:space-y-20">
            <div className="space-y-4 md:space-y-7">
              <div className="text-2xl md:text-4xl font-medium text-center">
                Why should you partner with GymPass?
              </div>
              <div className="text-center text-base md:text-lg text-gray-500 leading-7 md:leading-9">
                GymPass enables you to boost your revenue, reach new fitness
                enthusiasts, and increase the visibility of your gym. Our
                platform provides key insights to help you grow your business.
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Card className="w-full sm:w-fit rounded-sm">
                <CardContent className="p-0 rounded-none">
                  <div className="flex space-x-3 md:space-x-5 px-4 md:px-8 py-3 md:py-5">
                    <div className="flex justify-center items-center">
                      <Earth className="text-blue-500" size={32} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="text-blue-500 text-xl md:text-2xl">
                        1000+ cities
                      </div>
                      <div className="text-base md:text-lg text-gray-500">
                        in India
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full sm:w-fit rounded-sm">
                <CardContent className="p-0 rounded-none">
                  <div className="flex space-x-3 md:space-x-5 px-4 md:px-8 py-3 md:py-5">
                    <div className="flex justify-center items-center">
                      <Dumbbell className="text-blue-500" size={32} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="text-blue-500 text-xl md:text-2xl">
                        5000+
                      </div>
                      <div className="text-base md:text-lg text-gray-500">
                        gym listings
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full sm:w-fit rounded-sm">
                <CardContent className="p-0 rounded-none">
                  <div className="flex space-x-3 md:space-x-5 px-4 md:px-8 py-3 md:py-5">
                    <div className="flex justify-center items-center">
                      <CalendarDays className="text-blue-500" size={32} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="text-blue-500 text-xl md:text-2xl">
                        1 million+
                      </div>
                      <div className="text-base md:text-lg text-gray-500">
                        monthly bookings
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f4f4] py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-medium text-center mb-8 md:mb-12">
            How it works?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Step
              icon={
                <FileText className="w-10 h-10 md:w-12 md:h-12 text-yellow-500" />
              }
              title="Step 1"
              heading="Create your page on GymPass"
              description="Help users discover your gym by providing details such as location, services offered, and membership options."
              bgColor="bg-yellow-50"
            />
            <Step
              icon={<Bike className="w-10 h-10 md:w-12 md:h-12 text-red-500" />}
              title="Step 2"
              heading="Register for hourly bookings"
              description="Let members find and book sessions at your gym on a flexible hourly basis. No upfront costs!"
              bgColor="bg-red-50"
            />
            <Step
              icon={
                <Package className="w-10 h-10 md:w-12 md:h-12 text-orange-500" />
              }
              title="Step 3"
              heading="Start receiving bookings online"
              description="Easily manage your bookings through our partner app, get real-time updates, and keep track of gym usage."
              bgColor="bg-orange-50"
            />
          </div>
        </div>
      </div>
      <div className="bg-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-medium text-center mb-4">
              Already have your gym listed?
            </h2>
            <p className="text-center text-gray-600 mb-6 md:mb-8">
              Search here and claim the ownership of your gym
            </p>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for your gym, eg. Greenland gym"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
              {searchLocation && (
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setSearchLocation("")}
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f4f4] py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-medium text-center mb-8 md:mb-12">
            Our products
          </h2>
          <div className="relative max-w-6xl mx-auto">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
              onClick={prevProduct}
              aria-label="Previous product"
            >
              <ChevronLeft className="text-gray-600" />
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
              onClick={nextProduct}
              aria-label="Next product"
            >
              <ChevronRight className="text-gray-600" />
            </button>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentProductIndex * (100 / itemsPerPage)
                  }%)`,
                }}
              >
                {products.map((product, index) => (
                  <div
                    key={index}
                    className={`w-full flex-shrink-0 px-2 md:px-4`}
                    style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
                  >
                    <Card>
                      <CardContent className="p-4 md:p-6">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                          {product.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 mb-4">
                          {product.description}
                        </p>
                        <a
                          href={product.learnMoreLink}
                          className="text-blue-500 hover:underline"
                        >
                          Learn more
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-4">
              {products
                .slice(0, products.length - itemsPerPage + 1)
                .map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full mx-1 ${
                      index === currentProductIndex
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentProductIndex(index)}
                    aria-label={`Go to product ${index + 1}`}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-medium text-center mb-8 md:mb-12">
            Frequently asked questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What will GymPass charge me for creating a page on its
                  platform?
                </AccordionTrigger>
                <AccordionContent>
                  GymPass does not charge any upfront fee for listing your gym.
                  It's free to create and manage your page.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What documents are required for registering on the platform?
                </AccordionTrigger>
                <AccordionContent>
                  You will need a GST number, PAN card, gym registration
                  documents, and valid bank account details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  I have a large fleet of trainers and staff, why should I use
                  GymPass?
                </AccordionTrigger>
                <AccordionContent>
                  GymPass helps you manage bookings efficiently, filling up idle
                  slots and increasing revenue without any extra effort.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What happens if the average workout session duration booked
                  through GymPass is very low?
                </AccordionTrigger>
                <AccordionContent>
                  GymPass uses a flexible hourly model, which helps increase
                  customer engagement. Gyms have reported better session
                  utilization and an increase in overall footfall through our
                  platform.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({
  icon,
  title,
  heading,
  description,
  bgColor,
}: {
  icon: ReactNode;
  title: string;
  heading: string;
  description: string;
  bgColor: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`rounded-full p-4 md:p-6 ${bgColor} mb-4`}>{icon}</div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <h4 className="text-base md:text-lg font-medium mb-2">{heading}</h4>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </div>
  );
}
