function getArray() {
    console.log(Array.apply(this, arguments));
}

getArray(3, 5, "hello", false, 8);