const mostrarMenu =() => {

    return new Promise (resolve =>{
        console.log(`=========================`.green);
        console.log(`  Seleccione una opción  `.green);
        console.log(`=========================`.green);
        console.log(`${`1.`.green} crear un nuevo producto `);
        console.log(`${`2.`.green} listar producto `);
        console.log(`${`3.`.green} listar cliente`);
        console.log(`${`4.`.green} listar pedidos `);
        console.log(`${`5.`.green} enviar pedidos`);
        console.log(`${`5.`.green} borrar pedido`);
        console.log(`${`0.`.green} salir\n`);

        const readLine = require(`readline`).createInterface({
            input: process.stdin, //node espera lo que digite el usuario
            output: process.stdout //node muestra en consola un mensaje
        });

        // crear la interfaz definida
        readLine.question('seleccione una opción:', (opt)=>{
            readLine.close();
            resolve(opt);
        })


    })
};

const pausa = ()=> {
    return new Promise(resolve =>{
        
        const readLine = require('readline').createInterface({
            input: process.stdin, //node espera lo que digite el usuario
            output: process.stdout //node muestra en consola un mensaje 
        });
        
        // crear interfaz definida 
        readLine.question(`\nPresione ${'ENTER'.yellow} para continuar\n`, (opt) =>{
            readLine.close();
            resolve();
        })

    })
};

module.exports = {
    mostrarMenu,
    pausa
}