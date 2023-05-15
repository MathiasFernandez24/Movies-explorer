import { useEffect } from 'react'
import { useState } from "react"


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjE3NTUzZTliMDAyZjYwZjI0NWM3YWIxMDJkNzg5OCIsInN1YiI6IjY0NWQzN2RlZmUwNzdhNWNhYWUxNjA4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h8PYyq0yY_bmmP-P-8XSDXpXd1p2Z8VZLuoc0g1h2SE'
    }
}

export const useMoviesNowPlaying = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1', options)
            .then(response => response.json())
            .then(response => {
                const results = response.results.map((i) => {
                    return {
                        id: i.id,
                        title: i.title,
                        description: i.overview,
                        poster_path: "https://image.tmdb.org/t/p/w500" + i.poster_path,
                        backdrop_path: "https://image.tmdb.org/t/p/w500" + i.backdrop_path

                    }
                })
                setList(results)
            })
            .catch(err => console.error(err))
    }, [])

    return { list }
}

export const useMoviesPopular = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1', options)
            .then(response => response.json())
            .then(response => {
                const results = response.results.map((i) => {
                    return {
                        id: i.id,
                        title: i.title,
                        description: i.overview,
                        poster_path: "https://image.tmdb.org/t/p/w500" + i.poster_path,
                        backdrop_path: "https://image.tmdb.org/t/p/w500" + i.backdrop_path

                    }
                })
                setList(results)
            })
            .catch(err => console.error(err))
    }, [])

    return { list }
}

export const useMoviesUpcoming = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=1', options)
            .then(response => response.json())
            .then(response => {
                const results = response.results.map((i) => {
                    return {
                        id: i.id,
                        title: i.title,
                        description: i.overview,
                        poster_path: "https://image.tmdb.org/t/p/w500" + i.poster_path,
                        backdrop_path: "https://image.tmdb.org/t/p/w500" + i.backdrop_path
                    }
                })
                setList(results)
            })
            .catch(err => console.error(err))
    }, [])

    return { list }
}

export const useMoviesTopRated = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=1', options)
            .then(response => response.json())
            .then(response => {
                const results = response.results.map((i) => {
                    return {
                        id: i.id,
                        title: i.title,
                        description: i.overview,
                        poster_path: "https://image.tmdb.org/t/p/w500" + i.poster_path,
                        backdrop_path: "https://image.tmdb.org/t/p/w500" + i.backdrop_path
                    }
                })
                setList(results)
            })
            .catch(err => console.error(err))
    }, [])

    return { list }
}

export const useMovieDetail = (movieId) => {
    const [detail, setDetail] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=es-ES`, options)
            .then(response => response.json())
            .then(response => {
                const { genres, spoken_languages, tagline, release_date } = response
                const results = {
                    genres: genres,
                    spokenLanguages: spoken_languages,
                    tagline: tagline,
                    releaseDate: release_date,
                }
                setDetail(results)
            })
            .catch(err => console.error(err));
    }, [])

    return { detail }
}
