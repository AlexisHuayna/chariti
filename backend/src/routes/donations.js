const express = require('express')
const donation_routes = express.Router();
const Donation = require('../models/Donation');

donation_routes.get('/donations/users/:userId', (req, res) => {
    var user_id = req.params.userId;

    var query = { UserId: user_id };

    Donation.find(query, (err, donations) => {
        if(err){
            res.status(500).end();
        }
        res.status(200).send(donations);
    });
});

donation_routes.get('/donations/projects/:projectId', (req, res) => {
    var project_id = req.params.projectId;

    var query = { ProjectId: project_id };

    Donation.find(query, (err, donations) => {
        if(err){
            res.status(500).end();
        }
        res.status(200).send(donations);
    });
});

donation_routes.post('/donations/:userId/:projectId', (req, res) => {
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
});

donation_routes.put('/donations/:donationId', (req, res) => {
    var donation_id = req.params.donationId;

    var query = { DonationAmount: req.body.amount };

    Donation.findByIdAndUpdate(donation_id, query, (err, donation) => {
        if(err){
            res.status(500).end();
        }
        res.status(200).send(donation);
    })
});

donation_routes.delete('/donations/:donationId', (req, res) => {
    var donation_id = req.params.donationId;

    var query = { DonationStatus: false };

    Donation.findByIdAndUpdate(donation_id, query, (err, donation) => {
        if(err){
            res.status(500).end();
        }
        res.status(200).send(donation);
    })
});

module.exports = donation_routes;