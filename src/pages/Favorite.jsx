import React, { useEffect, useState } from 'react'
import FavoriteNav from '../components/FavoriteComps/FavoriteNav'
import EmptyFavorite from '../components/FavoriteComps/EmptyFavorite'
import FavoriteCard from '../components/FavoriteComps/FavoriteCard'
import { usePost } from '../servies/usePost'
import Loader from '../components/Loader'

const Favorite = () => {

    const [favorites, setFavorites] = useState(null)
    const { post, loading, error } = usePost()

    const getFavorites = async () => {
        try {
            const data = await post('/api/user/get_favourites', {
                "user_id": "674194cbba82cd9b9b72d4ea"
            })
            setFavorites(data)
            console.log(favorites);
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getFavorites()
    }, [])
    return (
        <div>
            <FavoriteNav />
            {loading && <Loader />}
            {error && <div>An Error Occurred...</div>}
            {favorites && !favorites.success ? <EmptyFavorite /> : favorites?.success && favorites?.favourites.map(fav => (
                <FavoriteCard fav={fav} />
            ))}
        </div>
    )
}

export default Favorite