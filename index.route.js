(function() {
    'use strict'

    angular
        .module('myMarvel')
        .config(['$stateProvider', '$urlRouterProvider', routeConfig])
        .run(['$rootScope', '$log', function($rootScope, $log) {
            // $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            //     $log.debug('successfully changed states');
            //     $log.debug('event', event);
            //     $log.debug('toState', toState);
            //     $log.debug('toParams', toParams);
            //     $log.debug('fromState', fromState);
            //     $log.debug('fromParams', fromParams);
            // });
            $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
                $log.error('The requested state was not found: ', unfoundState);
            });

            $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
                $log.error('An error occurred while changing states: ', error);
                $log.debug('event', event);
                $log.debug('toState', toState);
                $log.debug('toParams', toParams);
                $log.debug('fromState', fromState);
                $log.debug('fromParams', fromParams);
            });

        }]);


    function routeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'app/src/main/main.html',
                controller: 'MainController',
                controllerAs: 'vm'
            })
            .state('comic', {
                url: '/comic/{id}/detail/{imageLink}',
                parent: 'index',
                templateUrl: 'app/src/main/comic/selectedComic.html',
                controller: 'SelectComicCtrl',
                controllerAs: 'vm'
            });

    }
})();