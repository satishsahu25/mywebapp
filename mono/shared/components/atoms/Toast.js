import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
const Toast = ({ label, onClick }) => {
  const notify = () => toast.success('Wow so easy!');
  return (
    <div>
      <button>{label}</button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

Toast.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Toast.defaultProps = {
  label: 'CLick Me',
};

export default Toast;
