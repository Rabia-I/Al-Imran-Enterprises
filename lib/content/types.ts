export type FAQ = {
  question: string;
  answer: string;
};

export type Brand = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  products: string[];
  industries: string[];
  services: string[];
  faqs: FAQ[];
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  applications: string[];
  industries: string[];
  brands: string[];
  faqs?: FAQ[];
};

export type Industry = {
  slug: string;
  name: string;
  problems: string[];
  requiredParts: string[];
  brandsUsed: string[];
  servicesNeeded: string[];
};

export type Service = {
  slug: string;
  name: string;
  description: string;
  useCases: string[];
  industries: string[];
  ctaText: string;
};

export type Part = {
  partNumber: string;
  slug: string;
  brand: string;
  model: string;
  specs: string[];
  applications: string[];
  industries: string[];
  datasheet?: string;
  compatibility: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  body: string[];
};
