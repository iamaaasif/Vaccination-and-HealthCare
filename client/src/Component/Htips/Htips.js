import React from "react";
import "./Htips.css";
import baby from "../Photos/takeVaccine.png";
import { Container, Table, Row, Col } from "react-bootstrap";
import babyFood from "../Photos/babyFood.jpg";
import womenfood from "../Photos/womenFood.jpg";

function Htips() {
  return (
    <>
      <Container>
        <div className="imageDiv mb-3">
          <img className="topImage mt-2 " src={baby} alt="" />
        </div>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Vaccination Chart from Birth to 15 Months
        </h1>
      </Container>
      <Container fluid>
        <Table striped bordered hover style={{ textAlign: "center" }}>
          <thead style={{ color: "white" }}>
            <tr>
              <th style={{ backgroundColor: "rgb(7, 7, 51)" }}>Vaccine</th>
              <th style={{ backgroundColor: "rgb(2, 82, 51)" }}>Birth</th>
              <th style={{ backgroundColor: "rgb(2, 82, 51)" }}>1 Month</th>
              <th style={{ backgroundColor: "rgb(2, 82, 51)" }}>2 Month</th>
              <th style={{ backgroundColor: "rgb(2, 82, 51)" }}>4 Month</th>
              <th style={{ backgroundColor: "rgb(2, 82, 51)" }}>6 Month</th>
              <th style={{ backgroundColor: "rgb(2, 82, 51)" }}>9 Month</th>
              <th style={{ backgroundColor: "rgb(2, 82, 51)" }}>12 Month</th>
              <th style={{ backgroundColor: "rgb(2, 82, 51)" }}>15 Month</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hepatitis B</td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }}>1st Dose</td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }} colSpan={2}>
                2nd Dose
              </td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }} colSpan={4}>
                3rd Dose
              </td>
            </tr>
            <tr>
              <td>Rota Vairus</td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }}>1st Dose</td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }}>2nd Dose</td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
            </tr>
            <tr>
              <td>DTAP Vaccine</td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }}>1st Dose</td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }}>2nd Dose</td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }}>3rd Dose</td>
              <td style={{ backgroundColor: "#E5E5E5" }} colSpan={2}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
            </tr>
            <tr>
              <td>HIB Vaccine</td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }}>1st Dose</td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }}>2nd Dose</td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }} colSpan={2}>
                3rd Dose and 4th Dose
              </td>
            </tr>
            <tr>
              <td>PCV 13 Vaccine</td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }}>1st Dose</td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }}>2nd Dose</td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }}>3rd Dose</td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }} colSpan={2}>
                4th Dose
              </td>
            </tr>
            <tr>
              <td>IPV Vaccine</td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }}>1st Dose</td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }}>2nd Dose</td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }} colSpan={4}>
                3rd Dose
              </td>
            </tr>
            <tr>
              <td>Influenza Vaccine</td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }} colSpan={4}>
                Annual Vaccination 1 or 2 Dose
              </td>
            </tr>
            <tr>
              <td>Influenza Vaccine</td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }} colSpan={4}>
                Annual Vaccination 1 or 2 Dose
              </td>
            </tr>
            <tr>
              <td>MMR Vaccine</td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }} colSpan={2}>
                1st Dose
              </td>
            </tr>
            <tr>
              <td>VAR Vaccine</td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "#E5E5E5" }}></td>
              <td style={{ backgroundColor: "rgb(240, 197, 6)" }} colSpan={2}>
                1st Dose
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <section className="mid">
        <Container className="container">
          <Row>
            <Col xs={6}>
              <img className="babyfoodimage" src={babyFood} alt="babyfood" />
            </Col>
            <Col xs={6}>
              <h1 className="sectionTitle">Baby Feeding Chart</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mid">
        <Container>
          <Table
            striped
            bordered
            hover
            size="sm"
            style={{ paddingBottom: "20px" }}
          >
            <thead>
              <tr>
                <th style={{ width: "25%" }}>Age</th>
                <th style={{ width: "25%" }}>Ounces Per Feeding</th>
                <th style={{ width: "50%" }}>Solid Foods</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Uo to 2 weeks of Life</td>
                <td>.5 oz. in the first days. than 1-3 oz.</td>
                <td>No</td>
              </tr>
              <tr>
                <td>2 Weeks to 2 months</td>
                <td>2-4 oz.</td>
                <td>No</td>
              </tr>
              <tr>
                <td>2-4 months</td>
                <td>4-6 oz.</td>
                <td>No</td>
              </tr>
              <tr>
                <td>4-6 months</td>
                <td>4-8 oz.</td>
                <td>
                  Possibly, if your baby can hold their head up is atlest 13
                  pounds. but you don not need to introduce solid food yet.
                </td>
              </tr>
              <tr>
                <td>4-12 months</td>
                <td>8 oz.</td>
                <td>
                  yes Start with soft foods, like one-grain cereals and pureed
                  vegetables, meats and fruits and processing to mashed and well
                  chopped finger foods.Giv your baby one food at a time.Continue
                  supplementing with brest or formula feeding.
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </section>
      <section>
        <Container>
          <h1 style={{ fontSize: "70px" }}>
            Feeding Your Newborn : Tips for new Parents
          </h1>
          <p>
            1. Stick with breast milk or formula Breast milk is the ideal food
            for babies ??? with rare exceptions. If breast-feeding isn't possible,
            use infant formula. Healthy newborns don't need cereal, water, juice
            or other fluids.
          </p>
          <p>
            2. Feed your newborn on cue Most newborns need eight to 12 feedings
            a day ??? about one feeding every two to three hours. Look for early
            signs of readiness to feed, such as moving the hands to the mouth,
            sucking on fists and fingers, and lip smacking. Fussing and crying
            are later cues.
          </p>
          <p>
            The sooner you begin each feeding, the less likely you'll need to
            soothe a frantic baby. When your baby stops suckling, closes his or
            her mouth, or turns away from the nipple or bottle, he or she might
            be full ??? or
          </p>
          <p>
            simply taking a break. Try burping your baby or waiting a minute
            before offering your breast or the bottle again. As your baby gets
            older, he or she may take in more milk in less time at each feeding.
          </p>
          <p>
            3. Consider vitamin D supplements Ask your baby's doctor about
            vitamin D supplements for the baby, especially if you're
            breast-feeding. Breast milk might not provide enough vitamin D,
            which helps your baby absorb calcium and phosphorus ??? nutrients
            necessary for strong bones.
          </p>
          <p>
            4. Expect variations in your newborn's eating patterns Your newborn
            won't necessarily eat the same amount every day. During growth
            spurts ??? often at two to three weeks after birth ??? your newborn
            might take more at each feeding or want to be fed more often.
            Respond to early signs of hunger, rather than keeping a strict eye
            on the clock.
          </p>
          <p>
            5. Trust your instincts ??? and your newborn's You might worry that
            your newborn isn't eating enough, but babies usually know just how
            much they need. Don't focus on how much, how often or how regularly
            your newborn eats. Instead, look for:
          </p>
          <p>
            Steady weight gain Contentment between feedings By the fifth day
            after birth, at least six wet diapers and three or more bowel
            movements a day Contact the doctor if your newborn isn't gaining
            weight, wets fewer than six diapers a day or shows little interest
            in feedings.
          </p>
          <p>
            6. Consider each feeding a time to bond with your newborn Hold your
            newborn close during each feeding. Look him or her in the eye. Speak
            with a gentle voice. Use each feeding as an opportunity to build
            your newborn's sense of security, trust and comfort.
          </p>
          <p>
            7. Keep feedings consistent If other family members or caretakers
            will be feeding your baby part of the time, make sure they're using
            the same feeding routines and methods you use.
          </p>
          <p>
            8. Know when to ask for help If you're having trouble
            breast-feeding, ask a lactation consultant or your baby's doctor for
            help ??? especially if every feeding is painful or your baby isn't
            gaining weight. If you haven't worked with a lactation consultant,
            ask your baby's doctor for a referral or check with the obstetrics
            department at a local hospital.
          </p>
        </Container>
      </section>
      <section>
        <Container>
          <div className="womenfooddiv">
            <img className="womenfoodimg" src={womenfood} alt="womenfood" />
          </div>
          <h1
            style={{
              textAlign: "center",
              fontSize: "40px",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            36 Health Tips for a Healthy Pregnancy
          </h1>
          <p>1. Take a prenatal vitamin</p>
          <p>2. Exercise regularly</p>
          <p>3. Write a birth plan</p>
          <p>4. Educate yourself</p>
          <p>
            5. Change your chores (avoid harsh or toxic cleaners, heavy lifting)
          </p>
          <p>6. Track your weight gain (normal weight gain is 25-35 pounds)</p>
          <p>7. Get comfortable shoes</p>
          <p>
            8. Eat folate-rich foods (lentils, asparagus, oranges, fortified
            cereals)
          </p>
          <p>9. Eat calcium-rich foods (dairy, canned fish, soy)</p>
          <p>10. Eat more fish (except those high in mercury )</p>
          <p>11. Eat foods with fiber</p>
          <p>
            12. Don???t eat soft cheeses (unpasteurized styles like Brie and feta
            may contain bacteria that can cause fever, miscarriage or pregnancy
            complications)
          </p>
          <p>13. Eat your veggies</p>
          <p>14. Eat five or six well-balanced meals each day</p>
          <p>
            15.But don???t overeat. You only need 300-500 additional calories per
            day. Keep a food diary.
          </p>
          <p>16. Limit caffeine</p>
          <p>
            17. Drink plenty of fluids (six 8-ounce glasses of water per day)
          </p>
          <p>18. Don???t drink alcohol</p>
          <p>19. Wear sunscreen</p>
          <p>
            20. Fly smart (avoid air travel if possible early and late in
            pregnancy)
          </p>
          <p>21. Avoid changing cat litter (to reduce risk of toxoplasmosis)</p>
          <p>22. Give in to cravings ??? sometimes</p>
          <p>23. Know when to call your doctor with concerns</p>
          <p>24. Don???t smoke; avoid secondhand smoke</p>
          <p>25. Get enough sleep</p>
          <p>26. Wear your seatbelt</p>
          <p>
            27. Don???t take over-the-counter medications or herbal remedies
            without medical consultation
          </p>
          <p>28. See your dentist</p>
          <p>29. Take a pregnancy class</p>
          <p>30. Baby sit a friend???s baby for some real-world experience</p>
          <p>31. Tour birth facilities</p>
          <p>
            32. Practice relaxation techniques daily (yoga, stretching, deep
            breathing, massage)
          </p>
          <p>33. Don???t overmedicate</p>
          <p>34. Exercise, but don???t overdo it</p>
          <p>35. Stretch before bed to avoid leg cramps</p>
          <p>36. Take a picture of yourself before the baby arrives</p>
        </Container>
      </section>
    </>
  );
}

export default Htips;
