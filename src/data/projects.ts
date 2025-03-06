export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Jewelry ERP",
    description: "A comprehensive ERP solution for the jewelry industry, managing inventory, orders, and sales through a robust admin panel.",
    technologies: ["React.js", "Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "Conversation Tool",
    description: "A versatile data mapping tool that converts Excel data and integrates with Zoho, Xero, and Odoo.",
    technologies: ["React.js", "Node.js", "Excel Integration", "API Integration"],
  },
  {
    title: "Storytelling with AI",
    description: "An interactive storytelling platform for children utilizing AI to generate personalized stories.",
    technologies: ["Next.js", "AI Integration", "React", "Node.js"],
  },
  {
    title: "TaxFAQ",
    description: "A React.js-based web application providing tax-related information with integrated backend services.",
    technologies: ["React.js", "TypeScript", "Node.js", "REST API"],
  },
  {
    title: "HRA Website",
    description: "A scalable admin panel for managing a glossary store, built with React.js for intuitive design and security.",
    technologies: ["React.js", "Admin Panel", "Security", "Database"],
  },
  {
    title: "TallyToOdoo",
    description: "A TDL-based solution for converting XML data from Tally into Odoo with a user-friendly form interface.",
    technologies: ["Tally", "Odoo", "XML", "Data Conversion"],
  }
];
