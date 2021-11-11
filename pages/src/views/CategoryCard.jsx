import * as React from "react";
import Chip from "@mui/material/Chip";

export default function BasicChips({ category }) {
  return (
    <div>
      <Chip
        sx={{ marginTop: 1 }}
        color="secondary"
        variant="outlined"
        label={category.name}
      />
    </div>
  );
}
