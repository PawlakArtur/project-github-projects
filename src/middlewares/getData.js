const getData = store => {
	return next => {
		return action => {
			if (action.type === 'GET_DATA') {
				const API = 'https://api.github.com/search/repositories';
				const query = `?${action.search && `q=${action.search}`}&per_page=5`;
				const uri = API + query;
				fetch(uri)
					.then(response => response.json())
					.then(data => {
						const successAction = {
							type: 'GET_DATA_SUCCESS',
							result: data
						}
						return next(successAction);
					})
					.catch(error => {
						const errorAction = {
							type: 'GET_DATA_ERROR',
							error: error
						}
						return next(errorAction);
					});
			}
			return next(action);
		}
	}
}

export default getData;