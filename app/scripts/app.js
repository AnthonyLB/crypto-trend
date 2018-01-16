'use strict';

/**
 * @ngdoc overview
 * @name cryptoTrendApp
 * @description
 * # cryptoTrendApp
 *
 * Main module of the application.
 */
angular
  .module('cryptoTrendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
