const Order = require('../../../models/IceCream');


const getAll = (req, res) => {

    Order.find({}, (err, docs) => {
        if(!err){
res.json({
        "status": "success",
        "data": {
            "content": docs
        }
    });
        }
    });

    
};

const getOne = (req, res) => {
    res.json({
        "status": "success",
        "data": {

        }
    });
}

const update =(req, res) => {
    res.json({
    
        "status": "success",
        "data": {

        }

        
    });
}
const create = (req, res, next) => {
    
    let order = new Order();
       order.name = req.body.name;
       order.email = req.body.email;
       order.phone = req.body.phone;
       order.coneFlavor = req.body.coneFlavor;
       order.iceFlavors = req.body.iceFlavors;
       order.quantity = req.body.quantity;
       order.status = req.body.status;
       order.notes = req.body.notes;
       order.timestamps = req.body.timestamps;

       order.save((err, docs) => {
        if(err){
            res.json({
                "status": "error",
                "message": "Error creating IceCream"
            });
        }
        if(!err){
            res.json({
                "status": "success",
                "data": {"content": docs

                }
            });
        }
       });

}

const remove = (req, res) => {
    res.json({
                "status": "success",
                "data": {
}
    });
}

module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.update = update;
module.exports.create = create;
module.exports.remove = remove;