angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab2': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.sBadoEDomingo', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/sBadoEDomingo.html',
        controller: 'sBadoEDomingoCtrl'
      }
    }
  })

  .state('tabsController.sexta', {
    url: '/page9',
    views: {
      'tab2': {
        templateUrl: 'templates/sexta.html',
        controller: 'sextaCtrl'
      }
    }
  })

  .state('tabsController.quinta', {
    url: '/page7',
    views: {
      'tab2': {
        templateUrl: 'templates/quinta.html',
        controller: 'quintaCtrl'
      }
    }
  })

  .state('tabsController.quarta', {
    url: '/page8',
    views: {
      'tab2': {
        templateUrl: 'templates/quarta.html',
        controller: 'quartaCtrl'
      }
    }
  })

  .state('tabsController.terA', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/terA.html',
        controller: 'terACtrl'
      }
    }
  })

  .state('tabsController.segunda', {
    url: '/page5',
    views: {
      'tab2': {
        templateUrl: 'templates/segunda.html',
        controller: 'segundaCtrl'
      }
    }
  })

  .state('pontos', {
    url: '/page4',
    templateUrl: 'templates/pontos.html',
    controller: 'pontosCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('vivaBemComaSaDe', {
    url: '/page11',
    templateUrl: 'templates/vivaBemComaSaDe.html',
    controller: 'vivaBemComaSaDeCtrl'
  })

  .state('tabsController.restaurantesAmigos', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/restaurantesAmigos.html',
        controller: 'restaurantesAmigosCtrl'
      }
    }
  })

  .state('tabsController.testeDeAlimentaO', {
    url: '/page10',
    views: {
      'tab2': {
        templateUrl: 'templates/testeDeAlimentaO.html',
        controller: 'testeDeAlimentaOCtrl'
      }
    }
  })

  .state('signup', {
    url: '/page13',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/page11')


});