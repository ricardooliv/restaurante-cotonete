const cardapioManha = {
    entradas: [
        { nome:"Batata Frita G", preco:20 },
        { nome:"Macaxeira Frita G", preco:20 }
    ],

    quentinhas: [
        {
            nome:"Quentinha de Carne",
            preco:22,
            acompanhamentos:[
                "Arroz Agrega","Feijão Tropeiro","Macarrão","Salada","Farofa","Vinagrete"
            ]
        },
        {
            nome:"Quentinha de Mista",
            preco:20,
            acompanhamentos:[
                "Arroz Agrega","Feijão Tropeiro","Macarrão","Salada","Farofa","Vinagrete"
            ],
            destaque: true

        },
        {
            nome:"Quentinha de Frango",
            preco:20,
            acompanhamentos:[
                "Arroz Agrega","Feijão Tropeiro","Macarrão","Salada","Farofa","Vinagrete"
            ]
        },
        {
            nome: "Quentinha Toscana",
            preco:20,
            acompanhamentos:[
                "Arroz Agrega","Feijão Tropeiro","Macarrão","Salada","Farofa","Vinagrete"
            ]
        }
        
    ],

    churrascos:[
        {
            nome:"Maminha 1kg",
            preco:140,
            acompanhamentos:[
                "Arroz Agrega e Maria Isabel","Feijão Tropeiro","Batata Frita","Salada"
            ]
        },
        {
            nome:"Maminha 750g",
            preco:110,
            acompanhamentos:[
                "Arroz Agrega e Maria Isabel","Feijão Tropeiro","Batata Frita","Salada"
            ]
        },
        {
            nome:"Maminha 500g",
            preco:85,
            acompanhamentos:[
                "Arroz Agrega e Maria Isabel","Feijão Tropeiro","Batata Frita","Salada"
            ]
        },

        {
            nome:"Picanha Nobre 1kg",
            preco:190,
            acompanhamentos:[
                "Arroz Agrega e Maria Isabel","Feijão Tropeiro","Batata Frita","Salada"
            ]
        },
        {
            nome:"Picanha Nobre 750g",
            preco:140,
            acompanhamentos:[
                "Arroz Agrega e Maria Isabel","Feijão Tropeiro","Batata Frita","Salada"
            ]
        },
        {
            nome:"Picanha Nobre 500g",
            preco:110,
            acompanhamentos:[
                "Arroz Agrega e Maria Isabel","Feijão Tropeiro","Batata Frita","Salada"
            ],
            destaque: true
        }



    ],

    parmegiana:[
        {
            nome:"Parmegiana executivo",
            preco: 55,
            acompanhamentos:[
                "Arroz agrega","Feijao tropeiro","Purê de batata","Salada"
            ]
        },

        {
            nome:"Parmegiana Medio",
            preco: 70,
            acompanhamentos:[
                "Arroz agrega e branco","Feijao tropeiro","Purê de batata","Salada"
            ],
            destaque: true
        },

        {
            nome:"Parmegiana Grande",
            preco: 135,
            acompanhamentos:[
                "Arroz agrega e branco","Feijao tropeiro","Purê de batata","Salada"
            ]
        }
    ],

    bebidas: [
        {
            nome:"Coca Cola lata", 
            preco:6,
            opcoes: ["Normal", "Zero"]
        },
        { 
            nome:"Guarana lata",
            preco:6,
            opcoes: ["Normal", "Zero"] 
        },
        { nome:"fanta Uva lata", preco:6 },
        { nome:"fanta Laranja lata", preco:6 }
    ]
}

const cardapioNoite = {

    entradas: [
        { nome:"Batata frita G", preco:20 },
        { nome:"Macaxeira frita G", preco:20 }
    ],

     quentinhas: [
{
    nome: "Espetinho de Carne",
    preco: 18,
    acompanhamentos: [
        "Arroz à grega",
        "Farofa",
        "Vinagrete"
    ]
},
{
    nome: "Espetinho de Frango",
    preco: 18,
    acompanhamentos: [
        "Arroz à grega",
        "Farofa",
        "Vinagrete"
    ]
},
{
    nome: "Espetinho Misto",
    preco: 18,
    acompanhamentos: [
        "Arroz à grega",
        "Farofa",
        "Vinagrete"
    ],
    destaque: true
}
],

    churrascos:[
        {
            nome:"Maminha 1kg",
            preco:140,
            acompanhamentos:[
                "Arroz Agrega e Maria Isabel","Feijão Tropeiro","Batata Frita","Salada"
            ]
        },
        {
            nome:"Maminha 750g",
            preco:110,
            acompanhamentos:[
                "Arroz Agrega e Maria Isabel","Feijão Tropeiro","Batata Frita","Salada"
            ]
        },
        {
            nome:"Maminha 500g",
            preco:85,
            acompanhamentos:[
                "Arroz Agrega e Maria Isabel","Feijão Tropeiro","Batata Frita","Salada"
            ]
        },

        {
            nome:"Picanha Nobre 1kg",
            preco:190,
            acompanhamentos:[
                "Arroz Agrega e Maria Isabel","Feijão Tropeiro","Batata Frita","Salada"
            ]
        },
        {
            nome:"Picanha Nobre 750g",
            preco:140,
            acompanhamentos:[
                "Arroz Agrega e Maria Isabel","Feijão Tropeiro","Batata Frita","Salada"
            ],
            destaque: true
        },
        {
            nome:"Picanha Nobre 500g",
            preco:110,
            acompanhamentos:[
                "Arroz Agrega e Maria Isabel","Feijão Tropeiro","Batata Frita","Salada"
            ]
        }



    ],

    parmegiana:[
        {
            nome:"Parmegiana executivo",
            preco: 55,
            acompanhamentos:[
                "Arroz agrega","Feijao tropeiro","Purê de batata","Salada"
            ]
        },

        {
            nome:"Parmegiana Medio",
            preco: 70,
            acompanhamentos:[
                "Arroz agrega e branco","Feijao tropeiro","Purê de batata","Salada"
            ],
            destaque: true
        },

        {
            nome:"Parmegiana Grande",
            preco: 135,
            acompanhamentos:[
                "Arroz agrega e branco","Feijao tropeiro","Purê de batata","Salada"
            ]
        }
    ],

    bebidas: [
        {
            nome:"Coca Cola lata", 
            preco:6,
            opcoes: ["Normal", "Zero"]
        },
        { 
            nome:"Guarana lata",
            preco:6,
            opcoes: ["Normal", "Zero"] 
        },
        { nome:"fanta Uva lata", preco:6 },
        { nome:"fanta Laranja lata", preco:6 }
    ]
}