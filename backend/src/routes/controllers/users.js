const User = require('../../models/User');

module.exports = {
    getUsers: async (req, res) => {
        var query = { UserStatus: true }
    
        User.find(query, (err, users) => {
            if(err){
                res.status(500).end()
            }else{
                res.status(201).send(users);
            }
        });
        
    },
    
    getUserByUserId: async (req, res) => {
        var user_id = req.params.userId
        
        User.findById(user_id, (err, user) => {
            if(err){
                res.status(500).end()
            }
            
            if(!user['UserStatus']){
                res.status(500).end();
            }else{
                res.status(200).send(user)
            }    
        });
    },
    
    createUser: async (req, res) => {

        var query = {UserEmail: req.body.UserEmail}
        var update_old_user = {UserStatus: true}

        User.findOneAndUpdate(query, update_old_user, (err, user) => {
            if(err){
                res.status(500).res.end()
            }else if(user){
                res.status(200).send(user);
            }else{
                var new_user = new User({
                    UserEmail: req.body.UserEmail,
                    UserName: req.body.UserName ? req.body.UserName : "CharityName",
                    UserDescription: req.body.UserDescription ? req.body.UserDescription : "CharityDescription",
                    UserNumberContact: req.body.UserNumberContact ? req.body.UserNumberContact : "000000000",
                });
                
                new_user.save((err, new_user_document) => {
                    if(err){
                        res.status(500).end();
                    }else{
                        res.status(201).send(new_user_document);
                    }
                });
            }
        });
    },
    
    updateUser: async (req, res) => {
        var user_id = req.params.userId
    
        var update_values = {
            UserName: req.body.UserName ? req.body.UserName : "",
            UserDescription: req.body.UserDescription ? req.body.UserDescription : "",
            UserNumberContact: req.body.UserNumberContact ? req.body.UserNumberContact : "",
        }
    
        User.findByIdAndUpdate(user_id, update_values, (err, user) => {
            if(err){
                res.status(500).end()
            }else{
                res.status(204).send(user)
            }

        })
    },
    
    deleteUser: async (req, res) => {
        var user_id = req.params.userId
        var query = { UserStatus: false }
    
        User.findByIdAndUpdate(user_id, query, (err, user) => {
            if(err){
                res.status(500).end()  
            }else{
                res.status(204).send(user)
            }
        });
    
    }
}
