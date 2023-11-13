import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import tods from '../tods.PNG';
import anim from '../anim.PNG'
import formValid from '../formValid.PNG'
import pass from '../pass.PNG'


const Front = () => {
    const [expandedIndex, setExpandedIndex] = useState(null)

    const handleCardClick = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index)
    }

    const cardVariants = {
        expanded: {
            width: "400px"
        },
        collapsed: {
            width: '250px'
        }
    }

    const cardImages = [
        anim,
        formValid,
        tods,
        pass
    ]

    const cardDescriptions = [
        'Cool Animations using React framer Motion.',
        'React Form validations using React Formik and Yup.',
        'ToDo App using React and tailwind css.',
        'Strong password validator form using React.'

    ]
    const ProjectName = [
        "Animated Cubes",
        "form Validations",
        "ToDo App",
        "Password Validator"
    ]
    const goTo = [
        "animated-cube",
        "form-valid",
        "todo-app",
        "password-validator",

       
    ]
    return (

        <section 
            className='py-16 pb-[300px] bg-gradient-to-r
      from-purple-600 to-indigo-700'>
            <div className='max-w-7xl mx-auto px-2 
        sm:px-6 lg:px-2 text-center'>

                <h1 className='text-3xl font-extrabold text-white'>React-js Projects</h1>
                <p className='mt-4 text-xl text-gray-300'>Check out my latest works</p>
            </div>
            <div className='mt-12 flex-wrap flex flex-col md:flex-row justify-center items-center gap-5'>
                {[0, 1, 2, 3].map((index) => (
                    <motion.div
                        key={index}
                        className={`card cursor-pointer h-[400px] bg-cover bg-center rounded-[14px] 
                        ${index === expandedIndex ? 'expanded' : ''}`}
                        variants={cardVariants}
                        initial="collapsed"
                        animate={index === expandedIndex ? 'expanded' : 'collapsed'}
                        transition={{ duration: 0.5 }}
                        onClick={() => handleCardClick(index)}
                        style={{ backgroundImage: `url(${cardImages[index]})` }}
                    >
                        <div className='card-content h-full flex flex-col justify-end'>
                            <div className='card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center'>
                                <h2 className='text-xl font-semibold text-white text-center'>{ProjectName[index]}</h2>
                                {index === expandedIndex && (
                                    <>
                                        <p className='mt-2 text-gray-300 text-center'>{cardDescriptions[index]} </p>
                                        <Link to={goTo[index]}><button >View Page</button></Link>

                                    </>

                                )
                                }
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}


export default Front
