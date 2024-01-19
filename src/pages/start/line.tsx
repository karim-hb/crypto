import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

const Line = () => {
    const isMd = useMediaQuery("(min-width:960px)");

  return (
    <motion.div
      style={{
        width: '2px',
        height: '100%',
        background: 'black',
        position: 'absolute',
        left:isMd ?"50%" : "0px",
        top:0,

      }}
    ></motion.div>
  );
};

export default Line;