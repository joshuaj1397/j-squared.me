import { Grid } from "@material-ui/core";
import ExperienceTile from "./ExperienceTile/ExperienceTile";

function Experience() {
    return (
        <Grid container spacing={3}>
            <ExperienceTile
                title={"Citigroup"}
                time={"May 2019 - Present"}
                description={"Gave users the ability to order checks via mobile by implementing Java microservice based API leading to a ~33% increase in online check ordering. Created a script for onboarding a set of standards and guidelines for code quality to help achieve less than 2 days of technical debt and reduce code vulnerabilities in any given microservice."}
            />
            <ExperienceTile
                title={"TitleFlow"}
                time={"May 2018 - May 2019"}
                description={"Redesigned UI/UX to target businesses as well as individuals. Designed and implemented cloud solutions to reduce the cost of storing legal documents by 40%"}
            />
            <ExperienceTile
                title={"Texas Tech University IT"}
                time={"May 2017 - May 2018"}
                description={"Gave users the ability to order checks via mobile by implementing Java microservice based API leading to a ~33% increase in online check ordering.\nCreated a script for onboarding a set of standards and guidelines for code quality to help achieve less than 2 days of technical debt and reduce code vulnerabilities in any given microservice."}
            />
        </Grid>
    )
}

export default Experience;