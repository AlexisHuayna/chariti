const Donation = require('../../models/Donation');

module.exports = {
    getDonationsByUserId: (req, res) => {
        var user_id = req.params.userId;

        var query = { UserId: user_id };

        Donation.find(query, (err, donations) => {
            if(err){
                res.status(500).end();
            }
            res.status(200).send(donations);
        });
    },

    getDonationsByProjectId: (req, res) => {
        var project_id = req.params.projectId;

        var query = { ProjectId: project_id };
    
        Donation.find(query, (err, donations) => {
            if(err){
                res.status(500).end();
            }
            res.status(200).send(donations);
        });
    },
    
    createDonation : (req, res) => {
        var user_id = req.params.userId;
        var project_id = req.params.projectId;
    
        var new_donation = new Donation({
            UserId: user_id,
            ProjectId: project_id,
            DonationAmount: req.body.amount
        });
    
        new_donation.save((err, donation) => {
            if(err){
                res.status(500).end();
            }
            res.status(200).send(donation);
        });
    },

    updateDonation: (req, res) => {
        var donation_id = req.params.donationId;

        var query = { DonationAmount: req.body.amount };

        Donation.findByIdAndUpdate(donation_id, query, (err, donation) => {
            if(err){
                res.status(500).end();
            }
            res.status(200).send(donation);
        });
    },

    deleteDonation: (req, res) => {
        var donation_id = req.params.donationId;

        var query = { DonationStatus: false };

        Donation.findByIdAndUpdate(donation_id, query, (err, donation) => {
            if(err){
                res.status(500).end();
            }
            res.status(200).send(donation);
        });
    }
}