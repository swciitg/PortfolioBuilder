import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
    formData: {
        firstName: {
            type: String,
            required: true,
        },
        lastName:{
            type: String,
            required: true,
        },
        fullName:{
            type: String,
            required: true,
        },
        thumbnailUrl: {
            type: String,
            required: true,
               },
       Description: {
        type: String,
        required: true,  
         },
       Keywords: {
        type: String
       },
       websiteLink: {
        type: String,
        required: true,
       },
       Address: {
        type: String,
        required: true,
       },
       Phone: {
        type: String,
        required: true,        
       },
       Email: {
        type: String,
        required: true,
       },
       Colour: {
        type: String,
        required: true,
       },
       Socials: {
        FacebookUrl: {
            type: String,
            required: true,
        },
        whatsAppUrl:{
            type: String,
            required: true,
        },
        instagramUrl: {
            type: String,
            required: true,
        },
        twitterUrl: {
            type: String,
            required: true,
        },
        linkedInUrl: {
            type: String,
            required: true,
        },
        gitHubUrl:{
            type: String,
            required: true,
        },
        stackOverflowUrl: {
            type: String,
            required: true,
        },

      },
      Experience:{
        type: String,
      },
      Education: {
        type: String,

      },
      Skills: {
        type: String
      },
      Interests : {
        type : String,
      },
      Awards : {
        type: String,
      },
      Projects :  {
        type: String,
      }

    },
    Code: {type: String, required: true},
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }

})

export const PortfolioModel = mongoose.model("Portfolio", PortfolioSchema)