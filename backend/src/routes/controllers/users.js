const User = require('../../models/User');

module.exports = {
    getUsers: async (req, res) => {
        var query = { UserStatus: true }
    
        User.find(query, (err, users) => {
            if(err){
                res.status(500).end()
            }
    
            res.status(201).send(users);
        });
        
    },
    
    getUserByUserId: async (req, res) => {
        var user_id = req.params.userId
        
        User.findById(user_id, (err, user) => {
            if(err){
                res.status(500).end()
            }
            
            if(!user['UserStatus']){
            
                //Change user status ?
                res.status(500).send(user);
            }
    
            res.status(200).send(user)
        });
    },
    
    createUser: async (req, res) => {
        
        var new_user = new User({
            UserEmail: req.body.UserEmail,
            UserName: req.body.UserName,
            UserDescription: req.body.UserDescription,
            UserNumberContact: req.body.UserNumberContact ? req.body.UserNumberContact : "",
        });
        
        new_user.save((err, user) => {
            if(err){
                res.status(500).end();
            }
    
            res.status(201).send(user);
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
            }
    
            res.status(204).send(user)
        })
    },
    
    deleteUser: async (req, res) => {
        var user_id = req.params.userId
        var query = { UserStatus: false }
    
        User.findByIdAndUpdate(user_id, query, (err, user) => {
            if(err){
                res.status(500).end()  
            } 
            
            res.status(204).send(user)
        });
    
    }
}
