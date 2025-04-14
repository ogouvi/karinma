import {  FiBriefcase, FiDollarSign, FiTrendingUp } from "react-icons/fi";

import { IBenefit } from "@/types"
import { CgShoppingCart } from "react-icons/cg";

import { GrServices, GrUserWorker } from "react-icons/gr";
import {   FaRegImages } from "react-icons/fa";
import { BiCloudLightRain } from "react-icons/bi";

import { FaRegMap } from "react-icons/fa6";
import { GiPlantWatering } from "react-icons/gi";

import { MdOutlineSavings } from "react-icons/md";

import { TbTargetArrow } from "react-icons/tb";
import { BsShieldCheck } from "react-icons/bs";
import { PiTractor } from "react-icons/pi";

export const benefits: IBenefit[] = [
    {
        title: "Service de météo",
        description: "Une service meteorologique avancé, détaillé et pertinante a votre service pour vous guider dans toutes vos décisions agricoles.",
        bullets: [
            {
                title: "Prévision météo",
                description: "Accédez à des prévisions météorologiques précises pour planifier vos activités agricoles.",
                icon: <BiCloudLightRain size={26} color="green"/>
            },
            {
                title: "Conseils météo",
                description: "Obtenez des conseils personnalisés pour optimiser vos activités agricoles en fonction des conditions météorologiques.",
                icon: <TbTargetArrow size={26} color="green" />
            },
            {
                title: "Analyse prédictive",
                description: "Analyse les données météorologiques pour anticiper les conditions futures et optimiser vos activités agricoles.",
                icon: <FiTrendingUp size={26} color="green"/>
            }
        ],
        imageSrc: "/images/meteo.png"
    },
    {
        title: "Assistance agricole grâce à l'IA",
        description: "Nous vous assistons dans vos activités agricoles et repondons à vos questions grâce à l'IA.",
        bullets: [
            {
                title: "Conseils agricoles",
                description: "Obtenez des conseils personnalisés pour optimiser vos activités agricoles en fonction des conditions météorologiques.",
                icon: <TbTargetArrow size={26} color="green" />
            },
            {
                title: "Gestion de la ferme",
                description: "Choisissez parmi des stratégies d'investissement adaptées à votre tolérance au risque.",
                icon: <FaRegMap size={26} color="green"/>
            },
            {
                title: "Analyse d'images",
                description: "Telechargez les images de vos cultures et laissez l'IA détecter les maladies, les parasites et les carences.",
                icon: <FaRegImages size={26} color="green"/>
            }
        ],
        imageSrc: "/images/ai.png"
    },
    {
        title: "Centre d'apprentisage",
        description: "Une catalogue de cours video  pour vous aider à mieux comprendre les sciences agricoles.",
        bullets: [
            {
                title: "Cours de base",
                description: "Des cours pour les débutants et les personnes qui souhaitent apprendre les sciences agricoles.",
                icon: <GiPlantWatering size={26} color="green"/>
            },
            {
                title: "Cours avancés",
                description: "Des cours pour les personnes qui souhaitent approfondir leurs connaissances techniques et pratiques dans les sciences agricoles.",
                icon: <PiTractor size={28} color="green"/>
            },
            {
                title: "Cours de gestion",
                description: "Des cours pour les personnes qui souhaitent apprendre à  bien gérer leurs activités agricoles.",
                icon: <GrUserWorker size={26} color="green"/>
            }
        ],
        imageSrc: "/images/videos.png"
    },
    {
        title: "Espace d'offre de services",
        description: "Une plateforme pour les agriculteurs et les entreprises agricoles pour offrir leurs services.",
        bullets: [
            {
                title: "Offre de services",
                description: "Offrez vos services aux agriculteurs et aux entreprises agricoles.",
                icon: <GrServices size={26} color="green"/>
            },
            {
                title: "Place de marché",
                description: "Placez vos services sur la place de marché et trouvez les agriculteurs et les entreprises agricoles qui ont besoin de vos services.",
                icon: <CgShoppingCart size={26} color="green"/>
            },
            {
                title: "Marche d'emploi",
                description: "Decouvrez les opportunités de travail dans le secteur agricole.",
                icon: <FiBriefcase size={26} color="green"/>
            },
            {
                title: "Mercurial agricole",
                description: "Decouvrez le prix des produits agricoles et les tendances du marché.",
                icon: <FiTrendingUp size={26} color="green"/>
            }
        ],
        imageSrc: "/images/offres.png"
    },
    {
        title: "Service de financement",
        description: "Une plateforme pour les agriculteurs et les entreprises agricoles pour effectuer des transactions financières.",
        bullets: [
            {
                title: "Prêt agricole",
                description: "Obtenez des prêts agricoles pour vos activités agricoles.",
                icon: <FiDollarSign size={26} color="green"/>
            },
            {
                title: "Assurance agricole",
                description: "Obtenez des assurances agricoles pour vos activités agricoles.", 
                icon: <BsShieldCheck size={26} color="green"/>
            },
            {
                title: "Epargne agricole",
                description: "Epargnez pour vos activités agricoles.",
                icon: <MdOutlineSavings size={26} color="green"/>
            }
        ],
        imageSrc: "/images/fine.png"
    }
]