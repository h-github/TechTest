(function() {
    'use strict'

    angular.module('myMarvel')
        .factory('MarvelDataService', ['$http', 'imageVariants', MarvelDataService])

    function MarvelDataService($http) {
        var publicKey = '9ee922c89aededd5a200bb47fb4fdefe'
        var privateKey = '67a41217902186e19a7bc3f04cb78855cf1f8971'
        var tsKey = '123'
        var comics = [];
        var comic = {};
        var service = {
            getTs: getTs,
            retrieveData: retrieveData,
            retrieveComicsData: retrieveComicsData,
            getComics: getComics,
            setComics: setComics,
            marvelAuth: marvelAuth,
            setComic: setComic,
            getComic: getComic
        }
        return service

        function getTs() {
            return ts
        }

        function retrieveData() {
            var url = 'http://gateway.marvel.com/v1/public/characters?' + marvelAuth();
            return $http.get(url);
        }

        function retrieveComicsData() {
            var url = 'http://gateway.marvel.com/v1/public/comics?limit=100&' + marvelAuth();
            comics = $http.get(url);
            return comics;
        }

        function getComics() {
            return comics;
        }

        function setComics(comicsList) {
            comics = comicsList;
        }

        function marvelAuth() {
            var ts = tsKey
            var apikey = publicKey
            var hash = md5(ts + privateKey + publicKey)
            var auth = 'ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash
            return auth
        }

        function setComic(selectedComic) {
            if (selectedComic) {
                comic = selectedComic;
            } else {
                if (comics) {
                    comic = comics[0];
                } else {
                    comic = {};
                }
            }
        }

        function getComic(Id) {
            if (!Id) {
                return comic || {};
            } else {
                var test = _.find(comics, { 'id': parseInt(Id) });
                return test;
            }

        }


    }
}());