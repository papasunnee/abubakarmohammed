var newsbar = document.querySelector('.scroll-text');

var sourceIds = [
	"5965c0feb134570004e7367e","5965c0feb134570004e7367f","5965c0feb134570004e7367d",
	"5965c0feb134570004e73681", "5a8ffb604a1a7400043cc57d", "5a8ffb9f4a1a7400043cc57e",
	"5a8ffbf34a1a7400043cc57f", "5a8ffcbc4a1a7400043cc597", "5a8ffcf74a1a7400043cc598"
];

var sources = "";
sourceIds.forEach((sourceId)=>{sources = sources + '"' + sourceId + '",'});
var query = `{
	gistMany(limit: 10, sort: PUBLISHEDDATE_DESC, filter: {_operators: {source: {in: [${sources}]}}}) {
		title
		link
	}
}`

fetch('https://the411ng-backend.herokuapp.com/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: query }),
})
  .then(res => res.json())
  .then(res => {
		// console.log(res.data.gistMany)
		res.data.gistMany.forEach((newsItem, index)=>{
			var span = document.createElement("span");
			span.classList.add('fa');
			span.classList.add('fa-circle-o');

			var link = document.createElement("a");
			link.setAttribute("href", newsItem.link);
			link.append(newsItem.title);

			var blankSpace = document.createElement("span")
			blankSpace.append('\u00A0\u00A0');
			var blankSpace1 = document.createElement("span")
			blankSpace1.append('\u00A0\u00A0');
			newsbar.append(link);
			newsbar.append(blankSpace);
			if (index != res.data.gistMany.length-1) {
				newsbar.append(span);
				newsbar.append(blankSpace1);
			}
		})
	});
