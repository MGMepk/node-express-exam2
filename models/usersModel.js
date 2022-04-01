import users from '../data/user.js';

class User {

    createUser(user) {
        console.log(`---> userModel::createUser ${user.username}`);
        
        users.push(user);
        return users.find(element => element.username == user.username);


    }

    loginUser(user) {
        console.log(`---> userModel::loginUser ${user.username}`);

        return users.find(element => (element.username == user.username))
    }

    removeUser(user) {
        const index = users.findIndex(element => element.username == user.username);
        if (index != -1) users.splice(index, 1);
        return index;
    }

}

export default new User();