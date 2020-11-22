enum Constant {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
}

const ARRAY = Array(10 * 1000);
for (let i = 0; i < ARRAY.length; i++) {
  switch (i % 10) {
    case 0:
    case 6:
      ARRAY[i] = Constant.A;
      break;
    case 1:
      ARRAY[i] = Constant.B;
      break;
    case 2:
      ARRAY[i] = Constant.C;
      break;
    case 3:
    case 4:
      ARRAY[i] = Constant.E;
      break;
    case 5:
      ARRAY[i] = Constant.F;
      break;
    case 7:
    case 9:
      ARRAY[i] = Constant.G;
      break;
    case 8:
      ARRAY[i] = Constant.H;
      break;
  }
}

export function run(): number {
  const n = Math.random();
  let count = 0;
  for (let i = 0; i < ARRAY.length; i++) {
    switch (ARRAY[i]) {
      case Constant.A:
      case Constant.C:
        count += n;
        break;
      case Constant.D:
        count += n * 2;
        break;
      case Constant.B:
      case Constant.E:
        count++;
        break;
      case Constant.F:
        count += i;
        break;
      case Constant.G:
      case Constant.H:
        count -= i;
        break;
    }
  }
  return count;
}
