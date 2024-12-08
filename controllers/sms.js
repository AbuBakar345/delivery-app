const axios = require('axios');


exports.trackTCSPackage = async (req, res) => {
    try {
        const { consignee } = req.query;

        if (!consignee) {
            return res.status(400).json({
                error: 'Consignee number is required'
            });
        }

        const response = await axios.post(
            'https://www.tcsexpress.com/apibridge',
            {
                body: {
                    url: "trackapinew",
                    type: "GET",
                    payload: {},
                    param: `consignee=${consignee}`
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error tracking TCS package:', error);
        res.status(500).json({ 
            error: 'Failed to track package',
            message: error.message 
        });
    }
};
