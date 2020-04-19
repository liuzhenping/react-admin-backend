'use strict';

const articleRequestController = {
    getAllArticle: async (req, res, next) => {
        try {
            const result = {"success": true};
            res.status(200).json({
                message: 'All Articles are fetcssshed..ssss.',
                result: result,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        }
    },
};

export default articleRequestController;
