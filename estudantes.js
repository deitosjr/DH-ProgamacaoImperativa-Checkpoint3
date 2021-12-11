function aluno(nome, faltas, notas){ 
    return {nome: nome,
        faltas: faltas,
            notas: notas,
            calcularMedia: function(){ 
                let totnotas = this.notas.length;
                let total = 0;
                for(var i = 0; i < totnotas; i++) {
                    total += this.notas[i];
                }
                return total/totnotas;
            },
            calculaFaltas: function(){ 
                 return this.faltas+1;
            }
        }; 
} 

var aluno1 = aluno("Nivaldo Dei Tos Junior", 10, [10,5,6.5,8,9]);
var aluno2 = aluno("Emmanuela Dei Tos", 9, [4,8,7,8,10]);
const alunos = [aluno1, aluno2];

//console.log(alunos);
module.exports = alunos;