import { useState, useEffect } from "react";
import axios from 'axios';

const API_URL = 'https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/all';

const useFetchFruits = () => {
    const [fruits, setFruits] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setFruits(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching fruits:", error);
                setLoading(false);
            });
    }, []);

    return {
        fruits,
        loading
    }
};

export default useFetchFruits;