import Portfolio from "../models/Portfolio.model";


//create a new portfolio
export const createPortfolio = async (req, res) => {
    try {

        const userId = req.user._id;

        //thinking that we are only creating one portfolio for one user 
        const existing = await Portfolio.findOne({ userId });
        if (existing) {
            return res.status(400).json({
                success: false,
                message: "Portfolio already exists",
            });
        }

        //Create a new portfolio
        const newPortfolio = new Portfolio(
            {
                ...req.body,
                userId,
            }
        );
        const savedPortfolio = await newPortfolio.save();
        if (!savedPortfolio) {
            return res.status(400).json({
                success: false,
                message: "Error saving portfolio",
            });
        }
        return res.status(201).json({
            success: true,
            message: "Portfolio created successfully",
            data: savedPortfolio,
        });
    } catch (error) {
        console.error("error while creating portfolio", error);
        return res.status(500).json(
            {
                success: false,
                message: "Error creating portfolio",
    
            }
        );
    }
}; 

//update a portfolio
export  const updatePortfolio = async (req, res) => {
    try {
        
        const  userId  = req.user._id;

        const {userId: ignoredUserId, ...restBody} = req.body;
        const updatedPortfolio = await Portfolio.findOneAndUpdate(
            { userId },
            { $set: restBody },
            { new: true, runValidators: true }
        );
        if (!updatedPortfolio) {
            return res.status(404).json({
                success: false,
                message: "Portfolio not found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Portfolio updated successfully",
            data: updatedPortfolio,
        });
    } catch (error) {
        console.error("error while updating portfolio", error);
        return res.status(500).json({
            success: false,
            message: "Error updating portfolio",
            
        });
    }
};