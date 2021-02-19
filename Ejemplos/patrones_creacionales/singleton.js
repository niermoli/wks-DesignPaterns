let Singleton = (function () {
    let instance;
    function createInstance() {
        let _privateVariable = 'I am a private variable';
        function _privateMethod() {
            console.log('I am a private method');
        }
        return {
            publicMethod: function() {
                console.log('I am a public method');
            },
            publicVariable: 'I am a public variable'
        };
    } 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
let instance1 = Singleton.getInstance(); 

