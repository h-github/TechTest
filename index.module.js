;
(function() {
    'use strict'

    angular.module('myMarvel', [
            'ui.router',
            'ngMaterial',
            'md.data.table'
        ])
        .config(['$mdThemingProvider', function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue-grey', {
                    'default': '800', // by default use shade 400 from the pink palette for primary intentions
                    'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
                    'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
                    'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
                })
                .accentPalette('orange')
        }])
        .constant('imageVariants', [
            { 'name': 'portrait_small', 'fileName': 'portrait_small' },
            { 'name': 'portrait_xlarge', 'fileName': 'portrait_xlarge' },
            { 'name': 'portrait_fantastic', 'fileName': 'portrait_fantastic' },
            { 'name': 'portrait_medium', 'fileName': 'portrait_medium' },
            { 'name': 'portrait_uncanny', 'fileName': 'portrait_uncanny' },
            { 'name': 'portrait_incredible', 'fileName': 'portrait_incredible' },
            { 'name': 'standard_small', 'fileName': 'standard_small' },
            { 'name': 'standard_medium', 'fileName': 'standard_medium' },
            { 'name': 'standard_large', 'fileName': 'standard_large' },
            { 'name': 'standard_xlarge', 'fileName': 'standard_xlarge' },
            { 'name': 'standard_fantastic', 'fileName': 'standard_fantastic' },
            { 'name': 'standard_amazing', 'fileName': 'standard_amazing' },
            { 'name': 'landscape_small', 'fileName': 'landscape_small' },
            { 'name': 'landscape_medium', 'fileName': 'landscape_medium' },
            { 'name': 'landscape_large', 'fileName': 'landscape_large' },
            { 'name': 'landscape_xlarge', 'fileName': 'landscape_xlarge' },
            { 'name': 'landscape_amazing', 'fileName': 'landscape_amazing' },
            { 'name': 'landscape_incredible', 'fileName': 'landscape_incredible' },
            { 'name': 'detail', 'fileName': 'detail' },
            { 'name': 'full-size', 'fileName': '' }
        ])
}())