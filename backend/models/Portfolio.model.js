import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    designSelection: {
        navbarSectionDesign: {
            type: String,
            enum: ['navbar1', 'navbar2', 'navbar3', 'navbar4'],
            default: 'navbar1'
        },
        aboutSectionDesign: {
            type: String,
            enum: ['about1', 'about2', 'about3', 'about4'],
            default: 'about1'
        },
        experienceSectionDesign: {
            type: String,
            enum: ['experience1', 'experience2', 'experience3', 'experience4'],
            default: 'experience1'
        },
        educationSectionDesign: {
            type: String,
            enum: ['education1', 'education2', 'education3', 'education4'],
            default: 'education1'
        },
    },
    basicInfo: {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        photoUrl: {
            type: String,
            default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-978409_1280.png'
        },
        resumeLink: {
            type: String,
            default: ''
        },
        aboutYou: {
            type: String,
            default: ''
        },
        address: {
            type: String,
            default: ''

        },
        phonenumber: {
            type: String,
            default: '',
            validate: {
                validator: function (v) {
                    return /^(\+)?\d{10,15}$/.test(v);
                },
                message: props => `${props.value} is not a valid phone number!`
            }
        },
        email: {
            type: String,
            default: '',
            validate: {
                validator: function (v) {
                    return /^\S+@\S+\.\S+$/.test(v);
                },
                message: props => `${props.value} is not a valid email address!`
            }
        },

    },
    socialInfo: {
        github: {
            type: String,
            default: ''
        },
        linkedin: {
            type: String,
            default: ''
        },
        twitter: {
            type: String,
            default: ''
        },
        facebook: {
            type: String,
            default: ''
        },
        instagram: {
            type: String,
            default: ''
        },
        stackoverflow: {
            type: String,
            default: ''
        },
        whatsapp: {
            type: String,
            default: ''
        },
    },
    experience: [{
        companyName: {
            type: String,
            required: true
        },
        position: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
        },
        present:{
            type: Boolean,
            default: true
        },
        description: {
            type: String,
            required: true
        }
    }],
    skills: [{
        type: String,
        required: true,
        enum: ['Problem-solving',
            'C/C++',
            'Python',
            'Java',
            'JavaScript',
            'Next.js',
            'HTML',
            'Node.js',
            'CSS',
            'React.js',
            'flutter',
            'django',
            'Data Structures',
            'Object-Oriented Programming (OOP)',
            'Software Development',
            'Linux',
            'MySQL',
            'Artificial Intelligence (AI)',
            'Machine Learning (ML)',
            'Circuit Design',
            'Digital Electronics',
            'Analog Electronics',
            'Control Systems',
            'Microcontrollers',
            'Matlab',
            'AutoCAD',
            'Finite Element Analysis (FEA)',
            '3D Modeling',
            'Product Design',
            'Thermal Analysis',
            'Structural Analysis',
            'Computational Fluid Dynamics (CFD)',
            'Figma']
    }],
    interest: {
        type: String,
        default: ''
    },
    awards: {
        type: [String],
        default: []
    },
    projects: [{
        projectname: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-978409_1280.png'
        },
        techStack: {
            type: String,
            default: ''
        },
        githubLink: {
            type: String,
            default: ''
        },
        timeline: {
            type: String,
            default: ''
        },
        madeUnder: {
            type: String,
            enum: ["prof", "club", "personal"],
            required: true
        }

    }],


},{
    timestamps: true
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
export default Portfolio;
