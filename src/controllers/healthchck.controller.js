exports.healthCheck = (req, res) => {
    res.status(200).send({ message: 'Success', status: 'Healthy' });
};
