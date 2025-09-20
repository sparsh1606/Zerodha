function ArrowBtn({title, link}) {
  return (
    <a href={link} className="me-5 arrowbtn" style={{color:"#387ed1", textDecoration:"none"}}>{title}<i className="fa-solid fa-arrow-right"></i></a>
  );
}
export default ArrowBtn;