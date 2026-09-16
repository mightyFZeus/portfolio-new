export const profile = {
  name: "Bolarin Olabisi",
  initials: "BO",
  handle: "bolarinolabisi",
  role: "Senior React Native Developer",
  location: "Lagos, building for remote teams",
  github: "https://github.com/mightyFZeus",
  linkedin: "https://linkedin.com/in/bolarinolabisi",
  email: "bolarinolabisi36@gmail.com",
  cv: "/bolarin-olabisi-cv.pdf",
  headline: "Senior React Native Developer.",
  intro:
    "Senior React Native developer with 4+ years shipping mobile apps across healthtech, fintech, football, and consumer products. I focus on clean app architecture, native-feeling interactions, reliable state, integrations, QA, and app-store releases.",
};

export const mobileProjects = [
  {
    title: "Bvndle",
    status: "Live",
    summary:
      "A production React Native consumer app with authentication, KYC, notifications, analytics, payments, and release automation.",
    focus: ["RTK Query", "Firebase", "Fastlane", "KYC"],
    links: [
      { label: "iOS live", href: "https://apps.apple.com/ng/app/bvndle-earn-rewards-and-coins/id6475035022" },
      { label: "Android live", href: "https://play.google.com/store/apps/details?id=com.bvndle&pcampaignid=web_share" },
    ],
  },
  {
    title: "TipNGo",
    status: "Available for testing",
    summary:
      "A tipping and wallet app covering send-tip, receive-tip, funding, withdrawal, profile, and settings flows.",
    focus: ["Wallet UX", "MMKV", "Navigation", "Bottom sheets"],
    links: [],
  },
  {
    title: "NaraTherapy",
    status: "Live",
    summary:
      "A therapy and wellbeing app with journaling, mood check-ins, meditation, guided breathing, scheduling, and mobile release work.",
    focus: ["Expo", "Firebase", "Wellbeing flows", "Scheduling"],
    links: [
      { label: "iOS live", href: "https://apps.apple.com/ng/app/nara-therapy/id6504929821" },
      { label: "Android live", href: "https://play.google.com/store/apps/details?id=com.naratherapy.naramobile&pcampaignid=web_share" },
    ],
  },
  {
    title: "MomentsHub",
    status: "Live",
    summary:
      "A live iOS mobile product where the work covered feature delivery, QA, release preparation, and App Store deployment.",
    focus: ["iOS release", "QA", "React Native", "App Store"],
    links: [{ label: "iOS live", href: "https://apps.apple.com/ng/app/momentshub/id6504739040" }],
  },
  {
    title: "Anchoria",
    status: "Available for testing",
    summary:
      "A super-app experience with stock and trading features, reusable mobile components, data helpers, navigation, and state.",
    focus: ["Trading flows", "React Native", "Redux", "TestFlight"],
    links: [
      { label: "iOS TestFlight", href: "https://testflight.apple.com/join/Nd3Jrmjk" },
      { label: "Android testing", href: "https://play.google.com/store/apps/details?id=com.seeds.anchoria" },
    ],
  },
  {
    title: "UEFC",
    status: "Available for testing",
    summary:
      "An Ultimate Football Challenge mobile app with challenge flows, media surfaces, payments, realtime pieces, and push messaging.",
    focus: ["Football product", "Paystack", "Socket.io", "Firebase"],
    links: [],
  },
] as const;

export const systemDesigns = [
  {
    title: "Event Scheduling Service",
    type: "tldraw board",
    summary:
      "A Calendly-style scheduling service covering availability rules, booking slots, calendar sync, reminders, conflict checks, and reservation flow.",
    tags: ["Availability", "Bookings", "Calendar sync", "Reminders"],
    href: "https://www.tldraw.com/p/rI_eWBqbmkz5oYgsdz28-?d=v-3878.-4199.9424.5915.zC6jk9IYPU9wZzcEAJbzj",
  },
  {
    title: "URL Shortener Service",
    type: "tldraw board",
    summary:
      "A URL shortener design covering slug generation, redirect resolution, custom links, click analytics, cache strategy, and durable URL storage.",
    tags: ["Slug generation", "Redirects", "Analytics", "Caching"],
    href: "https://www.tldraw.com/p/rI_eWBqbmkz5oYgsdz28-?d=v-3583.-3321.9365.5878.page",
  },
] as const;

export const strengths = [
  {
    title: "React Native architecture",
    body: "Feature structure, typed navigation, reusable primitives, persisted state, and app flows that stay maintainable as the product grows.",
  },
  {
    title: "Native-feeling product UX",
    body: "Bottom sheets, gestures, loading states, empty states, forms, and transitions tuned so the app feels deliberate on real devices.",
  },
  {
    title: "State and data flow",
    body: "RTK Query, Redux, Firebase, MMKV, sockets, retries, and sync states shaped into screens users can actually trust.",
  },
  {
    title: "Release ownership",
    body: "TestFlight, Play Store testing, App Store submission, Fastlane, QA loops, crash follow-up, and the details between build and launch.",
  },
  {
    title: "Integration polish",
    body: "Payments, maps, auth, push messaging, media uploads, analytics, and realtime features wired with clear failure states.",
  },
] as const;

export const stackGroups = [
  {
    title: "React Native",
    items: ["React Native", "Expo", "React Navigation", "MMKV", "Reanimated", "Native modules", "App Store", "Play Store"],
  },
  {
    title: "Mobile delivery",
    items: ["TypeScript", "Redux Toolkit", "RTK Query", "Firebase", "Fastlane", "TestFlight", "QA", "Release builds"],
  },
  {
    title: "Integrations",
    items: ["Stripe", "Paystack", "Google Maps", "Cloudinary", "Socket.io", "Push messaging", "Analytics", "Payment gateways"],
  },
] as const;
