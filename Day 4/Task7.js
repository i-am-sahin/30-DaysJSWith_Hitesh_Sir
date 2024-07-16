let i = 1;
for(i;i <=5 ;i++){
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += '* ';
    }
    console.log(line.trim());
}