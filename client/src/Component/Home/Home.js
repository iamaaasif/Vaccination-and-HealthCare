import React from "react";
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import baby from "../Photos/baby.jpg";
import pregnent from "../Photos/pregnent.jpg";
import health from "../Photos/doctor.jpg";
import cartoonbaby from "../Photos/cartoonbaby.jpg";
import pregnentwomen from "../Photos/pregnentwomen.jpg";
import mapImage from "../Photos/map.jpg";
function Home() {
  return (
    <>
      <section className="carousel-section">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={baby}
              alt="First slide"
            />
            <Carousel.Caption className="captions1">
              <h1>The Baby needs</h1>
              <h1>to be vaccinated</h1>
              <h1>regularly from</h1>
              <h1>birth</h1>
              <Button
                style={{
                  borderRadius: "40px",
                  width: "140px",
                  marginLeft: "0px",
                }}
                className="ReadMore"
                size="lg"
                variant="success"
              >
                <a
                  href="https://www.cdc.gov/vaccines/schedules/easy-to-read/child-easyread.html"
                  target="_blank"
                >
                  Read More
                </a>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={pregnent} alt="Second slide" />

            <Carousel.Caption className="captions2">
              <h1>Are vaccines safe</h1>
              <h1>During Pregnancy and </h1>
              <h1>And why we need vaccine.? </h1>
              <Button
                style={{
                  borderRadius: "40px",
                  width: "140px",
                  marginLeft: "0px",
                }}
                className="ReadMore"
                size="lg"
                variant="success"
              >
                <a
                  href="https://www.cdc.gov/vaccinesafety/concerns/vaccines-during-pregnancy.html"
                  target="_blank"
                >
                  Read More
                </a>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={health} alt="Third slide" />

            <Carousel.Caption className="captions3">
              <h1>Taking care of</h1>
              <h1>Baby and mother</h1>
              <h1>Health during</h1>
              <h1>Pregnancy.</h1>
              <Button
                style={{
                  borderRadius: "40px",
                  width: "140px",
                  marginLeft: "0px",
                }}
                className="ReadMore"
                size="lg"
                variant="success"
              >
                <a
                  href="https://www.parents.com/baby/care/american-baby-how-tos/newborn-baby-boot-camp/"
                  target="_blank"
                >
                  Read More
                </a>
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="about-babyvaccine">
        <Container className="babyContainer">
          <Row>
            <Col xs={12} md={6}>
              <img
                className="cartoon-baby"
                src={cartoonbaby}
                alt="cartoon baby"
              />
            </Col>
            <Col xs={12} md={6}>
              <div className="rounded-div">About Baby Vaccine</div>
              <h1 className="sectiontitle">
                Why the Baby needs to be vaccinated.?
              </h1>
              <p className="peragrap1">
                Vaccines save lives. Measles vaccines alone are estimated to
                have prevented over 21 million deaths between 2000 and 2017.
                Vaccines will help protect your child against diseases that can
                cause serious harm or death, especially in people with
                developing immune systems like infants. It’s important to
                vaccinate your child. If not, highly contagious diseases such as
                measles, diphtheria and polio, which were once wiped out in many
                countries, will come back.
              </p>
              <p className="peragrap2">
                If enough people in your community are immunized against a
                certain disease, you can reach something called herd immunity.
                When this happens, diseases can’t spread easily from person to
                person because most people are immune. This provides a layer of
                protection against the disease even for those who cannot be
                vaccinated, such as infants.
              </p>
              <Button
                style={{
                  borderRadius: "40px",
                  width: "150px",
                }}
                className="ReadMore"
                size="lg"
                variant="success"
              >
                <a
                  href="https://news.llu.edu/health-wellness/why-do-babies-need-so-many-vaccines"
                  target="_blank"
                >
                  Read More
                </a>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about-pregnentwomen">
        <Container className="pregnentWomenContainer">
          <Row>
            <Col xs={12} md={6}>
              <div className="rounded-div">About Pregnent Women Vaccine</div>
              <h1 className="sectiontitle">
                Why the Pregnent women needs to be vaccinated.?
              </h1>
              <p className="peragrap1">
                Did you know a baby gets disease immunity (protection) from mom
                during pregnancy? Getting the flu, Tdap, and COVID-19 vaccines
                while you’re pregnant causes your body to create protective
                antibodies (proteins produced by the body to fight off diseases)
                and you pass on some of those antibodies to your baby. This
                immunity can protect your baby from some diseases during the
                first few months of life before your baby can get vaccinated,
                but immunity decreases over time.
              </p>
              <p className="peragrap2">
                Some vaccines, such as the inactivated seasonal flu vaccine and
                the whooping cough vaccine, are recommended during pregnancy to
                protect the health of you and your baby. An inactivated vaccine
                does not contain a live version of the virus it is protecting
                against.
              </p>
              <Button
                style={{
                  borderRadius: "40px",
                  width: "150px",
                }}
                className="ReadMore"
                size="lg"
                variant="success"
              >
                <a
                  href="https://my.clevelandclinic.org/health/articles/9758-vaccination-during-pregnancy"
                  target="_blank"
                >
                  Read More
                </a>
              </Button>
            </Col>
            <Col xs={12} md={6}>
              <img
                className="pregnentwomen"
                src={pregnentwomen}
                alt="pregnent women"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="upozilaVaccineCenter">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="rounded-div-map">Upozila Vaccination Center</div>
              <p>Here you can see all the vaccine center in Upozila.</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <img className="mapImage" src={mapImage} alt="map" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="footerSection">
        <Container className="footerContainer">
          <Row>
            <Col xs={12}>
              <h2>Do You Want To Get Vaccinated.?</h2>
              <p>
                Oue Goal is to ensure that Every new Born Baby and Pregnent
                Women get Vaccination.
              </p>
            </Col>
          </Row>
          <Row className="footerbuttons">
            <Col xs={6} style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="outline-success"> Detailse</Button>
            </Col>
            <Col
              xs={6}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Button variant="outline-success">Shedule</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
