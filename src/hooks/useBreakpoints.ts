import {useMediaQuery} from "./useMediaQuery";
import {Breakpoints, MEDIA_QUERY_BREAKPOINTS} from "@types";



export function useBreakpoints() {
  const breakpoints = {
    isXs: useMediaQuery(MEDIA_QUERY_BREAKPOINTS.xs),
    isSm: useMediaQuery(MEDIA_QUERY_BREAKPOINTS.sm),
    isMd: useMediaQuery(MEDIA_QUERY_BREAKPOINTS.md),
    isLg: useMediaQuery(MEDIA_QUERY_BREAKPOINTS.lg),
    active: Breakpoints.XS as Breakpoints
  };
  if (breakpoints.isXs) breakpoints.active = Breakpoints.XS;
  if (breakpoints.isSm) breakpoints.active = Breakpoints.SM;
  if (breakpoints.isMd) breakpoints.active = Breakpoints.MD;
  if (breakpoints.isLg) breakpoints.active = Breakpoints.LG;

  return breakpoints;
}
