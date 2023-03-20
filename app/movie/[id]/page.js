import React from 'react';
import MovieContainer from '@/containers/movie';
import Movies from '@/mocks/movies.json';
import { notFound } from 'next/navigation';

async function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function MoviePage({ params }) {
	await delay(2000);
	const movieDetails = Movies.results.find((movie) => movie.id.toString() === params.id);

	if (!movieDetails) {
		notFound();
	}
	return <MovieContainer movie={movieDetails} />;
}

export default MoviePage;
