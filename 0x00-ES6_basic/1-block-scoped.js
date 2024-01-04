export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    // This eslint-disables-next-line no-unused-vars, no-shadow
    const task = true;
    // This eslint-disables-next-line no-unused-vars, no-shadow
    const task2 = false;
  }

  return [task, task2];
}
