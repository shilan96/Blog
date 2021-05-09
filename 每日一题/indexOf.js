const str = 'wold Hello world!'

function fn(str1, str2) {
	const length1 = str1.length;
	const length2 = str2.length;
	if (length1 < length2) {
		return -1
	}
	for (let index = 0; index < length1 - length2; index++) {
		if (str1[index] === str2[0] && str2 === str1.slice(index, index + length2)) {
			return index;
		}
	}
	return -1
}

console.log(fn(str, 'world'))