app.service('Validation', function($q){

    var keys = ["name", "details", "img", "provenance", "vol"];

    return {
        validate: validate,
        hasErrors: hasErrors
    };

    /**
     * Funci�n que comprueba que un campo es v�lido
     * @param value campo a comprobar
     * @returns {boolean}
     */
    function valid(value){
        return (value == undefined || value.toString().trim() == "");
    }

    /**
     * M�todo que valida cada uno de los campos del objeto
     * @param obj objeto a validar
     * @param errorFeedbackCallback funci�n para mostrar errores encontrados
     * @returns {*} promesa
     */
    function validate(obj,errorFeedbackCallback){

        var deferred = $q.defer();

        keys.forEach(function(key){
            if (valid(obj[key])) {
                errorFeedbackCallback(key);
            }
        });

        deferred.resolve();

        return deferred.promise;
    }

    /**
     * M�todo que comprueba si existe alg�n error
     * @param errors objeto con los errores
     * @returns {*} promesa
     */
    function hasErrors(errors){

        var deferred = $q.defer();

        keys.forEach(function(key){
            if (errors[key]){
                return deferred.reject();
            }
        });

        deferred.resolve();

        return deferred.promise;
    }
});