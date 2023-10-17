export function Movies({ movies }) {
    const hasMovies = movies?.length > 0
    return (
        <>
            {hasMovies ?
                (<ul className='main__cards'>
                    {
                        (movies.map(movie =>
                        (
                            <li className='main__card' key={movie.id}>

                                <img className='card__poster' src={movie.poster} alt={movie.title} />
                            </li>
                        )
                        )
                        )
                    }
                </ul>)
                : <p>No hay peliculas</p>
            }
        </>
    )
}
