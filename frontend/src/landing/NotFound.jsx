function NotFound() {
  return (
    <>
      <div className="container mt-5 mb-5 p-5 ">
        <div className="row text-center">
          <div className="col">
            <h1 className="display-4">404 - Page Not Found</h1>
            <p className="lead">The page you are looking for does not exist.</p>
            <a href="/" className="btn btn-primary">Go to Home</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;