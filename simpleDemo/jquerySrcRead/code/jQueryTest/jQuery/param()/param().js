$(function () {
    formatObject();
    transatcionFlag_false();
    transatcionFlag_true();
    function formatObject() {
        console.log($.param({
            'a thing': 'it&s=value',
            'another thing': 'another value',
            'weird characters': '!@#$%^&*()_+='
        }));
    }
    function transatcionFlag_true() {
        console.log("transatcionFlag_true()...");
        console.log($.param({
            name: {
                first: 'Yogi',
                last: 'Bear'
            },
            address: {
                street: '123 Anywhere Lane',
                city: 'Austin',
                state: 'TX',
                postalcode: '78701'
            }
        },true));
    }
    function transatcionFlag_false() {
        console.log("transatcionFlag_false()...");
        console.log($.param({
            name: {
                first: 'Yogi',
                last: 'Bear'
            },
            address: {
                street: '123 Anywhere Lane',
                city: 'Austin',
                state: 'TX',
                postalcode: '78701'
            }
        }));
    }
});

