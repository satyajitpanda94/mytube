import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL, options } from '../utils/axios'
import SearchFeed from './SearchFeed'

export default function SearchResults() {
    const { searchterm } = useParams()
    const [searchedItems, setSearchedItems] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/search?q=${searchterm}`, options)
            .then(({ data }) => setSearchedItems(data.items))
    }, [searchterm])

    return (
        <div>
            <SearchFeed items={searchedItems} />
        </div>
    )
}
