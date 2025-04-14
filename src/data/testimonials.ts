import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Martin KOUMEGNO',
        role: "President d'une cooperative agricole",
        message: `Les analyses predictives et les previsions meteorologiques axées sur l' IA de ${siteDetails.siteName} ont transformé la facon dont nous planifions nos cultures et notre saison en génerale.`,
        avatar: '/images/farmer.webp',
    },
    {
        name: 'Jeanne AWADE',
        role: 'Ingenieur des travaux agricoles',
        message: `Entant qu'ingenieur en agronomie, j'arrive à offrir mes services aux groupements agricole sutout de femme grace à l'application Karinma. Je génere de revenue pour subvenir à mes besoins .`,
        avatar: '/images/testimonial-2.jpg',
    },
    {
        name: 'Thomas YAO',
        role: "Chef d'entreprise agricole",
        message: `${siteDetails.siteName} revolutionne l'agriculture et permet à des milliers d'agriculteurs d'acceder aux equipements et intrants agricole. Notre entreprise à augmenter son chiffre d'affaire grace à des clients qui nous ont decouvert sur la plateforme Karinma.`,
        avatar: '/images/testimonial-3.jpg',
    },
    // {
    //     name: 'Emily Johnson',
    //     role: 'Product Manager',
    //     message: `${siteDetails.siteName} is revolutionizing personal finance management. Its intuitive design and powerful features make it an indispensable tool for anyone serious about financial growth.`,
    //     avatar: '/images/testimonial-3.webp',
    // },
];