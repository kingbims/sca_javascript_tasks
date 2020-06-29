insert = (num) => {
    document.form.textview.value = document.form.textview.value + num;
}

equal = () => {
    let exp = document.form.textview.value;
    if(exp !== "") {
        document.form.textview.value = eval(exp);
    }
}

clean = () => {
    document.form.textview.value = "";
}

back = () => {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}
