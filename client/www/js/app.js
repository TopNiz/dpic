// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'lbServices'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.id', {
    url: '/id',
    views: {
      'tab-id': {
        templateUrl: 'templates/tab-id.html',
        controller: 'IdCtrl'
      }
    }
  })

  .state('tab.accueil', {
    url: '/accueil',
    views: {
      'tab-accueil': {
        templateUrl: 'templates/tab-accueil.html',
        controller: 'AccueilCtrl'
      }
    }
  })

  .state('tab.urgence', {
    url: '/urgence',
    views: {
      'tab-urgence': {
        templateUrl: 'templates/tab-urgence.html',
        controller: 'UrgenceCtrl'
      }
    }
  })

  .state('tab.stocks', {
    url: '/stocks',
    views: {
      'tab-stocks': {
        templateUrl: 'templates/tab-stocks.html',
        controller: 'StocksCtrl'
      }
    }
  })

  .state('tab.accPro', {
    url: '/accPro',
    views: {
      'tab-accPro': {
        templateUrl: 'templates/tab-accPro.html',
        controller: 'AccProCtrl'
      }
    }
  })

  .state('tab.createResult', {
    url: '/createResult',
    views: {
      'tab-createResult': {
        templateUrl: 'templates/tab-createResult.html',
        controller: 'CreateResultCtrl'
      }
    }
  })

  .state('tab.patient', {
    url: '/patient',
    views: {
      'tab-patient': {
        templateUrl: 'templates/tab-patient.html',
        controller: 'PatientCtrl'
      }
    }
  })

  .state('tab.ordonnances', {
      url: '/ordonnances',
      views: {
        'tab-ordonnances': {
          templateUrl: 'templates/tab-ordonnances.html',
          controller: 'OrdonnancesCtrl'
        }
      }
    })

    .state('tab.ordonnance1', {
      url: '/ordonnance1',
      views: {
        'tab-ordonnance1': {
          templateUrl: 'templates/ordonnance-detail.html',
          controller: 'Ordonnances1Ctrl'
        }
      }
    })

  .state('tab.menu', {
    url: '/menu',
    views: {
      'tab-menu': {
        templateUrl: 'templates/tab-menu.html',
        controller: 'MenuCtrl'
      }
    }
  })

  .state('tab.rechPatient', {
    url: '/rechPatient',
    views: {
      'tab-rechPatient': {
        templateUrl: 'templates/tab-recherchepatient.html',
        controller: 'RecherchePatientCtrl'
      }
    }
  })

  .state('tab.suivis', {
    url: '/suivis',
    views: {
      'tab-suivis': {
        templateUrl: 'templates/tab-suivis.html',
        controller: 'SuivisCtrl'
      }
    }
  })

  .state('tab.modules', {
  url: '/modules',
  views: {
    'tab-modules': {
      templateUrl: 'templates/tab-modules.html',
      controller: 'ModulesCtrl'
    }
  }
});

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/accueil');

})

