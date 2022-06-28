var empty_object ={};

var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};

var flight = {
    airline: "Oceanic",
    num:815,
    departure:{
        IATA:"SYD",
        time:"2004-09-22 15:33",
        city:"nanchang"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:55",
        city: "changsha"
    }
};
flight.num = 223

var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;//因为x和stooge是同一个对象的引用，所以nick为‘Curly’

var a ={},b={},c={};//a和b和c都引用一个不同的空对象
a=b=c={};//a和b和c都引用同一个空对象

if (typeof Object.beget !== 'function') {
    Object.beget = function (o) {
        var F = function () {};
        F.prototype=o;
        return new F();
    };
}
var another_stooge=Object.beget(stooge);

var name;
for (name in another_stooge) {
    if (typeof another_stooge[name] !== 'function') {
        document.writeln(name + ':' + another_stooge[name]);
    }
}

var i;
var properties=[
    'first-name',
    'middle-name',
    'last-name',
    'profession'
];
for (i=0;i<properties.length;i+=1) {
    document.writeln(properties[i] + ':' + another_stooge[properties[i]]);
}

another_stooge.nickname
delete another_stooge.nickname;
another_stooge.nickname