(function() {
    'use strict';

    angular
        .module('myMarvel')
        .controller('MainController', ['$q', '$timeout', '$scope', 'MarvelDataService', '$mdDialog', '$mdMedia', 'imageVariants', '$state', MainController]);

    function MainController($q, $scope, $timeout, MarvelDataService, $mdDialog, $mdMedia, imageVariants, $state) {
        var vm = this;
        vm.marvelResolve = [];
        vm.marvelComicsResolve = [];
        vm.selected = [];
        vm.onReorder = onReorder;
        vm.deselect = deselect;
        vm.loadStuff = loadStuff;
        vm.onPaginate = onPaginate;
        vm.removeFilter = removeFilter;
        vm.selectComic = selectComic;
        vm.imageLink = imageLink;
        vm.options = {
            rowSelection: true,
            multiSelect: true,
            autoSelect: true,
            decapitate: false,
            largeEditDialog: false,
            boundaryLinks: false,
            limitSelect: true,
            pageSelect: true
        };
        vm.filter = {
            options: {
                debounce: 500
            }
        };
        vm.query = {
            filter: '',
            order: 'title',
            limit: 5,
            page: 1
        };
        vm.limitOptions = [5, 10, 15];
        activate();

        function activate() {
            MarvelDataService.retrieveComicsData().then(function(result) {
                vm.marvelComicsResolve = result.data.data.results;
                MarvelDataService.setComics(vm.marvelComicsResolve);
                MarvelDataService.setComic();
                var comic = MarvelDataService.getComic();
                //$state.go('comic', { id: comic.id, imageLink: vm.imageLink(comic, 19) });
                vm.count = vm.marvelComicsResolve.length || 0;
                vm.limitOptions = [5, 10, 15, {
                    label: 'All',
                    value: function() {
                        return vm.count || 0;
                    }
                }];
            })
        }



        function onReorder(order) {
            vm.promise = $timeout(function() {
                vm.query.order = order;
            }, 500);
        }

        function deselect(item) {
            vm.promise = $timeout(function() {}, 500);
        }

        function loadStuff() {
            vm.marvelComicsResolve = [];
            vm.promise = $timeout(function() {
                vm.marvelComicsResolve = MarvelDataService.getComics();
                vm.query.order = 'title';
            }, 2000);
        }

        function onPaginate(page, limit) {
            vm.promise = $timeout(function() {}, 2000);
        }

        function removeFilter() {
            vm.filter.show = false;
            vm.query.filter = '';
        }

        function onPaginate(page, limit) {
            vm.promise = $timeout(function() {}, 2000);
        }

        function imageLink(comic, fileNameId) {
            var fileName = imageVariants[fileNameId].fileName;
            if (comic && comic.images[0]) {
                return comic.images[0].path + (fileName === '' ? '.' : '/' + fileName + '.') + comic.images[0].extension;
            } else {
                return '';
            }
        }

        function selectComic(comic, ev) {

            MarvelDataService.setComic(comic);
            // $mdDialog.show({
            //     controller: 'SelectComicController as vm',
            //     templateUrl: 'app/src/main/comic/selectedComic.html',
            //     locals: {
            //         comic: comic,
            //         imageLink: imageLink(comic, 4)
            //     },
            //     parent: angular.element(document.body),
            //     targetEvent: ev,
            //     clickOutsideToClose: true
            // })
        }
    }
}());