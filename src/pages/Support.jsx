import React, { useEffect, useState } from 'react'
import HelpSupportNav from '../components/HelpSupportComps/HelpSupportNav'
import HelpSupportMain from '../components/HelpSupportComps/HelpSupportMain'
import { usePost } from '../servies/usePost'
import Spinner from '../components/Spinner'

const Support = () => {
    const { post, loading } = usePost()
    const [faqs, setFaqs] = useState([])

    useEffect(() => {
        const fetchFaqs = async () => {
            const response = await post('/api/get_all_faqs', { store_id: "62778c74080197da749b5f1f", type: 0 })
            setFaqs(response.faqs_list);

        }

        fetchFaqs()
    }, [])


    return (
        <div>
            <HelpSupportNav />

            {loading && <Spinner />}
            {!loading && <HelpSupportMain faqs={faqs} />}
        </div>
    )
}

export default Support