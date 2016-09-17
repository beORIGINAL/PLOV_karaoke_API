export default function RestAbstractFactory (Restangular, LoggerFactory) {
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
        LoggerFactory.success({title: 'Data loaded'});
        return data;
    }

    function handleError(error) {
        LoggerFactory.error({ title: 'Error', message: error.message });
        Promise.reject(error);
    }
}
