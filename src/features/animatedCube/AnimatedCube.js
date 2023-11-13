import React, { useState } from 'react'
import { motion } from 'framer-motion';
import './animatedCube.css'
const AnimatedCube = () => {
    const [rotates, setRotates] = useState(false)
    const [rotates2, setRotates2] = useState(false)
    const [rotates3, setRotates3] = useState(false)
    const [rotates4, setRotates4] = useState(false)

    const [move1, setMove1] = useState(false)
    const [move2, setMove2] = useState(false)
    const [move3, setMove3] = useState(false)
    const [move4, setMove4] = useState(false)
    const [move5, setMove5] = useState(false)

    return (
        <div className='cubeContainer'>
            <div className='anim'>

                Cool React Animations
            </div>
            <p style={{ color: 'rgb(128, 128, 245)' }}>Click To Rotate</p>

            <div className='start'>
                <motion.div
                    className='cube0'
                    animate={{ rotate: rotates ? 360 : 0 }}
                    onClick={() => setRotates(!rotates)}
                >
                    <span>Rotate (360 degrees)</span>
                </motion.div>
                <motion.div
                    className='cube0'
                    animate={{ rotate: rotates2 ? 180 : 0 }}
                    onClick={() => setRotates2(!rotates2)}
                >
                    <span>Rotate (180 degrees )</span>
                </motion.div>
                <motion.div
                    className='cube0'
                    animate={{ rotate: rotates3 ? 90 : 0 }}
                    onClick={() => setRotates3(!rotates3)}
                >
                    <span>Rotate (90 degrees)</span>
                </motion.div>
                <motion.div
                    className='cube0'
                    animate={{ rotate: rotates4 ? 270 : 0 }}
                    onClick={() => setRotates4(!rotates4)}
                >
                    <span>Rotate (270 degrees)</span>
                </motion.div>
            </div>
            <p style={{ color: 'rgba(143, 23, 129, 0.75)' }}>Click to Check Transitions</p>
            <div className='move'>
                <motion.div
                    className='cube'
                    animate={{ x: move1 ? 300 : 0 }}
                    onClick={() => { setMove1(!move1) }}
                >
                    <span>Left/Right</span>
                </motion.div>
                <motion.div
                    className='cube'
                    animate={{ x: move5 ? 200 : -200 }}
                    transition={{ type: "inertia", velocity: 40 }}
                    onClick={() => { setMove5(!move5) }}
                >
                    <span>Inertia Transition</span>

                </motion.div>
                <motion.div
                    className='cube'
                    animate={{ x: move3 ? -200 : 290 }}
                    transition={{ type: "tween", duration: 0.9 }}
                    onClick={() => { setMove3(!move3) }}
                >
                    <span>Tween Transition</span>
                </motion.div>
                <motion.div
                    className='cube'
                    animate={{ x: move4 ? 200 : -200 }}
                    transition={{ type: "spring", bounce: 1 }}
                    onClick={() => { setMove4(!move4) }}
                >
                    <span>Spring Transition</span>

                </motion.div>
                <motion.div
                    className='cube'
                    animate={{ x: move2 ? 100 : -0 }}
                    transition={{ delay: 1 }}
                    onClick={() => { setMove2(!move2) }}
                >
                    <span>Move with Delay</span>

                </motion.div>
            </div>

            <p style={{ color: 'rgb(34, 199, 34)' }}>Rotate Transitions</p>
            <div className='transitions'>
                <motion.div
                    className='cube1'
                    whileHover={{ scale: 1.4 }}
                >
                    <span>Hover</span>

                </motion.div>
                <motion.div
                    className='cube1'
                    animate={{
                        scale: [1, 1.4, 1.4, 1, 1],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                        , rotate: [0, 0, 270, 270, 0],

                    }}
                    transition={{ duration: 2 }}
                >
                    <span>Circle</span>

                </motion.div>
                <motion.div
                    className='cube1'
                    animate={{ rotate: [0, 200, 200, 0] }}
                    transition={{ repeat: 3, duration: 1 }}          >
                    <span>Rotate 3 times</span>

                </motion.div>
                <motion.div
                    className='cube1'
                    animate={{ rotate: [0, 200, 200, 0] }}
                    transition={{ repeat: Infinity, duration: 5 }}          >
                    <span>Rotate Infinity</span>

                </motion.div>
                <motion.div
                    className='cube1'
                    animate={{
                        rotate: [0, 200, 200, 0],
                        y: [0, 200, 200, 0, -200, -200, 0]

                    }}
                    transition={{ repeat: Infinity, duration: 6 }}          >
                    <span>Rotate Vertically</span>

                </motion.div>
                <motion.div
                    className='cube1'
                    animate={{
                        rotate: [0, 200, 200, 0],
                        x: [0, 200, 200, 0, -200, -200, 0],

                    }}
                    transition={{ repeat: Infinity, duration: 5 }}          >
                    <span>Rotate Horizontaly</span>
                </motion.div>
                <motion.div
                    className='cube1'
                    drag>
                    <span>Drag & Drop</span>

                </motion.div>
            </div>
        </div>
    )
}

export default AnimatedCube