const listaAlunos = require("./estudantes");

var curso = {
    nomeCurso: 'Administração',
    notaAprovacao: 6,
    faltasMax: 20,
    estudantes: [],
    addAluno: function () {
        for(var i = 0; i < listaAlunos.length; i++) {
            this.estudantes.push(listaAlunos[i]);
            //total += this.notas[i];
        }
    },
    alunoAprovado: function () {
        for(var i = 0; i < listaAlunos.length; i++) {

            if (listaAlunos[i].calcularMedia()>=this.notaAprovacao && listaAlunos[i].calculaFaltas()<this.faltasMax) {
                //console.log('aprovado');
                listaAlunos[i]['aprovado'] = true;
              } else if (listaAlunos[i].calcularMedia()>=this.notaAprovacao && listaAlunos[i].calculaFaltas()==this.faltasMax) {

                if(listaAlunos[i].calcularMedia()>this.notaAprovacao*1.1)
                    {
                        listaAlunos[i]['aprovado'] = true;
                        //console.log('aprovado');
                    }
                    else
                        {
                            listaAlunos[i]['aprovado'] = false;
                            //console.log('reprovado');
                        }
              } else {
                listaAlunos[i]['aprovado'] = false;
                //console.log('reprovado');
              }
              
            
        }
    }
    
}

//console.log(curso);
curso;
curso.addAluno();
//console.log(curso.estudantes);
console.log(curso.estudantes);
curso.alunoAprovado();
console.log(curso);
console.log(curso.listaAlunos);
