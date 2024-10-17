import React from 'react'
import FavoriteNav from '../components/FavoriteComps/FavoriteNav'
import EmptyFavorite from '../components/FavoriteComps/EmptyFavorite'
import { favoriteCard } from '../components/FavoriteComps/favoriteCardData'
import FavoriteCard from '../components/FavoriteComps/FavoriteCard'

const Favorite = () => {
    return (
        <div>
            <FavoriteNav />
            {favoriteCard.length === 0 ? <EmptyFavorite /> : favoriteCard.map(card => (
                <FavoriteCard key={card.id} img={card.img} name={card.name} food={card.food} price={card.price} />
            ))}
        </div>
    )
}

export default Favorite