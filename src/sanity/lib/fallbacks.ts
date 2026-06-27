import type {
  BlogPostPreview,
  FaqItem,
  PricingPlan,
  Service,
  Testimonial,
} from "@/sanity/types";

export const fallbackServices: Service[] = [
  {
    _id: "fallback-service-1",
    title: "Sites web à conversion",
    description:
      "Des sites rapides, élégants et pensés pour transformer vos visiteurs en clients. Design premium, copywriting orienté résultats, SEO intégré.",
    icon: "website",
    features: ["Landing pages", "Sites vitrine", "E-commerce"],
  },
  {
    _id: "fallback-service-2",
    title: "Automatisations & agents IA",
    description:
      "Libérez votre équipe des tâches répétitives. Agents IA sur mesure, workflows intelligents et intégrations qui tournent 24h/24.",
    icon: "automation",
    features: [
      "Chatbots intelligents",
      "CRM automatisé",
      "Qualification de leads",
    ],
  },
  {
    _id: "fallback-service-3",
    title: "Publicité digitale",
    description:
      "Des campagnes rentables sur Google Ads, Meta Ads et TikTok Ads. Ciblage précis, créas percutantes et optimisation continue.",
    icon: "ads",
    features: ["Google Ads", "Meta Ads", "TikTok Ads"],
  },
];

export const fallbackPricingPlans: PricingPlan[] = [
  {
    _id: "fallback-plan-1",
    name: "Essentiel",
    description: "Pour lancer votre présence digitale avec impact.",
    priceLabel: "2 490",
    pricePrefix: "à partir de",
    period: "projet",
    isCustomPrice: false,
    features: [
      "Site web sur mesure (5 pages)",
      "Copywriting orienté conversion",
      "Optimisation SEO de base",
      "Formulaire de contact intelligent",
      "Livraison en 3 semaines",
    ],
    highlighted: false,
    ctaLabel: "Choisir Essentiel",
  },
  {
    _id: "fallback-plan-2",
    name: "Croissance",
    description: "Site + publicité + automatisations pour scaler.",
    priceLabel: "4 990",
    pricePrefix: "à partir de",
    period: "projet + 3 mois",
    isCustomPrice: false,
    features: [
      "Tout le plan Essentiel",
      "Campagnes Google & Meta Ads",
      "Agent IA de qualification de leads",
      "Tableau de bord temps réel",
      "Optimisation mensuelle incluse",
      "Interlocuteur dédié",
    ],
    highlighted: true,
    ctaLabel: "Choisir Croissance",
  },
  {
    _id: "fallback-plan-3",
    name: "Performance",
    description: "Solution complète pour les PME ambitieuses.",
    priceLabel: "Sur mesure",
    period: "mensuel",
    isCustomPrice: true,
    features: [
      "Tout le plan Croissance",
      "TikTok Ads & retargeting avancé",
      "Automatisations CRM complètes",
      "Tests A/B continus",
      "Reporting hebdomadaire",
      "Support prioritaire 7j/7",
    ],
    highlighted: false,
    ctaLabel: "Nous contacter",
  },
];

export const fallbackFaqItems: FaqItem[] = [
  {
    _id: "fallback-faq-1",
    question: "Combien de temps faut-il pour voir des résultats ?",
    answer:
      "Un site web est livré en 2 à 4 semaines selon la complexité. Les campagnes publicitaires génèrent leurs premiers leads dès la première semaine de diffusion. L'optimisation continue améliore les performances mois après mois.",
  },
  {
    _id: "fallback-faq-2",
    question: "Travaillez-vous uniquement avec des PME françaises ?",
    answer:
      "Oui, c'est notre spécialité. Nous comprenons le marché français, la fiscalité, les habitudes d'achat locales et les spécificités réglementaires (RGPD, cookies, etc.).",
  },
  {
    _id: "fallback-faq-3",
    question: "Proposez-vous un accompagnement après la livraison ?",
    answer:
      "Absolument. Tous nos plans incluent une période de suivi. Le plan Croissance et Performance comprennent une optimisation continue : ajustements publicitaires, mises à jour du site et amélioration des automatisations IA.",
  },
  {
    _id: "fallback-faq-4",
    question: "Quel budget publicitaire minimum recommandez-vous ?",
    answer:
      "Pour des résultats significatifs, nous recommandons un budget publicitaire minimum de 1 000 €/mois en plus de nos honoraires de gestion. Ce montant varie selon votre secteur et vos objectifs — nous vous conseillons lors de l'audit initial.",
  },
  {
    _id: "fallback-faq-5",
    question: "Comment fonctionnent les automatisations IA ?",
    answer:
      "Nous déployons des agents IA connectés à vos outils existants (CRM, email, calendrier). Ils qualifient vos leads, envoient des relances personnalisées et planifient des rendez-vous — automatiquement, 24h/24.",
  },
  {
    _id: "fallback-faq-6",
    question: "Puis-je commencer par un seul service ?",
    answer:
      "Oui. Vous pouvez démarrer avec un site web seul, puis ajouter la publicité ou l'IA plus tard. Nos formules sont modulaires et évoluent avec votre croissance.",
  },
];

export const fallbackTestimonials: Testimonial[] = [
  {
    _id: "fallback-testimonial-1",
    name: "Sophie Martin",
    role: "Directrice",
    company: "Artisan Pro Rénovation",
    quote:
      "En 3 mois, nos demandes de devis ont triplé. Le site est magnifique et les campagnes Google Ads sont enfin rentables.",
    rating: 5,
  },
  {
    _id: "fallback-testimonial-2",
    name: "Thomas Leroy",
    role: "Fondateur",
    company: "NutriCoach",
    quote:
      "L'agent IA qualifie nos leads pendant que nous dormons. Exova a transformé notre acquisition client.",
    rating: 5,
  },
  {
    _id: "fallback-testimonial-3",
    name: "Camille Dupont",
    role: "CEO",
    company: "Belle Époque Events",
    quote:
      "Une agence qui comprend vraiment les PME. Réactifs, transparents, et les résultats parlent d'eux-mêmes.",
    rating: 5,
  },
];

export const fallbackBlogPosts: BlogPostPreview[] = [];
