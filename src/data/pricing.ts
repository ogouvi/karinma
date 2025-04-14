import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Basiques',
        price: 'Gratuit',
        features: [
            'Fonctionalités basiques',
            'Publication illimité',
            'Service de metéorologie',
            'Acces aux cours gratuits',
            'Assistance technique',
        ],
    },
    {
        name: 'Pro',
        price: 6990,
        features: [
            'Fonctionnalités avancés',
            'Analyse d\'images',
            'Informations meteorologique detailles ',
            'Assistance prioritaire',
            'Acces aux cours payants',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Personnalisé',
        features: [
            'Offres personnalisés et adapté à vos besoins et services',
            'Veuillez nous contacter pour  plus infrmations'
        ],
    },
]