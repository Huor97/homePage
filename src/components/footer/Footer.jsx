import React from "react";
import Articls from "./Articls";
import retroPcs from '../../images/image-retro-pcs.jpg'
import topLaptops from '../../images/image-top-laptops.jpg'
import gamingGrowth from '../../images/image-gaming-growth.jpg'

let articles=[
    {
        img:retroPcs,
        nmb:"01",
        titre:"Reviving Retro PCs",
        sousTitre:"What happens when old PCs are given modern upgrades?"
    },

    {
        img:topLaptops,
        nmb:"02",
        titre:"Top 10 Laptops of 2022",
        sousTitre:"Our best picks for various needs ans budgets."
    },

    {
        img:gamingGrowth,
        nmb:"03",
        titre:"The Growth of Gaming",
        sousTitre:"How the pandemic has sparked fresh opportunities."
    }
]

function Footer(){
    return(
        <>
            {articles.map((article, index) =>(
                
                <Articls 
                    key={index}
                    img={article.img}
                    nmb={article.nmb}
                    titre={article.titre}
                    sousTitre={article.sousTitre}
                />
            ))}
        </>
    )
}

export default Footer;