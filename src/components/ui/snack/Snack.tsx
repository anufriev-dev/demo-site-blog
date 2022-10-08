import { Alert, Snackbar } from "@mui/material";

export default function Snack({
  onSnack,
  snack,
  text
}) {
  return (
    <Snackbar  onClose={() => onSnack(false)}
        autoHideDuration={6000}
        open={snack}  anchorOrigin={{ vertical: "bottom", horizontal : "right" }}
    >
      <Alert color="warning" severity="info">{text}</Alert>
    </Snackbar>
  )
}
