import "./CustomScrollWrapper";
import 'simplebar-react/dist/simplebar.min.css'; // Імплементуйте стилі
import SimpleBar from 'simplebar-react';
import { useRef } from 'react';

const CustomScrollWrapper = ({ children }) => {
  const scrollbarRef = useRef(null);

  return (
    <SimpleBar ref={scrollbarRef} className="customScrollWrapper">
      {children}
    </SimpleBar>
  );
};

export default CustomScrollWrapper;