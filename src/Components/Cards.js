import React from 'react'
import "../Styles/Cards.css"

function CardsItems({ data }) {
    return (
        <div className='Card'>
            <img src={data.ImageUrl} className="Card__urltoimage" alt="newImage" />
            <div className="Card__div">
                <h3 className="Card__title">{data.Name}</h3>
            </div>

        </div>
    )
}


export function Cards({ Desk, Game, Setup }) {
    return (
        <div className='Main'>
            <div className='title' id='Wallpapers'>
                <h1>Wallpapers</h1>
            </div>
            <CardCreation data={Desk} />
            <div className='title' id='GamingWallpapers'>
                <h1>Gaming Wallpapers</h1>
            </div>
            <CardCreation data={Game} />
            <div className='title' id='Setups'>
                <h1>Setups</h1>
            </div>
            <CardCreation data={Setup} />
        </div>
    )
}


function CardCreation({ data }) {
    return (
        <div className="all__Cards">
            {data.map((item, index) => <CardsItems data={item} key={index} />)}
        </div>
    )

}
