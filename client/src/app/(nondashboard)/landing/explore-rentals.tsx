"use client";

import Image from "next/image";
import Link from "next/link";

interface RentalProperty {
  id: string;
  title: string;
  image: string;
  location: string;
  priceRange: string;
  beds: string;
  baths: string;
  sqft: string;
}

const rentalProperties: RentalProperty[] = [
  {
    id: "1",
    title: "Residential Towers",
    image:
      "https://images1.apartments.com/i2/U7OX6PHX4X1iaoy0O9MxpJj5q82pHWRQdX8YAmT_uYE/117/presidential-towers-chicago-il-building-photo.jpg?p=1",
    location: "123 N Michigan St, Chicago, IL",
    priceRange: "$1,500 - $3,200",
    beds: "Studio - 3 Beds",
    baths: "1 - 2 Baths",
    sqft: "550 - 1,200 Sq Ft",
  },
  {
    id: "2",
    title: "Waterfront and Park",
    image:
      "https://images1.apartments.com/i2/XHfeaBxokfYLbge7JzMNZaECBn0KYtoAi9AJ8kvCqyQ/117/shoreham-and-tides-chicago-il-building-photo.jpg?p=1",
    location: "456 S Lakeshore Dr, Chicago, IL",
    priceRange: "$1,700 - $4,500",
    beds: "1 - 3 Beds",
    baths: "1 - 3 Baths",
    sqft: "650 - 1,800 Sq Ft",
  },
  {
    id: "3",
    title: "The Residences at River North",
    image:
      "https://images1.apartments.com/i2/zLjPbL5iOIOnCTi7UP_d4qhyiTguYJ-HytVyBcUloaI/117/the-residences-at-newcity-chicago-il-building-photo.jpg?p=1",
    location: "789 W Huron St, Chicago, IL",
    priceRange: "$1,900 - $3,800",
    beds: "Studio - 2 Beds",
    baths: "1 - 2 Baths",
    sqft: "500 - 1,100 Sq Ft",
  },
  {
    id: "4",
    title: "MiLA",
    image:
      "https://images1.apartments.com/i2/YfgNTjK0tgJ39vOUq5CinAqDjCkmw1gYo3uxIaS2t6I/117/mila-chicago-il-building-photo.jpg?p=1",
    location: "201 N Garland Ct, Chicago, IL",
    priceRange: "$2,100 - $4,200",
    beds: "1 - 3 Beds",
    baths: "1 - 2 Baths",
    sqft: "700 - 1,500 Sq Ft",
  },
];

export default function ExploreRentals() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
          Explore Rentals in Chicago, IL
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rentalProperties.map((property) => (
            <div
              key={property.id}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-4">
                <h3 className="mb-1 font-semibold text-gray-800">
                  {property.title}
                </h3>
                <p className="mb-2 text-sm text-gray-600">
                  {property.location}
                </p>
                <p className="mb-2 font-medium text-gray-800">
                  {property.priceRange}
                </p>

                <div className="mb-4 flex flex-wrap gap-2 text-xs text-gray-600">
                  <span>{property.beds}</span>
                  <span>•</span>
                  <span>{property.baths}</span>
                  <span>•</span>
                  <span>{property.sqft}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/rentals/chicago"
            className="inline-block rounded-md bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
