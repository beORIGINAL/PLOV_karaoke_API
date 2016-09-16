export default function RestAbstractFactory (Restangular, $log) {
    'ngInject';
    const service = {
        copy: Restangular.copy,
        create,
        one,
        restangularizeElement,
        restangularizeCollection,
        success,
        warning,
        error
    };

    return service;

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

    function success (title, data) {
        $log.success({ title: title });
        return data;
    }

    function warning (title, data) {
        $log.warning({ title: title });
        return data;
    }

    function error (title, err) {
        $log.error({ title: title, message: err.statusText });
        return err;
    }
}
