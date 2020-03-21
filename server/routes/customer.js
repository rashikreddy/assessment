const express = require('express');
const service = require('../services/customer.js');
const router = express.Router();

router.post('/customer/enter', async (req, res) => {
    try {
        const data = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state
        }
        const result = await service.post_details(data);
        if (result.rowCount == 1) {
            res.json({
                success: 1,
                message: 'data inserted'
            })
        }
    } catch (error) {
        console.log('---exception---', error);
    }

});


router.get('/customer/details', async (req, res) => {
    try {
        const result = await service.get_details();
        if (result) {
            res.send(result.rows);
        }
    } catch (error) {
        console.log('---exception', error);
    }
});

router.put('/customer/update/:firstname', async (req, res) => {
    try {
        let firstname = req.params.firstname;
        if (req.body.address !== undefined) {
            await service.update_details('address', req.body.address, firstname);
        }
        if (req.body.city !== undefined) {
            await service.update_details('city', req.body.city, firstname);
        }
        if (req.body.state !== undefined) {
            await service.update_details('state', req.body.state, firstname);
        }
        res.send('updated');
    } catch (error) {
        console.log('---exception---', error);
    }
});


router.delete('/customer/delete/:firstname', async (req, res) => {
    try {
        const firstname = req.params.firstname;
        const result = await service.delete_details(firstname);
        if (result.rowCount == 1) {
            res.json({
                success: 1,
                message: 'data deleted'
            })
        }
    } catch (error) {
        console.log('---exception---', error);
    }
});

router.get('/customer/:firstname', async (req, res) => {
    try {
        const firstname = req.params.firstname;
        const result = await service.getByFirstName(firstname);
        if (result.rowCount == 1) {
            res.send(result.rows);
        }
    } catch (error) {
        console.log('---exception---', error);
    }
})

module.exports = router;