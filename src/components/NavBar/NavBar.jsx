import { AppBar, Tab, Tabs, Toolbar } from "@material-ui/core";

function NavBar() {
    return (
        <AppBar position="sticky">
            <Tabs>
                <Tab label="About" />
                <Tab label="Experience" />
                <Tab label="Resume" />
                <Tab label="Contact" />
            </Tabs>
        </AppBar>
    )
}

export default NavBar;