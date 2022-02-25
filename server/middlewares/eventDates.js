const datesForBabyVaccine = (req, res, next) => {
  const { name, gender, birthID, birthDate } = req.body;
  console.log(birthDate);
  const b_date = new Date(birthDate);
  console.log(b_date);

  console.log(b_date.setDate(b_date.getDate() + 42));

  const vaccination_info = {
    name,
    gender,
    birthID,
    birthDate,
    vaccines: [
      {
        vaccine_name: "BCG vaccine",
        vaccine_date: b_date.setDate(b_date.getDate() + 0),
        required_dose: "1",
        dose_no: 1,
      },
      {
        vaccine_name: "Pentavalent vaccine",
        vaccine_date: b_date.setDate(b_date.getDate() + 42),
        required_dose: "3",
        dose_no: 1,
      },
      {
        vaccine_name: "PCV vaccine",
        vaccine_date: b_date.setDate(b_date.getDate() + 0),
        required_dose: "2",
        dose_no: 1,
      },
      {
        vaccine_name: "Oral Polio vaccine",
        vaccine_date: b_date.setDate(b_date.getDate() + 0),
        required_dose: "3",
        dose_no: 1,
      },
      {
        vaccine_name: "Rota Virus vaccine",
        vaccine_date: b_date.setDate(b_date.getDate() + 0),
        required_dose: "3",
        dose_no: 1,
      },
      {
        vaccine_name: "Pentavalent vaccine",
        vaccine_date: b_date.setDate(b_date.getDate() + 28),
        required_dose: "3",
        dose_no: 2,
      },
      {
        vaccine_name: "Oral Polio vaccine",
        vaccine_date: b_date.setDate(b_date.getDate() + 0),
        required_dose: "3",
        dose_no: 2,
      },
      {
        vaccine_name: "PCV vaccine",
        vaccine_date: b_date.setDate(b_date.getDate() + 0),
        required_dose: "2",
        dose_no: 2,
      },
      {
        vaccine_name: "Rota Virus vaccine",
        vaccine_date: b_date.setDate(b_date.getDate() + 0),
        required_dose: "3",
        dose_no: 2,
      },

      {
        vaccine_name: "Pentavalent vaccine",
        vaccine_date: b_date.setDate(b_date.getDate() + 28),
        required_dose: "3",
        dose_no: 3,
      },
      {
        vaccine_name: "Oral Polio vaccine",
        vaccine_date: b_date.setDate(b_date.getDate() + 0),
        required_dose: "3",
        dose_no: 3,
      },
      {
        vaccine_name: "Rota Virus vaccine",
        vaccine_date: b_date.setDate(b_date.getDate() + 0),
        required_dose: "3",
        dose_no: 3,
      },

      {
        vaccine_name: "Rubella vaccine",
        vaccine_date: b_date.setDate(b_date.getDate() + 172),
        required_dose: "2",
        dose_no: 1,
      },
      {
        vaccine_name: "Rubella vaccine",
        vaccine_date: b_date.setDate(b_date.getDate() + 125),
        required_dose: "2",
        dose_no: 2,
      },
    ],
  };

  req.body = vaccination_info;
  next();
};

const datesForPWVaccine = (req, res, next) => {
  const { name, nationalID, monthOfPregnency } = req.body;
  const b_date = new Date(
    Date.now() - monthOfPregnency * 30 * 24 * 60 * 60 * 1000
  );
  const vaccination_info = {
    name,
    monthOfPregnency,
    nationalID,
    vaccines: [
      {
        vaccine_name: "TT vaccine",
        vaccine_date: b_date.setDate(b_date.getDate() + 120),
        required_dose: "1",
        dose_no: 1,
      },
      {
        vaccine_name: "MR vaccine",
        vaccine_date: b_date.setDate(b_date.getDate() + 60),
        required_dose: "1",
        dose_no: 1,
      },
    ],
  };

  req.body = vaccination_info;
  next();
};

module.exports = { datesForBabyVaccine, datesForPWVaccine };
