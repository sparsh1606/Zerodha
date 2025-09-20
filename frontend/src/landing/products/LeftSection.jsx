import ArrowBtn from "../ArrowBtn";

function LeftSection({image, title, description}) {
    return (
        <>
            <div className="container mb-2 p-5 mt-2">
                <div className="row">
                    <div className="col-6">
                        <img src={image} alt="image" className="ms-5" />
                    </div>
                    <div className="col-6 ms-5 ps-5">
                        <h3 className="mb-3 mt-5">
                            {title}
                        </h3>
                        <p className="text-muted me-4">
                            {description}
                        </p>
                        <ArrowBtn title="Try demo " link="#" className="me-3 "/>
                        <ArrowBtn title="Learn more" link="#" className="me-3"/>
                        <div className="image">
                            <img src="media\googlePlayBadge.svg" alt="play store" className="me-3 mt-3 mb-3" />
                            <img src="media\appstoreBadge.svg" alt="app store" className="me-3 mt-3 mb-3" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LeftSection;