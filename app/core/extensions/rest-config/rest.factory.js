export default function RestAbstractFactory (Restangular, logger) {
    'ngInject';
    return {
        copy: Restangular.copy,
        create,
        one,
        restangularizeElement,
        restangularizeCollection
    };

    function create (parentRoute) {
        return Restangular.service(parentRoute);
    }

    function one (route, id) {
        return Restangular.one(route, id);
    }

    function restangularizeElement (parentItem, item, route) {
        return Restangular.restangularizeElement(parentItem, item, route);
    }

    function restangularizeCollection (parentItem, collection, route) {
        return Restangular.restangularizeCollection(parentItem, collection, route);
    }

    function handleSuccess(data) {
        logger.success({title: 'Data loaded', type: 'success', data});
        return data;
    }

    function handleError(error) {
        logger.error({ title: 'Error', type:'error', message: error.message });
        Promise.reject(error);
    }
}
