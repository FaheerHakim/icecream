const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const iceCreamOrderSchema = new Schema({
    // Bezoeker info
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: String, 
        required: true 
    },

    // Ijsje configuratie
    coneFlavor: { 
        type: String, 
        required: true 
    },
    iceFlavors: [{ 
        type: String, 
        required: true
    }], 
    
    quantity: { 
        type: Number, 
        required: true,
        default: 1 
    },

    // Status & Notities
    status: { 
        type: String, 
        enum: ['te verwerken', 'verzonden', 'geannuleerd'], 
        default: 'te verwerken' // Nieuwe bestellingen staan automatisch op 'te verwerken'
    },
    notes: { 
        type: String, 
        required: false // Notities zijn optioneel
    }
}, {
    timestamps: true // Voegt automatisch 'createdAt' en 'updatedAt' toe (super handig voor bestellingen!)
});

const Order = mongoose.model('Order', iceCreamOrderSchema);
module.exports = Order;