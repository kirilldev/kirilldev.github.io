function findAbsent (range) {
  let end = range.length;
  let start = 0;

  while (end > start) {
    var median = parseInt((end + start)/2);

    if (range[median] === median) {
      start = median + 1;
    } else {
      end = median;
    }
  }

  return end;
}