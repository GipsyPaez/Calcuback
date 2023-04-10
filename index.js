
const express=require ('express');
const app=express();
app.use(express.json());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","POST"); 
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();
});

app.post(
    `sumar`,(req,res)=>{
        const {numero_1, numero_2}= req.body;
        const resultado=parseFloat(numero_1)+parseFloat(numero_2);        
        res.json(resultado);
    }
);
app.post(
    'restar',
    (req, res)=>{
        const {numero_1, numero_2}= req.body;
        const resultado=parseFloat(numero_1)-parseFloat(numero_2);        
        res.json(resultado);
    }
);

app.post(
    'multiplicar',
    (req, res)=>{
        const {numero_1, numero_2}= req.body;
        const resultado=parseFloat(numero_1)*parseFloat(numero_2);        
        res.json(resultado);
    }
);

app.post(
    'dividir',
    (req,res)=>{
        let resultado;
        
        try{
            const {numero_1, numero_2}= req.body;           
            resultado=parseFloat(numero_1)/parseFloat(numero_2);   

        }catch(error){
            resultado=error;
        }
        
        res.json(resultado);
    }
)
app.listen (
    3000,
    ()=>{
        console.log("calculando con presicion")
    }
);
