import { motion } from 'framer-motion';
import { floatingVariants, bounceVariants } from '../lib/animations';

const Quote = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-12">
      <motion.div 
        className="mt-24 md:mt-28 lg:mt-32 border border-gray-700 rounded-lg p-6 max-w-4xl mx-auto relative"
        variants={floatingVariants(4, 10)}
        initial="initial"
        animate="animate"
      >
        <motion.svg 
          className="absolute -top-6 left-6 h-12 w-12 text-gray-700" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          variants={bounceVariants}
          initial="initial"
          animate="animate"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-10 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </motion.svg>
        <div className="mt-4">
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >With great power comes great electricity bill</motion.p>
          <motion.div 
            className="flex justify-end mt-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="text-primary">- Dr. Who</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Quote;
