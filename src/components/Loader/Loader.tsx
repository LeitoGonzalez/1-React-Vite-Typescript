import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div className="loader">
      <Spinner animation="border" variant="info" role="status" className="loader-spinner" style={{position:"fixed", left:"50%", bottom:"50%"}}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;