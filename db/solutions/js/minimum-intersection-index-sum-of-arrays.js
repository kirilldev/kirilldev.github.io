function findAnswers(list1, list2) {
    const list1Map = new Map();
    let answers = [];
    let min = Infinity;

    list1.forEach((el, i) => list1Map.set(el, i));

    list2.forEach((el, i) => {
        const l1Index = list1Map.get(el);

        if (l1Index === undefined) {
            return;
        }

        const sum = l1Index + i;

        if (min > sum) {
            answers = [el];
            min = sum;
        } else if (min === sum) {
            answers.push(el);
            min = sum;
        }
    });

    return answers;
}