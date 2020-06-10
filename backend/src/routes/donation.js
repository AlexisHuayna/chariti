const express = require('express')
const donation_routes = express.Router();
const donation_controller = require('./controllers/donations');

donation_routes.get('/donations/users/:userId', (req, res) => {
    donation_controller.getDonationsByUserId(req, res)
});

donation_routes.get('/donations/projects/:projectId', (req, res) => {
    donation_controller.getDonationsByProjectId(req, res)
});

donation_routes.post('/donations/:userId/:projectId', (req, res) => {
    donation_controller.createDonation(req, res)
});

donation_routes.put('/donations/:donationId', (req, res) => {
    donation_controller.updateDonation(req, res)
});

donation_routes.delete('/donations/:donationId', (req, res) => {
    donation_controller.deleteDonation(req, res)
});

module.exports = donation_routes;