import AboutInfo from "../../components/About/AboutInfo";

function About() {

  return (
    <>
      <AboutInfo slug={"personal_info"} />
      <AboutInfo slug={"work_experience"} />
      <AboutInfo slug={"education"} />
      <AboutInfo slug={"skills"} />
      <AboutInfo slug={"qualities"} />
      <AboutInfo slug={"honors_and_awards"} />
      <AboutInfo slug={"volunteering"} />
    </>
  );
}

export default About;
