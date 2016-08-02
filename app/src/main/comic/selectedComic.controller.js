;(function () {
  'use strict'

  angular
    .module('myMarvel')
    .controller('SelectComicCtrl', ['MarvelDataService', '$stateParams', SelectComicCtrl])

  function SelectComicCtrl (MarvelDataService, $stateParams) {
    var vm = this;
    vm.comicId = $stateParams.id;
    vm.comic = MarvelDataService.getComic(vm.comicId);
    vm.imageLink = $stateParams.imageLink;
    vm.creators = vm.comic.creators.items;
    vm.url = vm.comic.urls[0].url;
    vm.description = vm.comic.description;
    vm.hide = hide;
    vm.cancel = cancel;
    vm.answer = answer;

    vm.query = {
    order: 'name'
  };

    function hide () {
      $mdDialog.hide();
    }

    function cancel () {
      $mdDialog.cancel();
    }

    function answer (answer) {
      $mdDialog.hide(answer);
    }

    
  }
}())
