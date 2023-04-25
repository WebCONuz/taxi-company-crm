export default function DateMaker(t) {
  let time = "";
  let day = t.getDate();
  time =
    1 + t.getMonth() < 10
      ? "0" + (1 + t.getMonth()) + "/"
      : 1 + t.getMonth() + "/";
  time += t.getFullYear();
  return day + "/" + time;
}
