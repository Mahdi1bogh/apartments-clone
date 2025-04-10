"use client";

import { Property } from "@/types/prismaTypes";
import Image from "next/image";
import Link from "next/link";

// const rentalProperties: RentalProperty[] = [
//   {
//     id: "1",
//     title: "Residential Towers",
//     image:
//       "https://images1.apartments.com/i2/U7OX6PHX4X1iaoy0O9MxpJj5q82pHWRQdX8YAmT_uYE/117/presidential-towers-chicago-il-building-photo.jpg?p=1",
//     location: "123 N Michigan St, Chicago, IL",
//     priceRange: "$1,500 - $3,200",
//     beds: "Studio - 3 Beds",
//     baths: "1 - 2 Baths",
//     sqft: "550 - 1,200 Sq Ft",
//   },
//   {
//     id: "2",
//     title: "Waterfront and Park",
//     image:
//       "https://images1.apartments.com/i2/XHfeaBxokfYLbge7JzMNZaECBn0KYtoAi9AJ8kvCqyQ/117/shoreham-and-tides-chicago-il-building-photo.jpg?p=1",
//     location: "456 S Lakeshore Dr, Chicago, IL",
//     priceRange: "$1,700 - $4,500",
//     beds: "1 - 3 Beds",
//     baths: "1 - 3 Baths",
//     sqft: "650 - 1,800 Sq Ft",
//   },
//   {
//     id: "3",
//     title: "The Residences at River North",
//     image:
//       "https://images1.apartments.com/i2/zLjPbL5iOIOnCTi7UP_d4qhyiTguYJ-HytVyBcUloaI/117/the-residences-at-newcity-chicago-il-building-photo.jpg?p=1",
//     location: "789 W Huron St, Chicago, IL",
//     priceRange: "$1,900 - $3,800",
//     beds: "Studio - 2 Beds",
//     baths: "1 - 2 Baths",
//     sqft: "500 - 1,100 Sq Ft",
//   },
//   {
//     id: "4",
//     title: "MiLA",
//     image:
//       "https://images1.apartments.com/i2/YfgNTjK0tgJ39vOUq5CinAqDjCkmw1gYo3uxIaS2t6I/117/mila-chicago-il-building-photo.jpg?p=1",
//     location: "201 N Garland Ct, Chicago, IL",
//     priceRange: "$2,100 - $4,200",
//     beds: "1 - 3 Beds",
//     baths: "1 - 2 Baths",
//     sqft: "700 - 1,500 Sq Ft",
//   },
// ];
const rentalProperties: Property[] = [
  {
    id: 1,
    name: "Sunny Downtown Apartment",
    description:
      "A beautiful apartment in the heart of downtown with plenty of natural light.",
    pricePerMonth: 1500,
    securityDeposit: 1500,
    applicationFee: 50,
    photoUrls: [
      "https://example.com/apartment1_1.jpg",
      "https://example.com/apartment1_2.jpg",
    ],
    amenities: ["AirConditioning", "WasherDryer", "Parking"],
    highlights: ["HighSpeedInternetAccess", "CloseToTransit"],
    isPetsAllowed: true,
    isParkingIncluded: false,
    beds: 2,
    baths: 1,
    squareFeet: 800,
    propertyType: "Apartment",
    postedDate: "2023-05-15T00:00:00.000Z",
    averageRating: 4.5,
    numberOfReviews: 10,
    locationId: 1,
    managerCognitoId: "b3e48822-8091-707c-82ae-96e42a307f1b",
    location: {
      id: 1,
      address: "123 Colorado Blvd",
      city: "Pasadena",
      state: "CA",
      country: "United States",
      postalCode: "91105",
      coordinates: {
        longitude: -118.144516,
        latitude: 34.147785,
      },
    },
  },
  {
    id: 2,
    name: "Cozy Beach House",
    description: "A charming beach house with stunning ocean views.",
    pricePerMonth: 2000,
    securityDeposit: 2000,
    applicationFee: 75,
    photoUrls: [
      "https://example.com/beachhouse1.jpg",
      "https://example.com/beachhouse2.jpg",
    ],
    amenities: ["AirConditioning", "WasherDryer", "Parking", "Pool"],
    highlights: ["GreatView", "CloseToTransit"],
    isPetsAllowed: true,
    isParkingIncluded: true,
    beds: 3,
    baths: 2,
    squareFeet: 1200,
    propertyType: "Villa",
    postedDate: "2023-06-01T00:00:00.000Z",
    averageRating: 4.8,
    numberOfReviews: 5,
    locationId: 2,
    managerCognitoId: "b3e48822-8091-707c-82ae-96e42a307f1b",
    location: {
      id: 2,
      address: "456 Ocean Ave",
      city: "Santa Monica",
      state: "CA",
      country: "United States",
      postalCode: "90401",
      coordinates: {
        longitude: -118.496513,
        latitude: 34.013654,
      },
    },
  },
  {
    id: 3,
    name: "Modern City Loft",
    description: "Sleek and stylish loft in the heart of the city.",
    pricePerMonth: 2200,
    securityDeposit: 2200,
    applicationFee: 60,
    photoUrls: [
      "https://example.com/cityloft1.jpg",
      "https://example.com/cityloft2.jpg",
    ],
    amenities: ["AirConditioning", "WasherDryer", "Gym"],
    highlights: ["HighSpeedInternetAccess", "CloseToTransit"],
    isPetsAllowed: true,
    isParkingIncluded: false,
    beds: 1,
    baths: 1,
    squareFeet: 900,
    propertyType: "Apartment",
    postedDate: "2023-07-01T00:00:00.000Z",
    averageRating: 4.7,
    numberOfReviews: 8,
    locationId: 3,
    managerCognitoId: "b3e48822-8091-707c-82ae-96e42a307f1b",
    location: {
      id: 3,
      address: "789 Hollywood Way",
      city: "Burbank",
      state: "CA",
      country: "United States",
      postalCode: "91505",
      coordinates: {
        longitude: -118.328661,
        latitude: 34.180839,
      },
    },
  },
  {
    id: 4,
    name: "Spacious Family Home",
    description:
      "Large family home with a beautiful backyard and modern amenities.",
    pricePerMonth: 2500,
    securityDeposit: 2500,
    applicationFee: 80,
    photoUrls: [
      "https://example.com/familyhome1.jpg",
      "https://example.com/familyhome2.jpg",
    ],
    amenities: ["AirConditioning", "WasherDryer", "Parking", "Dishwasher"],
    highlights: ["QuietNeighborhood"],
    isPetsAllowed: true,
    isParkingIncluded: false,
    beds: 4,
    baths: 3,
    squareFeet: 2000,
    propertyType: "Villa",
    postedDate: "2023-06-15T00:00:00.000Z",
    averageRating: 4.9,
    numberOfReviews: 12,
    locationId: 4,
    managerCognitoId: "b3e48822-8091-707c-82ae-96e42a307f1b",
    location: {
      id: 4,
      address: "101 Pine Ave",
      city: "Long Beach",
      state: "CA",
      country: "United States",
      postalCode: "90802",
      coordinates: {
        longitude: -118.192604,
        latitude: 33.76672,
      },
    },
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
                  src={"/apart.PNG"}
                  alt={property.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-4">
                <Link
                  target="_blank"
                  href={`https://main.d22ezmyh8d8v8j.amplifyapp.com/search/${property.id}`}
                >
                  <h3 className="mb-1 font-semibold text-gray-800">
                    {property.name}
                  </h3>
                </Link>
                <p className="mb-2 text-sm text-gray-600">
                  {property.location.address}
                </p>
                <p className="mb-2 font-medium text-gray-800">
                  {property.pricePerMonth}
                </p>

                <div className="mb-4 flex flex-wrap gap-2 text-xs text-gray-600">
                  <span>{property.beds}</span>
                  <span>•</span>
                  <span>{property.baths}</span>
                  <span>•</span>
                  <span>{property.squareFeet}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="https://main.d22ezmyh8d8v8j.amplifyapp.com/search?location=Chicago&lat=41.881954&lng=-87.63236"
            className="inline-block rounded-md bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
