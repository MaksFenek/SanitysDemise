import { Typography } from "@mui/material";
import { TFunction } from "i18next";

export const DIFFICULTIES = {
  _empty: "_empty",
  easy: "easy",
  hell: "hell",
} as const;
type DifficultiesMapType = Record<keyof typeof DIFFICULTIES, React.ReactNode>;

export const DIFFICULTIES_MAP: (t: TFunction) => DifficultiesMapType = (t) => ({
  _empty: "_empty",
  easy: (
    <Typography variant="h4" textAlign="center" color="var(--easy-color)">
      [{t("Easy")}]
    </Typography>
  ),
  hell: (
    <Typography variant="h4" textAlign="center" color="var(--impossible-color)">
      [{t("HELL")}]
    </Typography>
  ),
});
