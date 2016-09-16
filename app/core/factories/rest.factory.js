export default function RestAbstractFactory (Restangular, $log) {
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
}
