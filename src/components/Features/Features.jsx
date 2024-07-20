import { icons as sprite } from "../../shared/icons/index";
import css from "./Features.module.css"; // Імпортуємо CSS модулі

const Features = ({ db }) => {

    const {
    adults,
    airConditioner,
    kitchen,
    beds,
    TV,
    CD,
    radio,
    hob,
    shower,
    toilet,
    freezer,
    microwave,
    gas,
    water,
    transmission
  } = db || {};

  const featuresData = [
    {
      title: `${adults || "N/A"} adults`,
      svg: "icon-Users",
      className: css.strokeStyle,
      condition: adults > 0,
    },
    {
      title: "Transmission",
      svg: "icon-authomatic",
      className: css.fillStyle,
      condition: !!transmission,
    },
    {
      title: "AC",
      svg: "icon-AC",
      className: css.strokeStyle,
      condition: airConditioner > 0,
    },
    {
      title: "Kitchen",
      svg: "icon-kitchen",
      className: css.fillStyle,
      condition: kitchen > 0,
    },
    {
      title: `${beds || "N/A"} beds`,
      svg: "icon-beds",
      className: css.fillStyle,
      condition: beds > 0,
    },
    {
      title: "air Conditioner",
      svg: "icon-air",
      className: css.fillStyle,
      condition: airConditioner > 0,
    },
    {
      title: "CD",
      svg: "icon-CD",
      className: css.fillStyle,
      condition: CD > 0,
    },
    {
      title: "Radio",
      svg: "icon-radio",
      className: css.fillStyle,
      condition: radio > 0,
    },
    {
      title: `${hob || "N/A"} hob`,
      svg: "icon-hob",
      className: css.fillStyle,
      condition: hob > 0,
    },
    {
      title: "Shower",
      svg: "icon-WC",
      className: css.fillStyle,
      condition: shower > 0,
    },
    {
      title: "TV",
      svg: "icon-TV",
      className: css.fillStyle,
      condition: TV > 0,
    },
    {
      title: "Toilet",
      svg: "icon-toilet",
      className: css.strokeStyle,
      condition: toilet > 0,
    },
    {
      title: "Freezer",
      svg: "icon-freezer",
      className: css.fillStyle,
      condition: freezer > 0,
    },
    {
      title: "Microwave",
      svg: "icon-microwave",
      className: css.fillStyle,
      condition: microwave > 0,
    },
    {
      title: "Gas",
      svg: "icon-gas",
      className: css.fillStyle,
      condition: gas > 0,
    },
    {
      title: "Water",
      svg: "icon-water",
      className: css.fillStyle,
      condition: water > 0,
    },
  ];

  return (
    <div>
      <ul className={css.featuresList}>
        {featuresData.map(({ title, svg, className, condition = true }) =>
          condition ? (
            <li className={css.featureItem} key={svg}>
              <div className={css.iconWrapper}>
                <div className={css.containerIconGroup}> 
                <svg width={20} height={20} className={className}>
                  <use xlinkHref={`${sprite}#${svg}`} />
                </svg>
                <p className={css.featureLabel}>{title}</p>
                </div>
              </div>
            </li>
          ) : null
        )}
      </ul>
      
      <h3 className={css.titleVehicle}>Vehicle details</h3>

      <ul className={css.detailsList}>
        <li className={css.detailsItem}>
          <p className={css.detailsText}>Form</p>
          <p className={css.detailsText}>
            {db.form}
          </p>
        </li>
        <li className={css.detailsItem}>
          <p className={css.detailsText}>Length</p>
          <p className={css.detailsText}>{db.length }</p>
        </li>
        <li className={css.detailsItem}>
          <p className={css.detailsText}>Width</p>
          <p className={css.detailsText}>{db.width}</p>
        </li>
        <li className={css.detailsItem}>
          <p className={css.detailsText}>Height</p>
          <p className={css.detailsText}>{db.height}</p>
        </li>
        <li className={css.detailsItem}>
          <p className={css.detailsText}>Tank</p>
          <p className={css.detailsText}>{db.tank}</p>
        </li>
        <li className={css.detailsItem}>
          <p className={css.detailsText}>Consumption</p>
          <p className={css.detailsText}>{db.consumption}</p>
        </li>
      </ul>
    </div>
  );
};


export default Features;
