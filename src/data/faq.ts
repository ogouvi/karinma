import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Est-ce que ${siteDetails.siteName} est securisé?`,
        answer: 'Absolument. Nous utilisons les nouvelles technologies de pointe pour securiser vos informations et nous respectons toutes les conditions de protection de données des utilisateurs',
    },
    {
        question: `Puis-je utiliser ${siteDetails.siteName} n'importe appareils dont je dispose?`,
        answer: 'Absolument! Votre compte Karinma se synchronise de manière transparente sur tous vos appareils  - smartphone android,  iphone, et tablet.',
    },
    {
        question: 'Est-ce que les offres publier sur Karinma sont fiables?',
        answer: `Oui! L'equipe de ${siteDetails.siteName} se charge de verifier la fiabilité de l'offre avant de la publier. De plus, la plupart des offres sont fournis par les partenaires de Karinma .`
    },
    {
        question: "Ai-je besoins d'etre douer en informatique pour bien utiliser l'application Karinma?",
        answer: "Pas du tout. L'interface de Karinma est  très facile à comprendre et intuitive à tous les utilisateurs quelque soit le niveau d'experience.",
    },
    {
        question: "Et si j'ai besoin d'aide pour utiliser l'application",
        answer: "Notre équipe d'assistance dédiée est disponible 24h/24 et 7j/7 via whatsapp ou par email. Nous proposons un guide complet pour vous aider à utiliser l'application. "
    }
];