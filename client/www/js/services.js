angular.module('starter.services', [])

.factory('Ordonnances', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var ordonnances = [{
    id: 0,
    name: 'Biologie',
    lastText: '22/04/15',
    face: ''
  }, {
    id: 1,
    name: 'Médicamenteuse',
    lastText: '22/04/15',
    face: ''
  }, {
    id: 2,
    name: 'Biologie',
    lastText: '25/04/15',
    face: ''
  }, {
    id: 3,
    name: 'Médicamenteuse',
    lastText: '25/04/15',
    face: ''
  },{
    id: 4,
    name: 'Biologie',
    lastText: '28/04/15',
    face: ''
  }, {
    id: 5,
    name: 'Médicamenteuse',
    lastText: '28/04/15',
    face: ''
  }, {
    id: 6,
    name: 'Biologie',
    lastText: '01/05/15',
    face: ''
  } ];

  return {
    all: function() {
      return ordonnances;
    },
    remove: function(ordonnance) {
      ordonnances.splice(ordonnances.indexOf(ordonnance), 1);
    },
    get: function(ordonnanceId) {
      for (var i = 0; i < ordonnances.length; i++) {
        if (ordonnances[i].id === parseInt(ordonnanceId)) {
          return ordonnances[i];
        }
      }
      return null;
    }
  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
