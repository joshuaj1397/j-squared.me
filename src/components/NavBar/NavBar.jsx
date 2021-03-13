import { AppBar, Tab, Tabs, Toolbar } from "@material-ui/core";

function NavBar() {
    return (
        <Toolbar>
            <AppBar position="sticky">
                <Tabs>
                    <Tab label="About" />
                    <Tab label="Experience" />
                    <Tab label="Resume" />
                    <Tab label="Contact" />
                </Tabs>
            </AppBar>
        </Toolbar>
    )
}

export default NavBar;