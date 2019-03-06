const admin = require('firebase-admin');

var serviceAccount = require('./seniordesignbase-8c691-firebase-adminsdk-rt588-d063f430c4.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});
	
var db = admin.firestore();

var docRef = db.collection('spaces').doc('00000');

var setID = docRef.set({
	is_taken: true,
	deck: 'north',
	address: '12345'
});
