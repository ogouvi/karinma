import { BsFillStarFill } from "react-icons/bs";

import { IStats } from "@/types";
import { BiDownload } from "react-icons/bi";
;
import { GiFactory } from "react-icons/gi";

export const stats: IStats[] = [
    {
        title: "5k+",
        icon: <BiDownload size={34} color="#0000ff" className="text-blue-500" />,
        description: "Personnes ont téléchargé l'application et plus de 1000 sont utilisateurs actifs par jour."
    },
    {
        title: "4.5",
        icon: <BsFillStarFill size={34} color='rgb(255, 201, 25)' className="text-yellow-500" />,
        description: "La cote d'etoile est regulierement maintenue dans les App Store et sur  les forums d'opinions"
    },
    {
        title: "20+ ",
        icon: <GiFactory size={34} color='green' className="text-green-600" />,
        description: "Entreprise agricoles et instituitions publiques offrent des services à travers Karinma"
    }
];