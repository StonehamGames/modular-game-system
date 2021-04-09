/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/modular-game-system"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <span style={{color: 'orange'}}>
            <i className={classes.socialIcons + " fas fa-cubes"} />
          </span> 
          Modular Game System
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-discord"
          title="Join us on Discord"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://discord.gg/hMxPp66BRE?ref=shggithubio"
            target="_blank"
            className={classes.navLink}
          >
            <span style={{color: 'Mediumslateblue'}}>
            <i className={classes.socialIcons + " fab fa-discord"} />
            </span>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/StonehamGames?ref=shggithubio"
            target="_blank"
            color="twitter"
            className={classes.navLink} simple
          >
          <span>
            <i className={classes.socialIcons + " fab fa-twitter"} />
            </span>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-unity"
          title="Check us out on the asset store"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://assetstore.unity.com/publishers/1337?ref=shggithubio"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-unity"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
