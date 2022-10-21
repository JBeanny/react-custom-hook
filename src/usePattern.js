const chessPattern = (col,row,sign) => {
    const space = " ";
    const lineBreak = "\n";
    let str = "";

    for(let i=1;i<=row;i++){
        for(let j=1;j<=col;j++){
            if(i%2 !== 0){
                if(j%2 !== 0) str+=space;
                else str+=sign;
            }else{
                if(j%2 !== 0) str+=sign;
                else str+=space;
            }
        }
        str+=lineBreak;
    }
    return str;
}

const trianglePattern = (row,sign) => {
    const lineBreak = "\n";
    const space =" ";
    let str = "";

    for(let i=1;i<=row;i++){
        for(let s=1;s<row;s++){
            str+=space;
        }
        
        for(let j=1;j<=((2*i)-1);j++){
            str+=sign;
        }
        str+=lineBreak;
    }
    return str;
}

const diamondPattern = (row,sign) => {
    const lineBreak = "\n";
    const space =" ";
    let str = "";

    for(let i=0;i<=row;i++){
        for(let s=row;s>i;s--) str+=space;
        for(let j=0;j<i;j++) str+=sign+space;
        str+=lineBreak;
    }
    for(let i=1;i<row;i++){
        for(let s=0;s<i;s++) str+=space;
        for(let j=row;j>i;j--) str+=sign+space;
        str+=lineBreak;
    }
    return str;
}

export default function usePattern(col,row,type,sign){

    if(type === "chess") return chessPattern(col,row,sign);
    else if(type === "triangle") return trianglePattern(row,sign);
    else if(type === "diamond") return diamondPattern(row,sign);
}