import left from "/left.svg";
import right from "/right.svg";
import "./Arrow.scss";
function Arrow() {
  return (
    <>
      <div className="info">
        <div className="arrows">
          <img src={left} alt="" />
          <img src={right} alt="" />
        </div>
        <a className="link" href="#">
          Смотреть все
        </a>
      </div>
    </>
  );
}

export default Arrow;
