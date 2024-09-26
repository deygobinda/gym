import {
  CalendarDays,
  Earth,
  Store,
  FileText,
  Bike,
  Package,
  MapPin,
  ChevronLeft,
  ChevronRight,
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
} from "./components/ui/accordion"

export default function ZomatoPartner() {
  const [searchLocation, setSearchLocation] = useState("Delhi NCR")
  const [currentProductIndex, setCurrentProductIndex] = useState(0)

  const products = [
    {
      title: "Advertise",
      description: "For every marketing dollar spent, Zomato returns over 8x the investment",
      image: "/placeholder.svg?height=200&width=300",
      learnMoreLink: "#"
    },
    {
      title: "Events",
      description: "Partner with us for India's grandest food & entertainment carnival - \"Zomaland\"",
      image: "/placeholder.svg?height=200&width=300",
      learnMoreLink: "#"
    },
    {
      title: "Hyperpure",
      description: "Supplies fresh and high quality ingredients to restaurant for serving delicious meals",
      image: "/placeholder.svg?height=200&width=300",
      learnMoreLink: "#"
    },
    {
      title: "Zomato Pro",
      description: "Exclusive benefits and discounts for frequent diners",
      image: "/placeholder.svg?height=200&width=300",
      learnMoreLink: "#"
    },
    {
      title: "Zomato for Work",
      description: "Streamlined food solutions for businesses",
      image: "/placeholder.svg?height=200&width=300",
      learnMoreLink: "#"
    }
  ]

  const nextProduct = useCallback(() => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % (products.length - 2))
  }, [products.length])

  const prevProduct = useCallback(() => {
    setCurrentProductIndex((prevIndex) => (prevIndex - 1 + (products.length - 2)) % (products.length - 2))
  }, [products.length])

  useEffect(() => {
    const interval = setInterval(() => {
      nextProduct()
    }, 2000)

    return () => clearInterval(interval)
  }, [nextProduct])

  return (
    <div className="font-sans">
      <div className="w-full bg-yellow-400">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-wider mb-6">
              Partner with Zomato at
              <br />
              0% commission for the 1st month!
            </h1>
            <p className="text-lg mb-8">
              And get ads worth INR 1500. Valid for new restaurant partners in
              select cities.
            </p>
            <div className="flex justify-start space-x-4 mb-6">
              <Button className="bg-blue-500 hover:bg-blue-700 text-white text-lg px-6 py-3">
                Register your restaurant
              </Button>
              <Button
                variant="outline"
                className="bg-white text-black hover:bg-gray-100 text-lg px-6 py-3"
              >
                Login to view existing restaurant
              </Button>
            </div>
            <p className="text-lg">Need help? Contact +91 97-38-38-38-38</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f4f4] py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto -mt-24 shadow-lg">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-3xl font-bold mb-2">
                Get started with online ordering
              </CardTitle>
              <p className="text-gray-600">
                Please keep the documents ready for a smooth signup
              </p>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <RightLine value="FSSAI license copy" />
                  <RightLine value="Regular GSTIN" />
                  <RightLine value="Your restaurant menu" />
                </div>
                <div className="space-y-4">
                  <RightLine value="PAN card copy" />
                  <RightLine value="Bank account details" />
                  <RightLine value="Dish images for top 5 items" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-20">
            <div className="space-y-7">
              <div className="text-4xl font-medium text-center">
                Why should you partner with Zomato?
              </div>
              <div className="text-center text-lg text-gray-500 leading-9">
                Zomato enables you to get 60% more revenue, 10x new customers
                and boost your brand visibility by providing insights to improve
                your business.
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <Card className="w-fit rounded-sm">
                <CardContent className="p-0 rounded-none">
                  <div className="flex space-x-5 px-8 py-5">
                    <div className="flex justify-center items-center">
                      <Earth className="text-blue-500 " size={40} />
                    </div>
                    <div className="flex flex-col  justify-center">
                      <div className="text-blue-500 text-2xl">1000+ cities</div>
                      <div className="text-lg text-gray-500">in India</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-fit rounded-sm">
                <CardContent className="p-0 rounded-none">
                  <div className="flex space-x-5 px-8 py-5">
                    <div className="flex justify-center items-center">
                      <Store className="text-blue-500 " size={40} />
                    </div>
                    <div className="flex flex-col  justify-center">
                      <div className="text-blue-500 text-2xl">3 lakh+</div>
                      <div className="text-lg text-gray-500">restaurant listings</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-fit rounded-sm">
                <CardContent className="p-0 rounded-none">
                  <div className="flex space-x-5 px-8 py-5">
                    <div className="flex justify-center items-center">
                      <CalendarDays className="text-blue-500 " size={40} />
                    </div>
                    <div className="flex flex-col  justify-center">
                      <div className="text-blue-500 text-2xl">5.0 crore+</div>
                      <div className="text-lg text-gray-500">monthly orders</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f4f4] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-medium text-center mb-12">How it works?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Step
              icon={<FileText className="w-12 h-12 text-yellow-500" />}
              title="Step 1"
              heading="Create your page on Zomato"
              description="Help users discover your place by creating a listing on Zomato"
              bgColor="bg-yellow-50"
            />
            <Step
              icon={<Bike className="w-12 h-12 text-red-500" />}
              title="Step 2"
              heading="Register for online ordering"
              description="And deliver orders to millions of customers with ease"
              bgColor="bg-red-50"
            />
            <Step
              icon={<Package className="w-12 h-12 text-orange-500" />}
              title="Step 3"
              heading="Start receiving orders online"
              description="Manage orders on our partner app, web dashboard or API partners"
              bgColor="bg-orange-50"
            />
          </div>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-medium text-center mb-4">Already have your restaurant listed?</h2>
            <p className="text-center text-gray-600 mb-8">Search here and claim the ownership of your restaurant</p>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for your restaurant, eg. Greenland Cafe"
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
      <div className="bg-[#f4f4f4] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-medium text-center mb-12">Our products</h2>
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
                style={{ transform: `translateX(-${currentProductIndex * (100 / 3)}%)` }}
              >
                {products.map((product, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-4">
                    <Card>
                      <CardContent className="p-6">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <a href={product.learnMoreLink} className="text-blue-500 hover:underline">
                          Learn more
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-4">
              {products.slice(0, products.length - 2).map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full mx-1 ${
                    index === currentProductIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentProductIndex(index)}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-medium text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What will Zomato charge me for creating a page on its platform?</AccordionTrigger>
                <AccordionContent>
                  Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What all documents are required for registering on online ordering?</AccordionTrigger>
                <AccordionContent>
                  Registration for online ordering requires:
                  <ul className="list-disc pl-6 mt-2">
                    <li>FSSAI certificate (application no. if FSSAI is not present)</li>
                    <li>PAN Card</li>
                    <li>GST certificate (if applicable)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>I have a large fleet of delivery boys, why should I use Zomato's delivery service?</AccordionTrigger>
                <AccordionContent>
                  You can use your and Zomato's delivery fleet simultaneously to increase the network of your delivery radius. Also, our delivery fleet delivers orders in minimum possible time, a key factor leading to increased customer satisfaction.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What happens if the average order value of Zomato orders is very low</AccordionTrigger>
                <AccordionContent>
                  Average order value from our platform is generally more than Rs 250. However, in some cases, users want to try out your place by ordering for lesser amount. But we have observed that they eventually come back with higher value orders if they like your food.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}



function Step({ icon , title, heading, description, bgColor } : {icon :ReactNode , title : string, heading : string, description : string, bgColor : string}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`rounded-full p-6 ${bgColor} mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <h4 className="text-lg font-medium mb-2">{heading}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}