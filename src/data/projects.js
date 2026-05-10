// src/data/projects.js
export const projects = [
  {
    id: "configmap",

    title: "ConfigMap",

    subtitle:
      "Visual relationship mapping for Zendesk triggers and automations.",

    description:
      "ConfigMap helps support teams visualize relationships between triggers, automations, SLA policies, and workflows to simplify administration and reduce operational confusion.",

    video: "public/videos/ConfigMap-v1.4.0.mp4",

    screenshots: [
      "public/images/cm-screenshot-0.png",
      "public/images/cm-screenshot-1.png",
      "public/images/cm-screenshot-2.png",
    ],

    features: [
      "Trigger relationship mapping",
      "Workflow visibility",
      "Audit simplification",
      "Operational clarity",
    ],

    pricing: {
      current: "$49.99/month",
      future:
        "Early adopter pricing available through August 2026 or first 250 installs. $149.99/month thereafter.",
    },
  },

  {
    id: "conversation-analysis",

    title: "Conversation Analysis",

    subtitle:
      "Conversation visibility and support trend analysis.",

    description:
      "Conversation Analysis provides visibility into support interactions, trends, operational bottlenecks, and customer communication patterns.",

    video: "public/videos/Ticket-Conversation-Analysis-v1.1.mp4",

    screenshots: [
      "public/images/tca-screenshot-0.png",
      "public/images/tca-screenshot-1.png",
      "public/images/tca-screenshot-2.png",
    ],

    features: [
      "Trend detection",
      "Operational analytics",
      "Conversation insights",
      "Performance visibility",
    ],

    pricing: {
      current: "$109.99/month",
      future:
        "Early adopter pricing available through August 2026 or first 250 installs. $249.99/month thereafter.",
    },
  },
];
