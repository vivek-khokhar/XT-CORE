const express = require('express');
const dal =  require('./dal');
const profile = require('./profile');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

const profileCtrl = express.Router();
const dalObj = new dal();
profileCtrl.get('/', (req,res) => {
    console.log('get all initated');
    dalObj.getAll().then((data) => {
        res.status(200).json(data);
    })
});

profileCtrl.post('/', jsonParser,(req, res) => {
        console.log(req.body);
        let inData = new profile(req.body.id, req.body.name, req.body.city);
        dalObj.saveProfile(inData).then(d => res.status(200).json(d));
    
});

profileCtrl.get('/:id', (req,res) => {
    console.log(req.params['id']);
    dalObj.getByID(req.params['id']).then((data) => {
        data ? res.status(200).json(data) : res.status(500).json({error : 'Id not found'});
    }).catch(error => {
        res.status(500).json(error);
    });
})

profileCtrl.patch('/', jsonParser,(req, res) => {
    console.log(req.body);
    let inData = new profile(req.body.id, req.body.name, req.body.city);
    dalObj.updateProfile(inData).then(d => res.status(200).json({success: "profile updated"}));

});

profileCtrl.delete('/:id', (req,res) => {
    console.log(req.params['id']);
    dalObj.removeProfile(req.params['id']).then((data) => {
        data ? res.status(200).json({"success": "Profile removed"}) : res.status(500).json({error : 'Id not found'});
    }).catch(error => {
        res.status(500).json(error);
    });
})

module.exports = profileCtrl;