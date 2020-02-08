const express 		 = require('express'),
	router 			 = express.Router(),
	TorrentSearchApi = require('torrent-search-api');

router.get('/movie/show/:id', (req, res) => {
	const query = req.params.id;
	async function searchMovie() {
		TorrentSearchApi.enableProvider('1337x');
		// Search '1080' in 'Movies' category and limit to 20 results
		const torrents = await TorrentSearchApi.search(query, 'movies', 1);
		const magnet = await TorrentSearchApi.getMagnet(torrents[0]);
		torrents.map((i) => (i['download'] = magnet));
		return torrents;
	}
	const torrents = searchMovie();
	torrents.then((movie) => {
		res.render('show', { movie: movie, error: undefined });
	});
});

module.exports = router;
