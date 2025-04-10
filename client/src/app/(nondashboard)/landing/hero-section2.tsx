"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setFilters } from "@/state";

export default function HeroSectionn() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleLocationSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const trimmedQuery = searchQuery.trim();
      if (!trimmedQuery) return;

      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          trimmedQuery
        )}.json?access_token=${
          process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
        }&fuzzyMatch=true`
      );
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const [lng, lat] = data.features[0].center;
        dispatch(
          setFilters({
            location: trimmedQuery,
            coordinates: [lat, lng],
          })
        );
        const params = new URLSearchParams({
          location: trimmedQuery,
          lat: lat.toString(),
          lng: lng,
        });
        router.push(`/search?${params.toString()}`);
      }
    } catch (error) {
      console.error("error search location:", error);
    }
  };

  return (
    <div className="relative h-[500px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-section.jpg"
          alt="Chicago Skyline"
          fill
          priority
          className="object-cover brightness-75"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-2 text-4xl font-bold md:text-5xl">
          Discover Your New Home
        </h1>
        <p className="mb-8 text-lg md:text-xl">
          Helping 100 million renters find their perfect fit.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleLocationSearch} className="w-full max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by location, property name, or address"
              className="h-14 w-full rounded-full bg-white px-6 pr-16 text-black shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-green-600 p-3 text-white hover:bg-green-700"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
