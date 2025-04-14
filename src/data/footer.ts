import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Donner aux petits exploitants agricoles et aux entreprises agroalimentaires les moyens de bénéficier de solutions technologiques agricoles de pointe.",
    quickLinks: [
        {
            text: "Fonctionnalités",
            url: "#features"
        },
        {
            text: "Tarifs",
            url: "#pricing"
        },
        {
            text: "Temoignages",
            url: "#testimonials"
        }
    ],
    email: 'karinmasupport@gmail.com',
    telephone: '+228 90686845',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}