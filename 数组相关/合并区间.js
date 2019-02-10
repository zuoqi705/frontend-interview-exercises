/*
给出若干闭合区间，合并所有重叠的部分。 示例如下
[[8,10],[15,18],[2,6],[3,5],[1,3]] => [[1,6], [8,10], [15,18]]
*/
const merge = arr => {
	arr = arr.sort( (a,b) => a[0] - b[0]); 
	console.log(arr);
	var res = [];
	var last = arr.reduce((prev,curr) => {
		if(prev[1] >= curr[0]) {
			return [prev[0], Math.max(prev[1], curr[1])];
		} else {
			res.push(prev);
			return curr;
		}
	})
	res.push(last);
	return res;
}

var arr = [[8,10],[15,18],[2,6],[3,5],[1,3]];;
console.log(merge(arr))