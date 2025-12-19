import AppBar from "~/components/AppBar";
import type { Route } from "./+types/home";
import Hero from "~/components/Hero";
import { Sparkle } from "@phosphor-icons/react";
import {
  CameraIcon,
  MicrophoneIcon,
  SparklesIcon,
  BeakerIcon,
  HeartIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import ComingSoonCard from "~/components/FutureServices";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Agriconomy" },
    { name: "description", content: "Welcome to Agriconomy!" },
  ];
}

export default function Home() {
  const features = [
    {
      feature: "Image-based plant disease analysis",
      description:
        "Upload a photo of your plant to detect diseases and health issues using AI-powered image analysis.",
      icon: CameraIcon,
    },
    {
      feature: "Voice and text-based plant queries",
      description:
        "Ask questions by speaking or typing and receive instant, research-backed plant health insights.",
      icon: MicrophoneIcon,
    },
    {
      feature: "AI-powered recommendations",
      description:
        "Get actionable recommendations for treatment, care, and prevention based on AI-driven analysis.",
      icon: SparklesIcon,
    },
  ];

  const futureServices = [
    {
      name: "Soil Analysis",
      description:
        "AI-powered soil insights to assess nutrients, composition, and conditions for optimal crop growth.",
      icon: BeakerIcon,
    },
    {
      name: "Animal Health Analysis",
      description:
        "Early-stage AI tools to support animal health monitoring and disease identification.",
      icon: HeartIcon,
    },
    {
      name: "Biodiversity Insights",
      description:
        "Analyze farm biodiversity to understand ecosystem balance and promote sustainable practices.",
      icon: GlobeAltIcon,
    },
  ];

  return (
    <div className="w-full relative scroll-smooth">
      <AppBar />
      <Hero />

      {/* Hero Section */}
      <section
        id="hero"
        className="w-full min-h-screen flex flex-col justify-center items-center gap-6 px-6 text-center"
      >
        <div className="relative flex flex-col items-center gap-6">
          <h1 className="text-6xl font-semibold sm:text-5xl md:text-6xl">
            Introducing{" "}
            <span className="bg-linear-to-br from-teal-600 via-emerald-500 to-green-500 bg-clip-text text-transparent">
              PlantSense
            </span>
          </h1>
          <div className="w-1/5 h-1 rounded-full bg-linear-to-br from-teal-600 via-emerald-500 to-green-500"></div>
          <Sparkle
            size={62}
            weight="fill"
            className="absolute -top-20 -right-16 text-yellow-400 md:-top-8 md:-right-12"
          />
        </div>
        <p className="mt-6 text-center text-neutral-600 max-w-2xl">
          Use text, images, or voice to analyze, diagnose, and understand your
          crop’s health instantly.
        </p>

        {/* Features Section */}
        <ul
          id="features"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 w-full max-w-6xl"
        >
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
                <feature.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {feature.feature}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Future Services / Coming Soon */}
      <section id="future-services" className="w-full py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold bg-linear-to-br from-teal-600 via-emerald-500 to-green-500 bg-clip-text text-transparent">
              Platform Roadmap
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              More services coming to Agriconomy
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Agriconomy is evolving into a full AI-powered agricultural
              research platform. These services are planned for future releases.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2 lg:gap-x-10">
            {futureServices.map((service) => (
              <ComingSoonCard key={service.name} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Designed For Section */}
      <section id="designed-for" className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight bg-linear-to-br from-teal-600 via-emerald-500 to-green-500 bg-clip-text text-transparent sm:text-4xl">
              Designed For
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Agriconomy supports modern agriculture by serving those who grow,
              study, and advise on crops and farming systems.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3 lg:max-w-none">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Farmers</h3>
              <p className="mt-2 text-sm text-gray-600">
                Small-scale and commercial farmers seeking practical, AI-powered
                insights to improve crop health.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Researchers & Students
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Academic users exploring plant research, diagnostics, and
                data-driven agricultural tools.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Agronomists & Extension Workers
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Professionals supporting farmers with research-backed
                recommendations and advisory services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer
        id="contact"
        className="border-t border-neutral-200 py-12 text-center"
      >
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-2xl font-bold bg-linear-to-br from-teal-600 via-emerald-500 to-green-500 bg-clip-text text-transparent">
            PlantSense is coming soon
          </h3>
          <p className="text-neutral-600 max-w-md">
            Explore AI-powered plant analysis and start making data-driven
            farming decisions.
          </p>
          <p className="text-sm text-neutral-500 max-w-md">
            Agriconomy is currently in early development. PlantSense will be our
            first live service.
          </p>
          <div className="flex gap-1 text-sm">
            <span className="bg-linear-to-br from-teal-600 via-emerald-500 to-green-500 bg-clip-text text-transparent">
              &copy; Agriconomy 2025
            </span>{" "}
            | <a href="#">Terms</a> | <a href="#">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
