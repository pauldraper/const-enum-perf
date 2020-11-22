import { run as runEnum } from "./enum";
import { run as runConstEnum } from "./const-enum";

suite("enum test #1", () => {
  benchmark("constEnum", () => (window.sideEffect = runConstEnum()));
  benchmark("enum", () => (window.sideEffect = runEnum()));
});

suite("enum test #2", () => {
  benchmark("enum", () => (window.sideEffect = runEnum()));
  benchmark("constEnum", () => (window.sideEffect = runConstEnum()));
});
