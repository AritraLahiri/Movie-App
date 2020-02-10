const express 	     = require('express'),
	router 			 = express.Router(),
	TorrentSearchApi = require('torrent-search-api');

router.get('/movie/:id', (req, res) => {
		const query = req.query.search;
	
		async function searchMovie() {
			TorrentSearchApi.enableProvider('1337x');
			// Search '1080' in 'Movies' category and limit to 20 results
			const torrents = await TorrentSearchApi.search(query, 'movies', 20);
			return torrents;
			
		}
		const torrents = searchMovie();
		torrents.then((movie) => {
			res.render('result', { movie: movie, error: undefined });
		});
	});

module.exports = router;
