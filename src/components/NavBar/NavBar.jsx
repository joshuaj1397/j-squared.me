import { AppBar, Tab, Tabs } from "@material-ui/core";

function NavBar() {
    return (
        <AppBar position="sticky">
            <Tabs centered={true}>
                <Tab label="About" />
                <Tab label="Experience" />
                <Tab label="Projects" />
                <Tab label="Resume" />
                <Tab label="Contact" />
            </Tabs>
        </AppBar>
    )
}

export default NavBar;