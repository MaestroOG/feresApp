import React, { useEffect, useState } from 'react'
import FavoriteNav from '../components/FavoriteComps/FavoriteNav'
import EmptyFavorite from '../components/FavoriteComps/EmptyFavorite'
import FavoriteCard from '../components/FavoriteComps/FavoriteCard'
import { usePost } from '../servies/usePost'
import { useSelector } from 'react-redux'
import Spinner from '../components/Spinner'

const Favorite = () => {

    const [favorites, setFavorites] = useState(null)
    const { post, loading, error } = usePost()
    const user = useSelector(state => state.userAuth.user)
    const [loadingStates, setLoadingStates] = useState({});

    const getFavorites = async () => {
        try {
            const data = await post('/api/user/get_favourites', {
                user_id: user?.user_id
            })
            setFavorites(data)
            console.log(favorites);
        } catch (error) {
            console.error(error.message)
        }
    }

    const removeFavorites = async (item) => {
        setLoadingStates((prev) => ({ ...prev, [item._id]: true }));
        try {
            const data = await post('/api/user/toggle_favourite_items', {
                user_id: user?.user_id,
                item_id: item?._id,
                store_id: item?.store_id
            })

            if (data?.success) {
                getFavorites();
            }
        } catch (error) {
            console.error(error.message)
        } finally {
            setLoadingStates((prev) => ({ ...prev, [item._id]: false }));
        }
    }

    useEffect(() => {
        getFavorites()
    }, [])
    return (
        <div>
            <FavoriteNav />
            {loading && <Spinner />}
            {error && <div>An Error Occurred...</div>}
            {!favorites?.success && favorites?.message.startsWith('No') && <EmptyFavorite />}
            {favorites && !favorites.success ? <EmptyFavorite /> : favorites?.success && favorites?.favourites.map(fav => (
                <FavoriteCard loading={loadingStates[fav._id] || false} fav={fav} onClick={() => removeFavorites(fav)} />
            ))}
        </div>
    )
}

export default Favorite