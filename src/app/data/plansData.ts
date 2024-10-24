export const plansData = [
  {
    variant: "Basic",
    description:
      "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    price: {
      month: "19.00",
      year: "190.00",
    },
  },
  {
    variant: "Pro",
    description:
      "More advanced features available. Recommended for photography veterans and professionals.",
    price: {
      month: "39.00",
      year: "390.00",
    },
  },
  {
    variant: "Business",
    description:
      "Additional features available such as more detailed metrics. Recommended for business owners.",
    price: {
      month: "99.00",
      year: "990.00",
    },
  },
]

export const plansFeaturesData = [
  {
    name: "UNLIMITED STORY POSTING",
    basic: true,
    pro: true,
    business: true,
  },
  {
    name: "UNLIMITED PHOTO UPLOAD",
    basic: true,
    pro: true,
    business: true,
  },
  {
    name: "EMBEDDING CUSTOM CONTENT",
    basic: false,
    pro: true,
    business: true,
  },
  {
    name: "CUSTOMIZE METADATA",
    basic: false,
    pro: true,
    business: true,
  },
  {
    name: "ADVANCED METRICS",
    basic: false,
    pro: false,
    business: true,
  },
  {
    name: "PHOTO DOWNLOADS",
    basic: false,
    pro: false,
    business: true,
  },
  {
    name: "SEARCH ENGINE INDEXING",
    basic: false,
    pro: false,
    business: true,
  },
  {
    name: "CUSTOM ANALYTICS",
    basic: false,
    pro: false,
    business: true,
  },
]
