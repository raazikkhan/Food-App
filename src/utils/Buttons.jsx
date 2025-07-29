import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Buttons() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button
          className="!rounded-md "
          variant="contained"
          color="white"
        ></Button>
      </Stack>
    </div>
  );
}

export default Buttons;
