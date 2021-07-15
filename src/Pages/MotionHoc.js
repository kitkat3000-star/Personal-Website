import { motion } from "framer-motion";

const MotionHoc = (Component) => {

    return function HOC() {
        return(
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}>
                <Component />
            </motion.div>
        )
    }
}

export default MotionHoc;

