/**
 *
 * @param {*} schema
 */
const validateResources = (schema) => {
    return (req, res, next) => {
        console.log('inside the validator', req.params);
        try {
            schema.parse({
                body: req.body,
                params: req.params,
            });
            console.log('🚀 ~ return ~ isValid:', isValid);
            next();
        } catch (e) {
            console.log('🚀 ~ return ~ e:', e);

            res.status(400).json({ errors: e.errors });
        }
    };
};

module.exports = { validateResources };
