"use client";

import { ChevronLeft } from "@mui/icons-material";
import { Divider, IconButton, Toolbar } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import clsx from "clsx";
import { useAtomValue } from "jotai";

import { drawer, useToggle } from "./data";
import Navigation from "./navigation";

export default function Drawer() {
  const open = useAtomValue(drawer);
  const toggle = useToggle();
  return (
    <MuiDrawer
      variant="permanent"
      PaperProps={{
        className: clsx("relative", "whitespace-nowrap", {
          "w-[240px]": open,
          "overflow-x-hidden sm:w-16 w-14": !open,
        }),
        sx: {
          transition: (theme) =>
            theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: open
                ? theme.transitions.duration.leavingScreen
                : theme.transitions.duration.enteringScreen,
            }),
        },
      }}
    >
      <Toolbar className="flex items-center justify-end px-2">
        <IconButton onClick={toggle}>
          <ChevronLeft />
        </IconButton>
      </Toolbar>
      <Divider />
      <Navigation />
    </MuiDrawer>
  );
}
