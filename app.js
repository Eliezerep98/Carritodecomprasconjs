let cursos = [
    "HTML Y CSS",
    "JAVASCRIPT",
    "REACT JS Y NODE JS",
    "PYTHON Y MYSGL",
    "MONGODB",
    "GIT COMANDOS Y GIT HUB",
    "PHP",
    "JAVA",
    "RUBY",
    "C++",
    ];
    
    //Agregar productos al carrito (agregarlos hasta que se cancele el prompt)
    function agregarCurso() {
        let nombre = prompt("Ingrese el nombre del curso👨‍💻");
    
        while (nombre) {
    
            cursos.push(nombre.toUpperCase());
            nombre = prompt("Ingrese el nombre del curso👨‍💻");
        }
        listarCursos(cursos)
    }
    
    //Eliminar un producto del carrito (recibe el nombre del producto a eliminar)
    cursos.splice(8);
    
    console.log(cursos);
    
    //Filtrar elementos del carrito según una palabra o término ingresado
    function filtrarCursos(termino=prompt('Ingrese el termino a buscar')) {
    
        let newCursos=cursos.filter(function(curso){
            return curso.includes(termino.toUpperCase())
        })
        
        if(newCursos.length>0){
            listarCursos(newCursos)
        }else{
            console.warn('No hay resultados en la busqueda😢')
        }
    }
    
    //Listar todos los productos que estén en el carrito en orden alfabético
    function listarCursos(arreglo) {
        if (arreglo.length > 0) {
            console.log("Listado de cursos");
            arreglo.sort().map(function(item, index) {
                console.log('${index + 1} -${item}');
            });
            console.log("=================");
        }else{
            console.log('No hay cursos para listar😕')
        }
    }