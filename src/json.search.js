
if (!JSON.search) {
	JSON.search = function(tree, xpath, single) {
		'use strict';
		
		var xTree     = JSON.toXML(tree),
			xFound    = Defiant.node[ single ? 'selectSingleNode' : 'selectNodes' ](xTree, xpath),
			i         = xFound.length,
			found     = [],
			searchMap = this.search.map,
			mapIndex,
			xmlTwin;

		if (single) xFound = [xFound];

		//console.log( 'x-RES:', xFound );
		while (i--) {
			xmlTwin = xFound[i];
			switch(xmlTwin.nodeType) {
				case 2:
				case 3: 
					found.unshift( xmlTwin.nodeValue );
					break;
				default:
					mapIndex = +xmlTwin.getAttribute('d:mi');
					found.unshift( searchMap[mapIndex-1] );
			}
			found[0].twin = xmlTwin;
		}
		// if environment = development, add search tracing
		if (Defiant.env === 'development') {
			this.trace = JSON.mtrace(tree, found, xFound);
		}

		//console.log( 'RES:', found );
		return found;
	};
}