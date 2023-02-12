function getMatrixMultiplication(r1,c1,r2,c2,matrix1,matrix2){
    if(c1==r2){
        let matrix3 = new Array(r1);
        for(let i=0;i<r1;i++){
            matrix3[i] = new Array(c2);
        }


        for(let i = 0; i< c1 ; i++){
            for(let j = 0 ; j< r2 ;j++){
                matrix3[i][j] = 0;
                for(let k =0 ; k< r2 ; k++){
                    matrix3[i][j] += matrix1[i][k] * matrix2[k][j];

                }
            }
        }

        console.log("Result matrix is \n");
        for (let i = 0; i < c1; i++) 
        {
                for (let j = 0; j < r2; j++)
                {
                console.log(`${matrix3[i][j]}`);
                }
                 console.log("\n");
        }
    }
}
    


    let r1 = 2;
    let c1 = 2;
    let r2 = 2;
    let c2 = 2;

    let matrix1=[[1,2],[3,4]];
    let matrix2=[[1,2],[3,4]];
   // let expected_Result=[7,10,15,22];
getMatrixMultiplication(r1,c1,r2,c2,matrix1,matrix2);
