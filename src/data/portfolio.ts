export const profile = {
  name: "Bolarin Olabisi",
  initials: "BO",
  handle: "bolarinolabisi",
  role: "Product Engineer",
  location: "Lagos, building for remote teams",
  github: "https://github.com/mightyFZeus",
  linkedin: "https://linkedin.com/in/bolarinolabisi",
  email: "bolarinolabisi36@gmail.com",
  cv: "/bolarin-olabisi-cv.pdf",
  headline: "Mobile apps. AI products. Backend systems.",
  intro:
    "Product engineer with 4+ years across healthtech and fintech. The work spans React Native apps, Go APIs, realtime systems, secure integrations, and app releases used by real customers.",
};

export const featuredProject = {
  title: "Doc Explain",
  category: "AI / Backend project",
  href: "https://doc-explain.vercel.app/",
  summary:
    "A RAG platform prototype where users upload documents, the backend processes them in the background, and the product returns streamed, citation-aware answers.",
  points: [
    "Go API with auth, Cloudinary webhooks, Redis queues, and WebSocket status updates.",
    "Document extraction, chunking, embeddings, encrypted chunk storage, and pgvector retrieval.",
    "Document chat workflow with upload, processing feedback, source-aware answers, and account flows.",
  ],
  stack: ["Go", "PostgreSQL", "pgvector", "Redis", "Asynq", "OpenAI", "Cloudinary", "WebSockets"],
} as const;

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
      "A therapy and wellbeing app with journaling, mood check-ins, meditation, guided breathing, scheduling, and an AI mental-health chatbot.",
    focus: ["Expo", "Firebase", "AI chatbot", "Scheduling"],
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
      "A super-app experience with stock and trading features, reusable mobile components, API helpers, navigation, and state.",
    focus: ["Trading flows", "React Native", "Redux", "TestFlight"],
    links: [],
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

export const strengths = [
  {
    title: "Retrieval products",
    body: "Document upload, extraction, chunking, embeddings, source-grounded answers, and UI states that make retrieval feel legible.",
  },
  {
    title: "Realtime and async UX",
    body: "Queues, streaming responses, WebSockets, retry states, and status surfaces that prevent users from sitting in mystery.",
  },
  {
    title: "Mobile product systems",
    body: "React Native flows with typed navigation, persisted state, native-feeling controls, and shared primitives that do not fight the team.",
  },
  {
    title: "Backend edges",
    body: "Go APIs, auth, webhooks, storage, database models, and the small security details that make prototypes feel serious.",
  },
  {
    title: "Live app delivery",
    body: "Store releases, TestFlight/internal testing, QA loops, analytics, payment setup, and the release details that turn builds into products.",
  },
] as const;

export const stackGroups = [
  {
    title: "Mobile",
    items: ["React Native", "Expo", "React Navigation", "MMKV", "Reanimated", "Native modules", "App Store", "Play Store"],
  },
  {
    title: "Backend",
    items: ["Go", "REST APIs", "JWT", "Firebase Auth", "PostgreSQL", "Firestore", "Redis", "WebSockets"],
  },
  {
    title: "AI and integrations",
    items: ["RAG", "OpenAI", "AI chatbots", "Stripe", "Google Calendar", "Google Maps", "Cloudinary", "Payment gateways"],
  },
] as const;
