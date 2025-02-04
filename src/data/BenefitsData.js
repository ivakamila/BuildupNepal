import LowerCostOne from "../assets/benefits/lower-cost-one.jpg";
import LowerCostOne1x from "../assets/benefits/lower-cost-one-1x.jpg";
import LowerCostOne2x from "../assets/benefits/lower-cost-one-2x.jpg";
import LowerCostTwo from "../assets/benefits/lower-cost-two.jpg";
import LowerCostTwo1x from "../assets/benefits/lower-cost-two-1x.jpg";
import LowerCostTwo2x from "../assets/benefits/lower-cost-two-2x.jpg";
import LowerEmissions from "../assets/benefits/lower-emissions.jpg";
import LowerEmissions1x from "../assets/benefits/lower-emissions-1x.jpg";
import LowerEmissions2x from "../assets/benefits/lower-emissions-2x.jpg";
import BenefitsModalOne from "../assets/benefits/benefits-modal-1.jpg";
import BenefitsModalTwo from "../assets/benefits/benefits-modal-2.jpg";

export const BenefitsData = [
  {
    bgImage: [LowerCostOne, LowerCostOne1x, LowerCostOne2x],
    percentage: "40% lower cost",
    smallText: "When building a CSEB wall",
    data: {
      datasets: [
        {
          data: [40, 60],
          backgroundColor: ["rgba(24, 99, 175, 0.6)", "rgba(0, 0, 0, 0)"],
          borderColor: "#fff",
          borderWidth: 2,
          hoverOffset: 4,
          hoverBackgroundColor: [
            "rgba(24, 99, 175, 0.9)",
            "rgba(196, 77, 86, 0.8)",
          ],
        },
      ],
    },
    options: {
      plugins: {
        tooltip: false,
        legend: false,
      },
      animation: {
        duration: 3000,
      },
    },
    modalTitle: "40% lower cost when building a CSEB wall",
    modal: (
      <>
        <p>
          CSEB bricks are produced by local materials, and cost less than fired
          bricks.
        </p>
        <ul>
          <li>Transportation is reduced as bricks are produced locally</li>
          <li>
            Less mortar - as the mortar is poured through the holes in the
            bricks
          </li>
          <li>
            Less manpower as the LEGO shape of the bricks makes it fast and easy
            to build
          </li>
          <li>Plaster is not needed – you can paint directly on the bricks </li>
          <li>
            A CSEB wall of 150 mm thickness is as strong as a fired brick wall
            of 230 mm reducing the overall material required in the wall.{" "}
          </li>
        </ul>
      </>
    ),
  },
  {
    bgImage: [LowerCostTwo, LowerCostTwo1x, LowerCostTwo2x],
    percentage: "25% lower cost",
    smallText: "When building a 2 room house",
    data: {
      datasets: [
        {
          data: [25, 75],
          backgroundColor: ["rgba(24, 99, 175, 0.6)", "rgba(0, 0, 0, 0)"],
          borderColor: "#fff",
          borderWidth: 2,
          hoverOffset: 4,
          hoverBackgroundColor: [
            "rgba(24, 99, 175, 0.9)",
            "rgba(196, 77, 86, 0.8)",
          ],
        },
      ],
    },
    options: {
      plugins: {
        tooltip: false,
        legend: false,
      },
      animation: {
        duration: 3000,
      },
    },
    modalTitle: "25% lower cost when building a 2-room house",
    modal: (
      <>
        <p>
          When building a small 2-room house the overall cost is reduced by 25%.
        </p>
        <img
          src={BenefitsModalOne}
          alt="cost breakdown for house"
          className="modal__img"
        />
        <img
          src={BenefitsModalTwo}
          alt="earth brick house"
          className="modal__img"
        />
      </>
    ),
  },
  {
    bgImage: [LowerEmissions, LowerEmissions1x, LowerEmissions2x],
    percentage: "50% lower emisions",
    smallText: "Than fired bricks",
    data: {
      datasets: [
        {
          data: [50, 50],
          backgroundColor: ["rgba(34, 200, 71, 0.5)", "rgba(0, 0, 0, 0)"],
          borderColor: "#fff",
          borderWidth: 2,
          hoverOffset: 4,
          hoverBackgroundColor: [
            "rgba(34, 200, 71, 0.8)",
            "rgba(196, 77, 86, 0.8)",
          ],
        },
      ],
    },
    options: {
      plugins: {
        tooltip: false,
        legend: false,
      },
      animation: {
        duration: 3000,
      },
    },
    modalTitle: "50% lower emisions than fired bricks",
    modal: (
      <>
        <p>
          The fired brick industry is responsible for 37% of CO2 emissions from
          combustion in Nepal and is a major source of and Black carbon (
          {
            <a
              href="https://www.buildupnepal.com/wp-content/uploads/2022/05/dirty-stacks-high-stakes-an-overview-of-brick-sector-in-south-asia.pdf"
              target="_blank"
            >
              World bank, 2020
            </a>
          }
          ). Black carbon emissions in particular is contributing to pollution
          and melting of the Himalayan glacier which supplies drinking water for
          1.5 billion South Asians. Our technology saves 40-60% of CO2 emissions
          per house. For a 3 room house this equals 9.5 ton of CO2 emissions
          compared to using fired bricks. (a flight between
          London-Kathmandu-London emits approx. 2.8 ton CO2. Numbers are based
          on research by{" "}
          <a
            href="https://www.buildupnepal.com/wp-content/uploads/2022/02/carbon-evaluation-of-compressed-stabilised-earth-blocks-cseb-in-nepal-summary.pdf"
            target="_blank"
          >
            Max fordham
          </a>{" "}
          and{" "}
          <a
            href="https://www.buildupnepal.com/wp-content/uploads/2022/05/ait_icimod-carbon-savings-w-cseb.pdf "
            target="_blank"
          >
            ICIMOD Nepal and Asian Institute of Technology
          </a>
          .
        </p>
      </>
    ),
  },
];
