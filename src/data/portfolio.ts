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
    "Senior React Native developer with 4+ years building mobile products across healthtech, fintech, and consumer apps. I bring product ownership to the work: helping shape scope, leading engineers, making technical trade-offs, and following through from the first build to improvements after launch.",
};

export const mobileProjects = [
  {
    title: "Bvndle",
    category: "Rewards & payments",
    status: "Live",
    summary:
      "Everyday spending turned into rewards, with coins, payments, and a marketplace in one app.",
    focus: ["RTK Query", "Firebase", "Fastlane", "KYC"],
    links: [
      {
        label: "iOS live",
        href: "https://apps.apple.com/ng/app/bvndle-earn-rewards-and-coins/id6475035022",
      },
      {
        label: "Android live",
        href: "https://play.google.com/store/apps/details?id=com.bvndle&pcampaignid=web_share",
      },
    ],
  },
  {
    title: "TipNGo",
    category: "Tipping & wallets",
    status: "Available for testing",
    summary:
      "A simpler way to send and receive tips, fund a wallet, and cash out.",
    focus: ["Wallet UX", "MMKV", "Navigation", "Bottom sheets"],
    links: [],
  },
  {
    title: "NaraTherapy",
    category: "Therapy & wellbeing",
    status: "Live",
    summary:
      "Therapy, mood check-ins, journaling, and daily self-care, all in your pocket.",
    focus: ["Expo", "Firebase", "AI chatbot", "Scheduling"],
    links: [
      {
        label: "iOS live",
        href: "https://apps.apple.com/ng/app/nara-therapy/id6504929821",
      },
      {
        label: "Android live",
        href: "https://play.google.com/store/apps/details?id=com.naratherapy.naramobile&pcampaignid=web_share",
      },
    ],
  },
  {
    title: "MomentsHub",
    category: "Social & community",
    status: "Live",
    summary:
      "A social space to share moments, join polls, and connect with people around you.",
    focus: ["iOS release", "QA", "React Native", "App Store"],
    links: [
      {
        label: "iOS live",
        href: "https://apps.apple.com/ng/app/momentshub/id6504739040",
      },
    ],
  },
  {
    title: "Anchoria",
    category: "Investing & trading",
    status: "Available for testing",
    summary:
      "An investing super-app bringing stocks, trading, and financial tools together.",
    focus: ["Trading flows", "React Native", "Redux", "TestFlight"],
    links: [
      {
        label: "iOS TestFlight",
        href: "https://testflight.apple.com/join/Nd3Jrmjk",
      },
      {
        label: "Android testing",
        href: "https://play.google.com/store/apps/details?id=com.seeds.anchoria",
      },
    ],
  },
  {
    title: "UEFC",
    category: "Football & fans",
    status: "Available for testing",
    summary:
      "Football challenges, media, and live updates that bring fans into the game.",
    focus: ["Football product", "Paystack", "Socket.io", "Firebase"],
    links: [],
  },
] as const;

export const backendSkills = [
  {
    title: "Go & API design",
    description:
      "RESTful services and concurrent workflows using goroutines and channels.",
    tools: ["Go", "REST APIs", "Concurrency"],
  },
  {
    title: "Authentication & data security",
    description:
      "Authentication and authorization with JWT and Firebase Auth, with attention to access control and sensitive user data.",
    tools: ["JWT", "Firebase Auth", "PostgreSQL", "Firestore"],
  },
  {
    title: "Realtime & integrations",
    description:
      "Event-driven features, subscription payments, and calendar scheduling.",
    tools: ["Realtime systems", "Stripe", "Google Calendar"],
  },
] as const;

export const codingWorkflow = [
  {
    title: "Frame the problem",
    body: "Start with the user need, the codebase, and the constraints. Give the agent clear context and define what a good result looks like.",
  },
  {
    title: "Build with Codex",
    body: "Work in focused changes. Use the agent to explore options and implement, then steer the work as the product and technical details become clearer.",
  },
  {
    title: "Review and verify",
    body: "Read the diff, check access control and sensitive-data handling, run tests, and try the experience. Agent-generated code gets the same scrutiny as code I write myself.",
  },
  {
    title: "Ship and follow through",
    body: "Own the release, respond to feedback, and keep refining. The work is done when it solves the problem, not when the agent finishes.",
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
    title: "Product ownership",
    body: "Understanding the user problem, helping shape scope, and connecting technical decisions to what the product needs. I stay accountable for the quality of the release and what happens after it reaches users.",
  },
  {
    title: "React Native architecture",
    body: "Choosing a foundation that fits the product today and leaves room to grow: feature structure, typed navigation, reusable components, and reliable state and data flow.",
  },
  {
    title: "App security & privacy",
    body: "Authentication, access control, and careful handling of sensitive data across the app and its APIs. My work in healthtech and fintech puts user privacy and security at the centre of everyday engineering decisions.",
  },
  {
    title: "Native-feeling product UX",
    body: "Bottom sheets, gestures, loading states, empty states, forms, and transitions tuned so the app feels deliberate on real devices.",
  },
  {
    title: "Technical leadership",
    body: "Leading delivery, reviewing code, mentoring engineers, and working through decisions together. I care about the team's ability to keep improving the product, not just my own contribution.",
  },
  {
    title: "Launch, learn, improve",
    body: "QA, store approvals, and the work after launch. At NaraTherapy, I set up interaction tracking and managed live updates and ongoing improvements, keeping product quality in focus beyond the first release.",
  },
] as const;

export const stackGroups = [
  {
    title: "React Native",
    items: [
      "React Native",
      "Expo",
      "React Navigation",
      "MMKV",
      "Reanimated",
      "Native modules",
      "App Store",
      "Play Store",
    ],
  },
  {
    title: "Mobile delivery",
    items: [
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Firebase",
      "Fastlane",
      "TestFlight",
      "QA",
      "Release builds",
    ],
  },
  {
    title: "Integrations",
    items: [
      "Stripe",
      "Paystack",
      "Google Maps",
      "Cloudinary",
      "Socket.io",
      "Push messaging",
      "Analytics",
      "Payment gateways",
    ],
  },
] as const;
