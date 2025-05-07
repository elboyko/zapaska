import gift from "/gift.svg";
import link1 from "/link1.svg";
import link2 from "/link2.svg";
import sale from "/sale.svg";
import hit from "/hit.svg";
import winter from "/winter.svg";
import dirt from "/dirt.svg";
import ship from "/ship.svg";
import heart from "/heart.svg";
import minus from "/minus.svg";
import plus from "/plus.svg";
import stars from "/stars.svg";

import "../../components/Item/Item.scss";
function Item({ img, title, pricesale, pricenormal }) {
  return (
    <>
      <div className="itemWrapper">
        <div className="itemTop">
          <div className="charackter">
            <img src={link1} alt="icon best" />
            <img src={link2} alt="icon  procter" />
            <img src={sale} alt="icon sale" />
            <img src={gift} alt="icon gift" />
            <img src={hit} alt="icon hit" />
          </div>
          <img className="mainPhoto" src={img} />
        </div>
        <div className="itemBottom">
          <h2>{title}</h2>
          <div className="rating">
            <img src={stars} alt="stars" />
            <span>10 отзывов</span>
          </div>
          <div className="season">
            <div className="seasonFlex">
              <img src={winter} alt="winter" />
              <h5> Зимняя</h5>
            </div>
            <div className="seasonFlex">
              <img src={ship} alt="ship" />
              <h5> Шипованная</h5>
            </div>
            <div className="seasonFlex">
              <img src={dirt} alt="dirt" />
              <h5>Грязевая</h5>
            </div>
          </div>
          <div className="price">
            <span className="priceOnSale">{pricesale}</span>
            <span className="priceStandart">{pricenormal}</span>
          </div>
          <div className="cart">
            <div className="count">
              <span>
                <img src={minus} alt="minus" />
              </span>
              <span>4</span>
              <span>
                <img src={plus} alt="plus" />
              </span>
            </div>
            <button className="btn">В корзину</button>
            <img className="heart" src={heart} alt="heart" />
          </div>
          <button className="btnBuy">Купить в 1 клик</button>
        </div>
      </div>
    </>
  );
}

export default Item;
