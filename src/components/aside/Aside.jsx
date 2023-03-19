import React from "react";
import NewArticles from './NewArticles'

let newArticls=[
    {
        titre:"Hydrogen VS Elecric Cars",
        sousTitre:"Will hydrogen-fueled Cars ever catch up to EVs?"
    },
    {
        titre:"The Downsides of AI Artistry",
        sousTitre:"What are the possible adverse effects of on-demand AI image genetation?"
    },
    {
        titre:"Is VC Funding Drying Up?",
        sousTitre:" Private Funding by VC firms is down 50% YOY. We take a look at what that means."
    }
]


function Aside(){
    return(
        <>
            {newArticls.map((newArticle, index)=>(
                <NewArticles 
                    key={index}
                    titre={newArticle.titre}
                    sousTitre={newArticle.sousTitre}
                />
            ))

            }
        </>
    )
}

export default Aside;