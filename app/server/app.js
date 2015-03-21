/* Create Users if DB has been wiped. */
Meteor.startup(function () {
    if (Meteor.users.find().count() === 0) {
    	var users = [
    		{name: "Bobby", username: "bobby", email: "burchbobby@gmail.com",  roles: ['admin']},
    		{name: "Allison", username: "allison", email: "apchansky@gmail.com", roles: ['admin']}
    	]
    	_.each(users, function(user) {
    		var id;
    		id = Accounts.createUser({
    			email: user.email,
                username: user.username,
    			password: "acbb82915",
    			profile: { name: user.name }
    		});
    		if (user.roles.length > 0) {
    			Roles.addUsersToRoles(id, user.roles);
    		}
    	});
    }
});
