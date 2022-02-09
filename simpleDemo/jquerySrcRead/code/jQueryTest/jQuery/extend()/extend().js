(function ($) {
        // noDeepCopy();
        // deepCopy();

        extendStringToObj();
        function noDeepCopy() {
            let target = {};
            let source1 = {a: "hello", b: "world"};
            let source2 = {b: {name: "lucia", age: 20}};
            $.extend(target, source1, source2);
            source2.b.name = "LUCIA";
            console.log(target.b.name === 'LUCIA');
        }

        function deepCopy() {
            //deepCopy 后 source不会影响target
            let target = {};
            let source1 = {a: "hello", b: "world"};
            let source2 = {b: {name: "lucia", age: 20}};
            $.extend(true, target, source1, source2);
            source2.b.name = "LUCIA";
            console.log(target.b.name === 'lucia');

            //deepCopy 目标类型为Object，则不直接覆盖，而是覆盖其属性
            target = {};
            source1 = {a: "hello", b: {id: 111}};
            source2 = {b: {name: "lucia", age: 20}};
            $.extend(true, target, source1, source2);
            console.log(target.id === 111);

        }
        // 最好不要用
        // 字符串中的每个字符都会作为target中的一个属性，属性的key为字符串中的索引
        function extendStringToObj() {
            let target = {};
            let src = "hello world";
            jQuery.extend(target, src);
            console.log(target);
        }
    }
)
(jQuery);
