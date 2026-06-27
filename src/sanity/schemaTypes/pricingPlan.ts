import { defineField, defineType } from "sanity";

export const pricingPlan = defineType({
  name: "pricingPlan",
  title: "Formule tarifaire",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isCustomPrice",
      title: "Prix sur mesure",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "priceLabel",
      title: "Prix affiché",
      description: 'Ex. "2 490" ou "Sur mesure"',
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "pricePrefix",
      title: "Préfixe prix",
      description: 'Ex. "à partir de" (laisser vide si non applicable)',
      type: "string",
    }),
    defineField({
      name: "period",
      title: "Période",
      description: 'Ex. "projet", "mensuel", "projet + 3 mois"',
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "features",
      title: "Fonctionnalités incluses",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "highlighted",
      title: "Mettre en avant",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "ctaLabel",
      title: "Texte du bouton",
      type: "string",
      initialValue: "Choisir cette formule",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Ordre d'affichage",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Ordre d'affichage",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "priceLabel",
      highlighted: "highlighted",
    },
    prepare({ title, subtitle, highlighted }) {
      return {
        title: highlighted ? `⭐ ${title}` : title,
        subtitle,
      };
    },
  },
});
