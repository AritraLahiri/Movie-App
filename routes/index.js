const express = require("express"),
  router = express.Router(),
  TorrentSearchApi = require("torrent-search-api");

router.get("/", (req, res) => {
  // Get providers

  async function searchMovie() {
    TorrentSearchApi.enableProvider("Torrent9");
    let results = {};
    // Search '1080' in 'Movies' category and limit to 20 results
    const hindi = await TorrentSearchApi.search("hindi", "movies", 12);
    const english = await TorrentSearchApi.search("english", "movies", 12);
    const bengali = await TorrentSearchApi.search("bengali", "movies", 12);
    results.hindi = hindi;
    results.english = english;
    results.bengali = bengali;
    console.log(hindi);
    return results;
  }
  const torrents = searchMovie();
  torrents.then((movie) => {
    res.render("index", { movie: movie });
  });
});

module.exports = router;
