import Headline from "../components/Headline";
import Main from "../components/layout/Main";
import Lessons from "../components/Lessons";
import PersonalTraining from "../components/PersonalTraining";


export default function ReserveYourSpotPage() {
  return (
    <Main>
          <Headline align="start">
                <h1 className="style-h1 ps-5">
                  Book a session
                </h1>
              </Headline>
              <Lessons />
              <PersonalTraining />
    </Main>
  )
}
