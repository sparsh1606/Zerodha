import ArrowBtn from "../ArrowBtn";
function RightSection({ image, title, description }) {
  return (
    <>
      <div className="container mb-2 p-5 mt-2">
        <div className="row">
            <div className="col-6">
                <h3 className="mb-3 mt-5 right-sec-heading">{title}</h3>
                <p className="text-muted mb-3 me-5" >{description}</p>
                <ArrowBtn title="Learn more" link="#" />
            </div>
          <div className="col-6">
            <img src={image} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
}
export default RightSection;