.constant('SERVER', {
  url: 'http://10.45.18.227:3000/api'
})

  .constant('DB_CONFIG', {
    name: 'DB',
    tables: {
      users: {
        id: 'integer primary key',
        name: 'text'
      }
    }
  })
  .factory('DB', function($q, DB_CONFIG) {
    var self = this;
    self.db = null;
    self.init = function () {
      if (window.sqlitePlugin)
        self.db = window.sqlitePlugin.openDatabase({name: DB_CONFIG.name});
      else if (window.openDatabase)
        self.db = window.openDatabase(DB_CONFIG.name, '1.0', 'database', -1);

      for (var tableName in DB_CONFIG.tables) {
        var defs = [];
        var columns = DB_CONFIG.tables[tableName];
        for (var columnName in columns) {
          var type = columns[columnName];
          defs.push(columnName + ' ' + type);
        }
        var sql = 'CREATE TABLE IF NOT EXISTS ' + tableName + ' (' + defs.join(', ') + ')';
        self.query(sql);
      }
      self.insertAll('users', [
        {
          "id": 0,
          "name": "Atkinson Jenkins"
        },
        {
          "id": 1,
          "name": "Kent Cook"
        },
        {
          "id": 2,
          "name": "Sandoval Kramer"
        },
        {
          "id": 3,
          "name": "Adrienne Rutledge"
        },
        {
          "id": 4,
          "name": "Ebony Bryant"
        },
        {
          "id": 5,
          "name": "Amalia Bernard"
        },
        {
          "id": 6,
          "name": "Faulkner Lang"
        },
        {
          "id": 7,
          "name": "Foley Pickett"
        },
        {
          "id": 8,
          "name": "Lenore Jarvis"
        },
        {
          "id": 9,
          "name": "Marisa Frazier"
        },
        {
          "id": 10,
          "name": "Kristine Johns"
        },
        {
          "id": 11,
          "name": "Burnett Stokes"
        },
        {
          "id": 12,
          "name": "Lucille Fowler"
        },
        {
          "id": 13,
          "name": "Pollard Clark"
        },
        {
          "id": 14,
          "name": "Vega Hendrix"
        },
        {
          "id": 15,
          "name": "Jones Ortega"
        },
        {
          "id": 16,
          "name": "Irwin Stone"
        },
        {
          "id": 17,
          "name": "Phyllis Rosario"
        },
        {
          "id": 18,
          "name": "Beverly Dalton"
        },
        {
          "id": 19,
          "name": "Cervantes Blair"
        },
        {
          "id": 20,
          "name": "Simmons Diaz"
        },
        {
          "id": 21,
          "name": "Toni Molina"
        },
        {
          "id": 22,
          "name": "Snow Walters"
        },
        {
          "id": 23,
          "name": "Vance Ratliff"
        },
        {
          "id": 24,
          "name": "Patrice Page"
        },
        {
          "id": 25,
          "name": "June Marks"
        },
        {
          "id": 26,
          "name": "Duran Kane"
        },
        {
          "id": 27,
          "name": "Ward Ford"
        },
        {
          "id": 28,
          "name": "Ramirez Beach"
        },
        {
          "id": 29,
          "name": "Willie Compton"
        },
        {
          "id": 30,
          "name": "Kinney Woodard"
        },
        {
          "id": 31,
          "name": "Helen Tyson"
        },
        {
          "id": 32,
          "name": "Rosie Gray"
        },
        {
          "id": 33,
          "name": "Florence Ball"
        },
        {
          "id": 34,
          "name": "Bray Whitney"
        },
        {
          "id": 35,
          "name": "Hale Jimenez"
        },
        {
          "id": 36,
          "name": "Haynes Quinn"
        },
        {
          "id": 37,
          "name": "Weiss Miles"
        },
        {
          "id": 38,
          "name": "Shelton Padilla"
        },
        {
          "id": 39,
          "name": "Juliette George"
        },
        {
          "id": 40,
          "name": "Hendricks Merritt"
        },
        {
          "id": 41,
          "name": "Hallie Clayton"
        },
        {
          "id": 42,
          "name": "Yvette Pate"
        },
        {
          "id": 43,
          "name": "Mckinney Valentine"
        },
        {
          "id": 44,
          "name": "Angeline Solomon"
        },
        {
          "id": 45,
          "name": "Kristie Harper"
        },
        {
          "id": 46,
          "name": "Carmella Hunt"
        },
        {
          "id": 47,
          "name": "Andrea Crosby"
        },
        {
          "id": 48,
          "name": "Adkins Prince"
        },
        {
          "id": 49,
          "name": "Ruiz Lane"
        },
        {
          "id": 50,
          "name": "Watson Salas"
        },
        {
          "id": 51,
          "name": "Janine Garrett"
        },
        {
          "id": 52,
          "name": "Skinner Cantu"
        },
        {
          "id": 53,
          "name": "Hopper Rodriquez"
        },
        {
          "id": 54,
          "name": "Gamble Obrien"
        },
        {
          "id": 55,
          "name": "Aurora Wise"
        },
        {
          "id": 56,
          "name": "Peters Baird"
        },
        {
          "id": 57,
          "name": "Gretchen Dawson"
        },
        {
          "id": 58,
          "name": "Katrina Holt"
        },
        {
          "id": 59,
          "name": "Smith Kim"
        },
        {
          "id": 60,
          "name": "Tate Adkins"
        },
        {
          "id": 61,
          "name": "Grimes Walls"
        },
        {
          "id": 62,
          "name": "Leon Terrell"
        },
        {
          "id": 63,
          "name": "Carmen Leon"
        },
        {
          "id": 64,
          "name": "Colette Hoover"
        },
        {
          "id": 65,
          "name": "Ina Levy"
        },
        {
          "id": 66,
          "name": "Grace Trujillo"
        },
        {
          "id": 67,
          "name": "Cochran Hale"
        },
        {
          "id": 68,
          "name": "Avery Hansen"
        },
        {
          "id": 69,
          "name": "Bush Ortiz"
        },
        {
          "id": 70,
          "name": "Jacobson Ellison"
        },
        {
          "id": 71,
          "name": "Mcfadden Short"
        },
        {
          "id": 72,
          "name": "Glenna Pratt"
        },
        {
          "id": 73,
          "name": "Lindsay Cross"
        },
        {
          "id": 74,
          "name": "Bryant Holcomb"
        },
        {
          "id": 75,
          "name": "Chambers Mclean"
        },
        {
          "id": 76,
          "name": "Opal Burke"
        },
        {
          "id": 77,
          "name": "Jordan Simmons"
        },
        {
          "id": 78,
          "name": "Janie Montgomery"
        },
        {
          "id": 79,
          "name": "Dolores Dickerson"
        },
        {
          "id": 80,
          "name": "Marsha Mason"
        },
        {
          "id": 81,
          "name": "Allison Flynn"
        },
        {
          "id": 82,
          "name": "Haley Campos"
        },
        {
          "id": 83,
          "name": "Hall Hess"
        },
        {
          "id": 84,
          "name": "Lela Cooley"
        },
        {
          "id": 85,
          "name": "Christine Joyner"
        },
        {
          "id": 86,
          "name": "Jenny Carpenter"
        },
        {
          "id": 87,
          "name": "Diana Lawson"
        },
        {
          "id": 88,
          "name": "Young Cherry"
        },
        {
          "id": 89,
          "name": "Duffy Bowers"
        },
        {
          "id": 90,
          "name": "Holder Boyer"
        },
        {
          "id": 91,
          "name": "Villarreal Carson"
        },
        {
          "id": 92,
          "name": "Woods Barker"
        },
        {
          "id": 93,
          "name": "Hodge Wyatt"
        },
        {
          "id": 94,
          "name": "Helga Dorsey"
        },
        {
          "id": 95,
          "name": "Verna Brock"
        }
      ]);
    };

    self.insertAll = function(tableName, data) {
      var columns = [],
        bindings = [];

      for (var columnName in DB_CONFIG.tables[tableName]) {
        columns.push(columnName);
        bindings.push('?');
      }

      var sql = 'INSERT INTO ' + tableName + ' (' + columns.join(', ') + ') VALUES (' + bindings.join(', ') + ')';

      for (var i = 0; i < data.length; i++) {
        var values = [];
        for (var j = 0; j < columns.length; j++) {
          values.push(data[i][columns[j]]);
        }
        self.query(sql, values);
      }
    };

    self.query = function (sql, bindings) {
      bindings = typeof bindings !== 'undefined' ? bindings : [];
      var deferred = $q.defer();

      self.db.transaction(function (transaction) {
        transaction.executeSql(sql, bindings, function (transaction, result) {
          deferred.resolve(result);
        }, function (transaction, error) {
          deferred.reject(error);
        });
      });

      return deferred.promise;
    };

    self.fetchAll = function (result) {
      var output = [];

      for (var i = 0; i < result.rows.length; i++) {
        output.push(result.rows.item(i));
      }

      return output;
    };

    return self;
  })
  .factory('User', function($http, DB) {
    var self = this;

    self.getFirst = function(number) {
      return DB.query("SELECT * FROM users LIMIT ?", [number])
        .then(function(result){
          return DB.fetchAll(result);
        });
    }

    self.getAllByName = function(name) {
      return DB.query("SELECT * FROM users WHERE name LIKE '%"+name.toLowerCase()+"%' ORDER BY name")
        .then(function(result){
          return DB.fetchAll(result);
        });
    };
    return self;
  })
  .directive('ionSearch', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        getData: '&source',
        model: '=?',
        search: '=?filter'
      },
      link: function(scope, element, attrs) {
        attrs.minLength = attrs.minLength || 0;
        scope.placeholder = attrs.placeholder || '';
        scope.search = {value: ''};

        if (attrs.class)
          element.addClass(attrs.class);

        if (attrs.source) {
          scope.$watch('search.value', function (newValue, oldValue) {
            if (newValue.length > attrs.minLength) {
              scope.getData({str: newValue}).then(function (results) {
                scope.model = results;
              });
            } else {
              scope.model = [];
            }
          });
        }

        scope.clearSearch = function() {
          scope.search.value = '';
        };
      },
      template: '<div class="item-input-wrapper">' +
      '<i class="icon ion-android-search"></i>' +
      '<input type="search" placeholder="{{placeholder}}" ng-model="search.value">' +
      '<i ng-if="search.value.length > 0" ng-click="clearSearch()" class="icon ion-close"></i>' +
      '</div>'
    };
  });
