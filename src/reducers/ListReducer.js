export default function(state=[], action) {
	// console.log(state);
	let newS;
	switch(action.type) {
		case "ADD_TODO":
			console.log("recuder ADD_TODO");
			newS = [...state];
			newS.push(action.payload);
			console.log(newS);
			return newS;
		case "REMOVE_TODO_ITEM":
			newS = [...state];
			newS.splice(action.payload, 1);
			return newS;
		default:
			return state;
	}
}